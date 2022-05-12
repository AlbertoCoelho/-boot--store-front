import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
        <ProductsContainer>{RenderProducts()}</ProductsContainer>
      </Container>
    </Wrapper>
  );
};

const RenderProducts = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response.data);
    })();
  }, []);

  return products.map(({ name, price, img, _id }) => {
    return (
      <Product onClick={() => navigate(`/${_id}`)} key={_id}>
        <img src={img} alt={name}></img>
        <p>{name}</p>
        <p>R${price.toString().replace(".", ",")}</p>
      </Product>
    );
  });
};

export default HomePage;
