import { cn } from '@/lib/utils';

const BurgerMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center justify-center cursor-pointer select-none"
    >
      <div className="grid justify-items-center gap-2.5">
        <span
          className={cn(
            'h-0.5 w-10 bg-white transition-transform duration-500 transform',
            open ? 'rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'
          )}
        />
        <span
          className={cn(
            'h-0.5 w-10 bg-white transition-transform duration-500 transform',
            open ? '-rotate-45 -translate-y-1.5' : 'rotate-0 translate-y-0'
          )}
        />
      </div>
    </button>
  );
};
export default BurgerMenu;
