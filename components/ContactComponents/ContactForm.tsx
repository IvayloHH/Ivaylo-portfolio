'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import type { CountryData } from 'react-phone-input-2';

const formSchema = z
  .object({
    firstName: z.string().min(3, 'First name is required'),
    lastName: z.string().min(3, 'Last name is required'),
    option: z.string().min(1, 'Please select an option'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(6, 'Invalid phone number'),
    country: z.string().min(2, 'Country is required'),
    dialCode: z.string().min(1, 'Dial code missing'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  })
  .refine(
    (data) => {
      const { phone, dialCode } = data;
      const numericPhone = phone.replace(/\D/g, '');
      if (!numericPhone.startsWith(dialCode)) return false;
      const rest = numericPhone.slice(dialCode.length);
      return rest.length >= 4;
    },
    {
      message: 'Phone number must include country code and valid digits',
      path: ['phone'],
    }
  );

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      country: '',
      dialCode: '',
    },
  });

  const [phoneValue, setPhoneValue] = useState('');

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      const result = await res.json();
      console.log('Email sent successfully:', result);
      // Optionally show success toast or reset form
    } catch (error) {
      console.error('Error sending message:', error);
      // Optionally show error toast
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-4xl mx-auto p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register('firstName')}
            placeholder="First name"
            className="w-full p-3 border border-zinc-700 rounded-md bg-zinc-900 text-white placeholder-zinc-400"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register('lastName')}
            placeholder="Last name"
            className="w-full p-3 border border-zinc-700 rounded-md bg-zinc-900 text-white placeholder-zinc-400"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <select
          {...register('option')}
          className="w-full p-3 border border-zinc-700 rounded-md bg-zinc-900 text-white"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </select>
        {errors.option && (
          <p className="text-red-500 text-sm mt-1">{errors.option.message}</p>
        )}
      </div>
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email address"
          className="w-full p-3  border border-zinc-700 rounded-md bg-zinc-900 text-white placeholder-zinc-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div data-lenis-prevent>
        <PhoneInput
          country={'bg'}
          value={phoneValue}
          onChange={(value: string, country: CountryData) => {
            setPhoneValue(value);
            setValue('phone', value);
            setValue('country', country.countryCode || '');
            setValue('dialCode', country.dialCode || '');
          }}
          inputClass="!w-full !py-3 px-10 !bg-zinc-900 !text-white !border-zinc-700 !rounded-md"
          buttonClass="!bg-zinc-900 !border-zinc-700"
          containerClass="!w-full"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <textarea
          {...register('message')}
          placeholder="Your message..."
          rows={5}
          className="w-full p-3 border border-zinc-700 rounded-md bg-zinc-900 text-white placeholder-zinc-400 resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-rose-600 to-amber-500 text-white py-3 px-6 rounded-lg hover:scale-105 transition-transform"
      >
        Send Message
      </button>
    </form>
  );
}
