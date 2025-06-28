const URL_BASE = "http://localhost:32831/cliente";

// buscar todos os clientes
export async function pegarTodosClientes() {
  const resposta = await fetch(`${URL_BASE}/clientes`);
  return resposta.json();
}

// adiciona um cliente novo
export async function adicionarCliente(dadosCliente: any) {
  const resposta = await fetch(`${URL_BASE}/cadastrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dadosCliente),
  });
  return resposta;
}

// atualiza cliente
export async function atualizarCliente(dadosCliente: any) {
  const resposta = await fetch(`${URL_BASE}/atualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dadosCliente),
  });
  return resposta;
}

// apaga cliente pelo id dele
export async function apagarCliente(idCliente: number) {
  const resposta = await fetch(`${URL_BASE}/excluir`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: idCliente }),
  });
  return resposta;
}
