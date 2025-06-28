import React, { useEffect, useState } from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';
import { atualizarCliente } from '../../services/clienteServico';

const campos = [
  { nome: 'novoNome', rotulo: 'Novo Nome', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novoNomeSocial', rotulo: 'Novo Nome Social', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novoDDD', rotulo: 'Novo DDD', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novoNumeroTelefone', rotulo: 'Novo Telefone', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
];

function extrairIdClienteDaHash() {
  const hash = window.location.hash;
  const resultado = hash.match(/editar\/(\d+)/);
  if (resultado) {
    return resultado[1];
  }
  return null;
}

const AtualizarCliente: React.FC = () => {
  // busca id do clinre
  const [cliente, setCliente] = useState<any | null>(null);

  useEffect(() => {
    const id = extrairIdClienteDaHash();
    if (id) {
      fetch(`http://localhost:32831/cliente/${id}`)
        .then(res => res.json())
        .then(dados => setCliente(dados));
    }
  }, []);

  const aoEnviar = async (dados: Record<string, string>) => {
    if (!cliente) return;
    const nome = dados.novoNome ? dados.novoNome : cliente.nome;
    const nomeSocial = dados.novoNomeSocial ? dados.novoNomeSocial : cliente.nomeSocial;
    const ddd = dados.novoDDD ? dados.novoDDD : (cliente.telefones && cliente.telefones[0]?.ddd) || '';
    const numero = dados.novoNumeroTelefone ? dados.novoNumeroTelefone : (cliente.telefones && cliente.telefones[0]?.numero) || '';
    const clienteAtualizado = {
      id: cliente.id,
      nome,
      nomeSocial,
      telefones: [
        { ddd, numero }
      ]
    };
    await atualizarCliente(clienteAtualizado);
    alert('Cliente atualizado com sucesso!');
    window.location.hash = '#/clientes';
  };

  const aoCancelar = () => {
    window.location.hash = '#/clientes';
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <FormularioPadrao
            campos={campos}
            aoEnviar={aoEnviar}
            aoCancelar={aoCancelar}
            titulo="Atualizar Cliente"
          />
        </div>
      </div>
    </div>
  );
};

export default AtualizarCliente;
