

export default function Login() {



  /* const handleLogin = async () => {

    try {
      const response = await fetch('www.localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("funcionou!")
      } else {
        alert("Email ou Senha incorreta!")
      }
    } catch (error: unknown) {
      alert('Erro ao enviar solicitação de login: '+ error);
    }
  }; */

  return (
    <div className="flex items-center justify-center md:py-40 py-20">
      <div className="w-96 md:p-4 p-6 bg-Azul rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-Branco">
          Login
        </h1>

      </div>
    </div>
  );
}
