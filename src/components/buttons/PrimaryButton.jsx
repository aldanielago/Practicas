export function PrimaryButton({ text, onClick }) {
  return (
    <button type="button"
    className="bg-primary-blue font-quicksand font-bold text-white w-full h-10 hover:bg-secondary-blue transition-colors ease-linear duration-500 rounded-md shadow-lg"
    onClick={ onClick }
    >{ text }</button>
  );
}