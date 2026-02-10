import { useState, useEffect } from "react";
import styled from "styled-components";
import { DisplayCart } from "./cart_items";
import { ProductsCard } from "./products";

export function MyCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    
    <PageLayout>
      <div className="products">
        {products.map((product) => (
          <ProductsCard key={product.id} Product={product} />
        ))}
      </div>

      <DisplayCart />
    </PageLayout>
     );
  
}
const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px; 
  gap: 1rem;
  align-items: start;
`;
