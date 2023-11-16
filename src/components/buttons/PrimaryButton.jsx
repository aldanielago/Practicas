export function PrimaryButton({ text }) {
  return (
    <button type="button" className="bg-primary-blue text-white w-full h-10 hover:bg-secondary-blue transition-colors ease-linear duration-500 rounded-md shadow-lg">{ text }</button>
  );
}