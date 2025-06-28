import React, { useEffect, useState } from 'react';
import TabelaDados from '../../components/TabelaDados';
import { pegarTodosClientes, apagarCliente } from '../../services/clienteServico';

const colunas = [
  { key: 'nome', label: 'Nome' },
  { key: 'nomeSocial', label: 'Nome Social' },
  { key: 'telefone', label: 'Telefone' }
];

const ListagemClientes: React.FC = () => {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    carregarClientes();
  }, []);

  const carregarClientes = () => {
    pegarTodosClientes().then((dados) => {
      // Monta o telefone a partir do primeiro item do array 'telefones'
      const clientesComTelefone = (dados || []).map((cliente: any) => {
        let telefone = '';
        if (Array.isArray(cliente.telefones) && cliente.telefones.length > 0) {
          const t = cliente.telefones[0];
          telefone = t.ddd ? `(${t.ddd}) ${t.numero}` : t.numero;
        }
        return {
          ...cliente,
          telefone
        };
      });
      setClientes(clientesComTelefone);
    });
  };

  const handleEdit = (cliente: any) => {
    window.location.hash = `#/clientes/editar/${cliente.id}`;
  };

  const handleDelete = async (cliente: any) => {
    if (window.confirm('Tem certeza que deseja remover este cliente?')) {
      await apagarCliente(cliente.id);
      carregarClientes();
      alert('Cliente foi removido com sucesso!');
    }
  };

  const navegarCadastro = () => {
    window.location.hash = '#/clientes/cadastrar';
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold text-success m-0">Clientes</h1>
        <button
          type="button"
          className="btn btn-success d-flex align-items-center gap-2"
          onClick={navegarCadastro}>
          <span className="fw-bold">novo Cliente</span>
        </button>
      </div>
      <TabelaDados
        colunas={colunas}
        dados={clientes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ListagemClientes;
