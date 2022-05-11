import { useState, useEffect } from "react";
import { getProducts } from "../../services/api";
import {
  Container,
  Wrapper,
  Logo,
  NavigateBar,
  ProductsContainer,
  Product,
} from "./style";

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <p>Card Game Store</p>
        </Logo>
        <NavigateBar>
          <ion-icon name="storefront"></ion-icon>
          <ion-icon name="person-circle"></ion-icon>
          <ion-icon name="cart"></ion-icon>
        </NavigateBar>
        <ProductsContainer>{RenderProducts()}</ProductsContainer>
      </Container>
    </Wrapper>
  );
};

const RenderProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response.data);
    })();
  }, []);

  products.map(({ name, price, img, _id }) => {
    return (
      <Product key={_id}>
        <img src={img} alt={name}></img>
        <p>{name}</p>
        <p>{price}</p>
      </Product>
    );
  });
};

export default HomePage;
