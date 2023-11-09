import React, { useState } from "react";
import "./TodoList.css";
import Icone from "./assets/icon.png";

function TodoList() {
  const [lista, setlista] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  function adicionaItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return;
    }
    setlista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById("input-entrada").focus();
  }

  function clicou(index) {
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setlista(listaAux);
  }

  function deleta(index) {
    const listaAux = [...lista];
    listaAux.splice(index, 1);
    setlista(listaAux);
  }

  function deletaTudo() {
    setlista([]);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionaItem}>
        <input
          id="input-entrada"
          type="text"
          value={novoItem}
          onChange={(e) => {
            setNovoItem(e.target.value);
          }}
          placeholder="Adicione uma tarefa"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
      <div className="listaTarefas">
        <div style={{ textAlign: "center" }}>
          {lista.length < 1 ? (
            <img className="icone-central" src={Icone} />
          ) : (
            lista.map((item, index) => (
              <div
                key={index}
                className={item.isCompleted ? "item completo" : "item"}
              >
                <span
                  onClick={() => {
                    clicou(index);
                  }}
                >
                  {item.text}
                </span>
                <button
                  onClick={() => {
                    deleta(index);
                  }}
                  className="del"
                >
                  Deletar
                </button>
              </div>
            ))
          )}
          {lista.length > 0 && (
            <button
              onClick={() => {
                deletaTudo();
              }}
              className="deleteAll"
            >
              Deletar Todas
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
