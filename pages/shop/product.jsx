import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, proName, cost, proImg } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={proImg} />
      <div className="description">
        <p>
          <b>{proName}</b>
        </p>
        <p> Rs{cost}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add into the kart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
