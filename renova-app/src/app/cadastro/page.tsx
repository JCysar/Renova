export default function Cadastro() {
  return (
    <div className="flex items-center justify-center  md:py-40 py-20 ">
      <div className="w-96 md:p-4 p-6 bg-Azul rounded-lg ">
        <h1 className="text-2xl font-bold mb-4 text-center text-Branco">
          Cadastro
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-Branco text-sm font-bold mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="username"
              className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
              placeholder="Digite seu Nome"
              /* onChange={(e) => setUsername(e.target.value)} */
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-Branco text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="username"
              className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
              placeholder="Digite seu Email"
              /* onChange={(e) => setUsername(e.target.value)} */
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-Branco text-sm font-bold mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
              placeholder="Digite sua senha"
              /* onChange={(e) => setPassword(e.target.value)} */
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="w-full bg-Azul_claro text-Branco p-2 rounded hover:bg-blue-700"
              /* onClick={handleLogin} */
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
