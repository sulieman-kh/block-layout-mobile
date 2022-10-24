import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
display : flex;
padding: 20px;
flex-direction: row;
`;


const Cards = () => {
  return (
    <Container>
      <Card />
    </Container>
  )
}

export default Cards