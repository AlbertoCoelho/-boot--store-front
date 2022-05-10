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
  width: 165px;
  height: 50px;

  margin-top: 8%;
  margin-bottom: 70px;

  font-family: "Righteous";
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  text-align: center;

  color: #ffffff;
`;

const NavigateBar = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #7f8d57;
  box-shadow: 0px 0px 12px 3px #7f8d57;

  display: flex;
  justify-content: space-around;
  align-items: center;

  ion-icon {
    font-size: 25px;
    color: white;
  }
`;

export { Wrapper, Container, Logo, NavigateBar };
