import { useNavigate } from 'react-router-dom';

import { Wrapper,Container,Gif,Title,BackHome } from './style';
import cardgif from './gif/cardgif.gif';
import { IconContext } from 'react-icons';
import { GoHome } from "react-icons/go";

const CheckOut = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Gif>
          <img src={cardgif} alt="cardgif" />
        </Gif>
        <Title>Sua compra foi realizada com sucesso!</Title>
        <BackHome onClick={() => navigate("/")}>
          <IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name", size: "2em" }}>
            <GoHome />
          </IconContext.Provider>
          <span>Voltar para a Home</span>
        </BackHome>
      </Container>
    </Wrapper>
  );
}

export default CheckOut;