import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newMenu = items.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={categories} filter={filterCategory} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;
