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

const Gif = styled.div`
  
  margin-top: 50px;

  img {
    width: 250px;
    height: 154.51px;
    object-fit: fill;
  }
`

const Title = styled.div`
  margin-top: 35px;
  margin-bottom: 87px;

  font-family: 'Righteous';
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  text-align: center;

  color: #FFFFFF;
`

const BackHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding-left: 10px;
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    text-align: center;

    color: #FFFFFF;
  }

  cursor: pointer;
`

export {
  Wrapper,
  Container,
  Gif,
  Title,
  BackHome
}