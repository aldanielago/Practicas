export function FormInput({ type, placeholder }) {
  return (
    <input type={ type }
    placeholder={ placeholder }
    className={`font-quicksand border border-dark-text-gray h-3 rounded-md ${type == 'calendar' ? 'p-2' : 'p-4'}`}/>
  )
}