import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container w-100 border border-danger">
      {products.map(function (product) {
        return (
          <div className="card" key={product.id}>
            <div className="card-body"></div>
            <p>id: {product.id}</p>
            <p>nombre: {product.title}</p>
            <p>precio: {product.price}</p>
            <p>descripcion: {product.description}</p>
            <p>categoria: {product.category}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
