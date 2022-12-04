import  { useContext } from "react";
import './Basket/Basket.css'
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../components/Context/ContextProvider";
import BasketItem from "./Basket/BasketItem";


export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span></span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Back
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
               
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
          
            <div className="basket_price">
              <span>Total</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} $</span>
            </div>
           
            
            
            <div className="basket_send">
              <span></span>
              <span>{state.totalPrice.toLocaleString()} $</span>
            </div>
            <button className="basket_button_buy">Buy</button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              delete {state.basket.length} 
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title"></span>
        </div>
      )}
    </>
  );
}
