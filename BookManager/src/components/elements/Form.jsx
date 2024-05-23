export function Form({ text, children, onSubmit }) {
  return (
    <section className="center my-10 border border-dark-text-gray p-8 rounded-md">
      <h1 className="font-quicksand font-bold mb-4 text-xl">{text}</h1>
      <form onSubmit={onSubmit} className="flex flex-col w-96">
        {children}
      </form>
    </section>
  );
}
