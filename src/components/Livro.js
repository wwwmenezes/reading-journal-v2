import React from "react";

const Livro = ({ livros, onRemoveBook }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mt-4">Livros Cadastrados</h2>
      {livros.length === 0 ? (
        <p className="text-center">Nenhum livro cadastrado ainda.</p>
      ) : (
        <ul className="list-group">
          {livros.map((livro, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>{livro.titulo}</strong> — {livro.autor} ({livro.ano})
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => onRemoveBook(index)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Livro;
