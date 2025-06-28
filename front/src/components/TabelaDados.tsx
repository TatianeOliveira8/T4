import React, { useState } from 'react';

interface Coluna {
  key: string;
  label: string;
  sortable?: boolean;
}

interface TabelaDadosProps {
  colunas: Coluna[];
  dados: Record<string, any>[];
  onEdit?: (item: Record<string, any>) => void;
  onDelete?: (item: Record<string, any>) => void;
}

const itemsPerPage = 10;

const TabelaDados: React.FC<TabelaDadosProps> = ({ colunas, dados, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const dadosPaginados = dados.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="card shadow-sm p-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              {colunas.map((coluna) => (
                <th key={coluna.key} className="text-nowrap">{coluna.label}</th>
              ))}
              {(onEdit || onDelete) && <th className="text-nowrap">Ações</th>}
            </tr>
          </thead>
          <tbody>
            {dadosPaginados.map((item, index) => (
              <tr key={index}>
                {colunas.map((coluna) => (
                  <td key={coluna.key} className="text-nowrap">{item[coluna.key]}</td>
                ))}
                {(onEdit || onDelete) && (
                  <td>
                    <div className="d-flex gap-2">
                      {onEdit && (
                        <button
                          type="button"
                          className="btn btn-outline-success btn-sm"
                          onClick={() => onEdit(item)}
                        >
                          Editar
                        </button>
                      )}
                      {onDelete && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => onDelete(item)}
                        >
                          Remover
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-end mt-3">
          <nav>
            <ul className="pagination mb-0">
              <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page} className={`page-item${currentPage === page ? ' active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                </li>
              ))}
              <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TabelaDados;
