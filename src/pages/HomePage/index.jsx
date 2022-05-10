import { Container, Wrapper, Logo, NavigateBar } from "./style";

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Card Game Store</Logo>
        <NavigateBar>
          <ion-icon name="storefront"></ion-icon>
          <ion-icon name="person-circle"></ion-icon>
          <ion-icon name="cart"></ion-icon>
        </NavigateBar>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
