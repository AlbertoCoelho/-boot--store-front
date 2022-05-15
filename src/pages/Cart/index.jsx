import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCartProducts, makePurchase } from "../../services/api";

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

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getCartProducts();
      setProducts(response.data.products);
    })();
  }, []);

const renderProducts = () => {
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

const renderTotal = () => {
  let total = 0;
  products.forEach((product) => (total += product.price));
  return total.toString().replace(".", ",");
};

const purchase = async () => {
  try {
    await makePurchase(products);
    setProducts([]);
    navigate("/checkout");
  } catch (err){
    console.log(err);
  }
}

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
              {renderProducts()}
              <TotalContainer>
                <button onClick={purchase}>
                  <p>FECHAR PEDIDO</p>
                  <span>TOTAL: R$ {renderTotal()}</span>
                </button>
              </TotalContainer>
            </ProductsContainer>
          </main>
        </CartContainer>
      </Container>
    </Wrapper>
  );
};

export default Cart;
