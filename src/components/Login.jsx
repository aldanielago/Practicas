export function Login() {
  return (
    <section className="grid place-items-center mt-20">
      <h1>Welcome back</h1>
      <form className="flex flex-col w-96 h-96 ali">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="username"/>
        <button type="button">Login</button>
      </form>
    </section>
  )
}