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
  TotalContainer,
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
            <ProductsContainer>
              {RenderProducts()}
              <TotalContainer>
                <button>
                  <p>FECHAR PEDIDO</p>
                  <span>TOTAL: R$ {RenderTotal()}</span>
                </button>
              </TotalContainer>
            </ProductsContainer>
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
      setProducts(response.data.products);
    })();
  }, []);

  return products.map(({ name, price, img }, index) => {
    return (
      <Product key={index}>
        <img src={img} alt={name}></img>
        <ProductInfo>
          <p>{name}</p>
          <p className="price">R${price.toString().replace(".", ",")}</p>
        </ProductInfo>
      </Product>
    );
  });
};

const RenderTotal = () => {
  const [products, setProducts] = useState([]);
  let total = 0;

  useEffect(() => {
    (async () => {
      const response = await getCartProducts();
      setProducts(response.data.products);
    })();
  }, []);

  products.forEach((product) => (total += product.price));

  return total.toString().replace(".", ",");
};

export default Cart;
