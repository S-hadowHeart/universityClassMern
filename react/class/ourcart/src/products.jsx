// Objecctive : Create a shopping cart componenet that manages items , quantities , and totals 
//   1. Add items to cart (name , price , quantity)
//   2.Display cart items with individual totals
//   3.update quantity for each items
//   4.remove items from cart
//   5.calculate and display subtotal , tax (10%) and total 
//   6.clear entire cart
// objective : Create a theme switcher that toggles between light and dark modes 
//  Requirements : 
//  1.Tottle between light and dark themes
//  2. Apply theme to component StyleSheetDisplay current theme
//  3. Display current theme



import React, { Component } from "react";
import styled from 'styled-components';
import { useAppContext } from "./AppContext";

export function ProductsCard({ Product }) {
  const {addToCart} = useAppContext();
  return (
    <StyledWrapper>
      {/* setCart = "haha";
      {console.log(Cart)} */}
      <div className="card">
        <div className="image_container">
          <img src={Product.image} alt={Product.title} className="image" />
        </div>
        <div className="title">
          <span>{Product.title}</span>
        </div>
        <div className="action">
          <div className="price">
            <span>{Product.price}</span>
          </div>
          <button className="cart-button"
          onClick={addToCart(Product.id)}
          >
            <svg
              className="cart-icon"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span>Add to cart</span>
            
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-block;
  .card {
    margin : 10px;
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    padding: 1rem;
    width: 14rem;
    background-color: var(--bg-card);

    border-radius: 1rem;
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;

    position: relative;
    z-index: 5;

    width: 100%;
    height: 8rem;
    // background-color: var(--primary-800);
    background-color : white;

    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 3rem;
    fill: var(--light);
  }

  .title {
    overflow: clip;

    width: 100%;

    font-size: 1rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
  }

  .list-size {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.25rem;
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;

    padding: 0.5rem;
    background-color: var(--zinc-800);

    font-size: 0.75rem;
    color: var(--light);

    border: 2px solid var(--zinc-800);
    border-radius: 0.25rem;

    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }
  .item-list-button:focus {
    background-color: var(--primary);

    border: 2px solid var(--primary-shadow);

    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--light);
  }

  .cart-button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    width: 100%;
    background-image: var(--bg-linear);

    font-size: 0.75rem;
    font-weight: 500;
    color: var(--light);
    text-wrap: nowrap;

    border: 2px solid hsla(262, 83%, 58%, 0.5);
    border-radius: 0.5rem;
    box-shadow: inset 0 0 0.25rem 1px var(--light);
  }

  .cart-button .cart-icon {
    width: 1rem;
  }
`;


