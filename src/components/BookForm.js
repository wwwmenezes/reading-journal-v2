import React, { useState } from "react";

const BookForm = ({ onAddBook }) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !autor || !ano) {
      alert("Preencha todos os campos!");
      return;
    }
    onAddBook({ titulo, autor, ano });
    setTitulo("");
    setAutor("");
    setAno("");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Autor</label>
        <input type="text" className="form-control" value={autor} onChange={(e) => setAutor(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Ano</label>
        <input type="number" className="form-control" value={ano} onChange={(e) => setAno(e.target.value)} min={new Date().getFullYear() - 50} max={new Date().getFullYear()} />
      </div>
      <button type="submit" className="btn btn-primary">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;
