import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b5fc5;
`

const Container = styled.div`
  min-height: 100vh;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const Logo = styled.div`
  position: absolute;
  top: 50px;

  cursor: pointer;
`

const Title = styled.div`
  width: 165px;
  height: 50px;

  margin-top: 148px;
  margin-bottom: 87px;

  font-family: 'Righteous';
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  text-align: center;

  color: #FFFFFF;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFFFFF;

  margin-top: 36px;
  
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  text-decoration-line: none;
`;

export {
  Wrapper,
  Container,
  Logo,
  Title,
  StyledLink
}