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

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90vw;
  margin-top: 210px;
`;

const Product = styled.div`
  background-color: #7f8d57;
  width: 40%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  p {
    width: 90%;
    margin-top: 5px;
    color: white;
    font-family: "Roboto";
    font-size: 18px;
    text-align: left;
    margin-bottom: 3px;
  }
  img {
    width: 100%;
  }
`;

export { Wrapper, Container, Logo, NavigateBar, ProductsContainer, Product };
