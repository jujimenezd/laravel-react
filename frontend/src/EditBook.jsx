import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const baseUrl = "http://127.0.0.1:8000/api/books";
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateBook = () => {
    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
      })
      .catch((error) => console.error("error actualizando"));
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
        console.log(data);
      })
      .catch((error) => console.error("error cargando", error));
  }, []);

  return (
    <div>
      <div>
        <h1>Books</h1>
        <h1>Guardar libro</h1>
        <input
          type="text"
          placeholder="Ingrese el nombre: "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="button" className="btn btn-success" onClick={updateBook}>
          Agregar libro
        </button>
      </div>
    </div>
  );
}

export default EditBook;
