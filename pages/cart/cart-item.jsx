import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, proName, cost, productImg } = props.data;
  const { cartItem, addCart, removeCart, updateCartCount } =
    useContext(ShopContext);

  return (
    <div className="crtItem">
      <img src={productImg} />
      <div className="dscriptn">
        <p>
          <b>{proName}</b>
        </p>
        <p> Cost: Rs{cost}</p>
        <div className="cntHandler">
          <button onClick={() => removeCart(id)}> - </button>
          <input
            value={cartItem[id]}
            onChange={(e) => updateCartCount(Number(e.target.value), id)}
          />
          <button onClick={() => addCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
