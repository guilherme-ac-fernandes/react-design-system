import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps { children: ReactNode }
export interface TextInputIconProps { children: ReactNode }
export interface TextInputInputProps extends InputHTMLAttributes<HTMLElement> {}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      { children }
    </div>
  );
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      { children }
    </Slot>
  );
};

function TextInputInput(props: TextInputInputProps) {
  return (
      <input
        className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        { ...props }
      />
  );
}

TextInputInput.displayName = 'TextInput.Input';
TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
