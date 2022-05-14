import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b5fc5;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Logo = styled.div`
  z-index: 10;

  width: 100vw;
  height: 150px;

  background-color: #1b5fc5;

  position: fixed;
  display: flex;
  justify-content: center;
  p {
    width: 165px;
    font-family: "Righteous";
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    text-align: center;
    margin-top: 30px;
    color: #ffffff;
  }
`;

const NavigateBar = styled.div`
  z-index: 10;
  width: 100vw;
  height: 50px;
  background-color: #7f8d57;
  box-shadow: 0px 0px 12px 3px #7f8d57;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  margin-top: 150px;

  ion-icon {
    font-size: 25px;
    color: white;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin-top: 210px;

  header {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 18px;
    color: white;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const ProductsContainer = styled.div``;
const Product = styled.div`
  margin-bottom: 20px;
  background-color: rgba(127, 141, 87, 0.78);
  border-radius: 10px;
  display: flex;
  position: relative;
  img {
    height: 100px;
  }
`;
const ProductInfo = styled.div`
  margin: 10px;
  font-family: "Roboto";
  font-weight: 700;
  color: white;
  .price {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const TotalContainer = styled.div`
  button {
    width: 100%;
    height: 55px;
    border-radius: 10px;
    background-color: #7f8d57;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    p {
      font-family: "Roboto";
      font-weight: 700;
      color: white;
      font-size: 16px;
      letter-spacing: 3px;
      margin-bottom: 3px;
    }
    span {
      font-family: "Roboto";
      font-weight: 700;
      color: white;
    }
  }
`;

export {
  Wrapper,
  Container,
  Logo,
  NavigateBar,
  CartContainer,
  ProductsContainer,
  Product,
  ProductInfo,
  TotalContainer,
};
