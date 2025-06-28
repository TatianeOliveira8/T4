import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';
import { adicionarCliente } from '../../services/clienteServico';

const campos = [
  { nome: 'nome', rotulo: 'Nome Completo', tipo: 'text', valor: '', placeholder: 'Digite o nome completo', obrigatorio: true },
  { nome: 'nomeSocial', rotulo: 'Nome Social', tipo: 'text', valor: '', placeholder: 'Digite o nome social', obrigatorio: false },
  { nome: 'ddd', rotulo: 'DDD', tipo: 'text', valor: '', placeholder: '00', obrigatorio: true },
  { nome: 'numeroTelefone', rotulo: 'Telefone', tipo: 'text', valor: '', placeholder: '00000-0000', obrigatorio: true }
];

const CadastroCliente: React.FC = () => {
  const aoEnviar = async (dados: Record<string, string>) => {
    const cliente = {
      nome: dados.nome,
      nomeSocial: dados.nomeSocial,
      telefones: [
        {
          ddd: dados.ddd,
          numero: dados.numeroTelefone
        }
      ]
    };
    await adicionarCliente(cliente);
    alert('Cliente cadastrado com sucesso!');
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
            titulo="Cadastrar Cliente"
            campos={campos}
            aoEnviar={aoEnviar}
            aoCancelar={aoCancelar}
          />
        </div>
      </div>
    </div>
  );
};

export default CadastroCliente;
