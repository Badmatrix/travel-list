import React, { useState } from "react";

export default function Form({ handleAddItem }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = {
      id: Date.now(),
      description: desc,
      quantity,
      packed: false,
    };
    handleAddItem(newItem);
    // console.log(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <form action="" className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?🐱‍👤</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const num = i + 1;
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button>add</button>
    </form>
  );
}
