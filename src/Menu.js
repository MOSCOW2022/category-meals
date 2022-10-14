import React from "react";

const Menu = ({ menu }) => {
  return (
    <div className=" section-center ">
      {menu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt="" className="photo" />
            <div className="item-info">
              <header>
                <h4>{title} </h4>

                <h4 className="price">${price} </h4>
              </header>
              <p className="item-text"> {desc} </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
