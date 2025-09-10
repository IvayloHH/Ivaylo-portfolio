import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Request body:', body);
    const {
      firstName,
      lastName,
      email,
      message,
      country,
      dialCode,
      option,
      phone,
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'Ivaylo from Ivayloverse <dev@ivayloverse.com>',
      replyTo: email,
      to: 'hivailo.hristov@gmail.com',
      subject: 'New message from portfolio contact form',
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        message,
        country,
        dialCode,
        option,
        phone,
      }),
    });

    if (error) {
      console.error('🔴 Resend error:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
