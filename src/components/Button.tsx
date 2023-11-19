interface ButtonProps {
  label: string;
  secondary?: boolean;
}

export default function Button({ label, secondary }: ButtonProps) {
  const baseClasses = 'font-manrope font-bold text-body px-6 py-4 cursor-pointer transition-all';
  const primaryClasses = 'bg-eucaplyptus text-dark-purple border-2 border-transparent hover:bg-dark-purple hover:border-2 hover:border-eucaplyptus hover:text-eucaplyptus';
  const secondaryClasses = 'text-white decoration-eucaplyptus decoration-4 underline underline-offset-8 decoration-th hover:text-eucaplyptus';
  
  return (
    <button className={`${baseClasses} ${secondary ? secondaryClasses : primaryClasses}`}>
      {label}
    </button>
  )
}