import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Table() {
  const baseUrl = "http://127.0.0.1:8000/api/books";
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function getData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching lbros", error));
  }

  // enviar datos especificados, por el metodo POST y es de tipo json
  function sendData() {
    fetch("http://127.0.0.1:8000/api/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        getData(baseUrl);
        setName("");
        setPrice("");
      })
      .catch(function (error) {
        console.error("Error sending data:", error);
      });
  }

  function deleteData(id) {
    alert(`usted quiere eliminar el id ${id}`);
    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: "DELETE",
    }).then(function (data) {
      getData(baseUrl);
    });
  }

  // recibe 2 argumentos -> "funcion anonima" -> "array de dependencias"
  useEffect(function () {
    getData(baseUrl);
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <h1>Guardar libro</h1>
      <input
        type="text"
        placeholder="Ingrese el nombre: "
        value={name}
        onChange={function (e) {
          console.log(e.target.value);
          return setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Ingrese el precio: "
        value={price}
        onChange={function (e) {
          console.log(e.target.value);
          return setPrice(e.target.value);
        }}
      />
      <button type="button" className="btn btn-success" onClick={sendData}>
        Agregar libro
      </button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map(function (book) {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={function () {
                      deleteData(book.id);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <Link to={`/editar/${book.id}`} className="btn btn-warning">
                    Editar
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
