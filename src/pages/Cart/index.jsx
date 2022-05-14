import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCartProducts } from "../../services/api";

import {
  Container,
  Wrapper,
  Logo,
  NavigateBar,
  CartContainer,
  ProductsContainer,
  Product,
  ProductInfo,
} from "./style";

const Cart = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <p>Card Game Store</p>
        </Logo>
        <NavigateBar>
          <Link to="/">
            <ion-icon name="storefront"></ion-icon>
          </Link>
          <Link to="/sign-in">
            <ion-icon name="person-circle"></ion-icon>
          </Link>
          <Link to="/carrinho">
            <ion-icon name="cart"></ion-icon>
          </Link>
        </NavigateBar>
        <CartContainer>
          <header>Seu carrinho:</header>
          <main>
            <ProductsContainer>{RenderProducts()}</ProductsContainer>
          </main>
        </CartContainer>
      </Container>
    </Wrapper>
  );
};

const RenderProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCartProducts();
      setProducts(response.data);
    })();
  }, []);

  return products.map(({ name, price, img, _id }) => {
    return (
      <Product key={_id}>
        <img src={img} alt={name}></img>
        <ProductInfo>
          <p>{name}</p>
          <p>R${price.toString().replace(".", ",")}</p>
        </ProductInfo>
      </Product>
    );
  });
};

export default Cart;
