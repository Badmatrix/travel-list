import React, { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirm = window.confirm(
      "are you sure you want to delete all item!!"
    );
    if (confirm) setItems([]);
  }
  return (
    <div className="container">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
