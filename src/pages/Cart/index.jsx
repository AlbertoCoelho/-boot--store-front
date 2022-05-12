import { Link } from "react-router-dom";

import { Container, Wrapper, Logo, NavigateBar, CartContainer } from "./style";

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
        <CartContainer>Carrinho</CartContainer>
      </Container>
    </Wrapper>
  );
};

export default Cart;
