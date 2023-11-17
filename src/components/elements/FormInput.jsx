export function FormInput({ text, type, placeholder, children }) {
  const normalInput = (
    <input type={ type }
    placeholder={ placeholder }
    className={`font-quicksand border border-dark-text-gray h-3 rounded-md ${type == 'calendar' ? 'p-2' : 'p-4'}`}/>
  );

  const selectInput = (
    <select className="rounded-md font-quicksand border-dark-text-gray border p-2 box-border">
      { children }
    </select>
  );

  return (
    <>
      <label className='flex flex-col gap-2 mb-4'>
        <span className="font-quicksand ">{text}</span>
        {type != 'select' ? normalInput : selectInput}
      </label>
    </>
  )
}