import React, { useState } from "react";
import  Item  from "./Item";

export default function PackingList({
  items,
  handleDelete,
  handleChecked,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItem = items.slice().sort((a, b) => +b.packed - +a.packed);
  if (sortBy === "quantity")
    sortedItem = items.slice().sort((a, b) => +b.quantity - +a.quantity);

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => {
          return (
            <Item
              item={item}
              handleDelete={handleDelete}
              handleChecked={handleChecked}
              key={item.id}
            />
          );
        })}
      </ul>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">sort by input</option>
        <option value="description">sort by description</option>
        <option value="packed">sort by packed status</option>
        <option value="quantity">sort by item quantity</option>
      </select>
      <button onClick={handleClear}>clear list</button>
    </div>
  );
}
