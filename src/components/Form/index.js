import React, { useState } from "react";
import "./style.css";

function Form({ onSubmit }) {
  const [formOpen, setFormOpen] = useState(false);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function onClick() {
    const min = Math.ceil(1);
    const max = Math.floor(1000);
    const rand = Math.floor(Math.random() * (max - min) + min);

    setFormOpen(!formOpen);
    
    const product = {
      id: `${rand}`,
      alt: `img-${img}`,
      img,
      name,
      price,
      description,
    };
    onSubmit(product);
  }

  const button = (
    <button className="fab" onClick={() => setFormOpen(true)}>
      Add Product
    </button>
  );

  const form = (
    <div className="form-container">
      <label>Image</label>
      <input value={img} onChange={(e) => setImg(e.target.value)} />
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Price</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>Description</label>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => onClick()}>Add</button>
    </div>
  );
  
  return formOpen ? form : button;
}

export default Form;
