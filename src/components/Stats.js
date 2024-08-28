import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>start adding item to your list 📝 and get ready🚀</em>
      </footer>
    );
  const itemPacked = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / itemPacked) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you are ready to go!! ✈🐱‍🏍"
          : `💼you have ${itemPacked} items on your list and already packed 
        ${numPacked} (${percentage})%`}
      </em>
    </footer>
  );
}
