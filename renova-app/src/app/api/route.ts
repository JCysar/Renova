export async function loginRoute(user: object) {
    try {
      const response = await fetch('www.localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        return alert("funcionou!")
      } else {
        return alert("Email ou Senha incorreta!")
      }
    } catch (error: unknown) {
      return alert('Erro ao enviar solicitação de login: '+ error);
    }
  };
