import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import BookForm from "./components/BookForm";
import Livro from "./components/Livro";
import Footer from "./components/Footer";

function App() {
  // Carregar os livros do localStorage ao iniciar
  const [livros, setLivros] = useState(() => {
    const livrosSalvos = localStorage.getItem("livros");
    return livrosSalvos ? JSON.parse(livrosSalvos) : [];
  });

  // Salvar os livros no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("livros", JSON.stringify(livros));
  }, [livros]);

  const adicionarLivro = (livro) => {
    setLivros([...livros, livro]);
  };

  const removerLivro = (index) => {
    const novosLivros = [...livros];
    novosLivros.splice(index, 1);
    setLivros(novosLivros);
  };

  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Cadastro de Livros</h1>
      <div id="formulario">
        <BookForm onAddBook={adicionarLivro} />
      </div>
      <Livro livros={livros} onRemoveBook={removerLivro} />
      <Footer />
    </div>
  );
}

export default App;
