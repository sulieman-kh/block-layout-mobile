import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckIcon from '@material-ui/icons/Check';
import { mobile } from './responsive';


const Container = styled.div`
display:flex;
justify-content: space-between;
${mobile({
  flexDirection: "column",
})};
`;
const Wrapper = styled.div`
width: 30%;
margin-bottom: 25px;
border-radius: 25px;
border: 0.5px solid #828282;
justify-content: space-between;
${mobile({
  width: "100%"
})};
`;
const ImgContainer = styled.div`
display:flex;
position: relative;
`;
const Image = styled.img`
width:100%;
object-fit: cover;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
`;
const ImgContent = styled.div`
position: absolute;
margin-top: ${(props) => props.position};
background-color:#${(props) => props.bachGroundColor};
border-top-left-radius: ${(props) => props.border};
border-bottom-right-radius: ${(props) => props.border};
color: #${(props) => props.color};;
padding: 10px;
padding-left:30px;
padding-right:30px;
`;
const CardBody = styled.div`
`;
const IconeTimeTop = styled.div`
margin: 15px;
color: #C7C7C7;
display:flex;
`;
const TimeIcon = styled.div``;
const Time = styled.div`
margin-left: 5px
`;
const Title = styled.p`
font-weight: 500;
font-size: 15px;
margin-left:15px;
`;
const Desc = styled.ul`
display: flex;
flex-wrap: wrap;
list-style:none;
line-height: 1.8;
`;
const List = styled.li`
margin-left: -27px;
font-weight: 400;
font-size: 14px;
`;
const ContainerTimes = styled.div`
display:flex;
justify-content:space-between;
margin-left:50px;
padding-right:15px;
`;
const Times = styled.div`
cursor:pointer;
background-color:#D9E8FF;
color:#343434;
border-radius: 10px;
padding: 0 12px 0px 12px ;
font-size:16px
`;
const FooterCard = styled.div`
display:flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Price = styled.div`
font-size: 30px;
`;
const FooterLeft = styled.div`
font-size: 10px;
`;
const Right = styled.div`
flex: 1;
display: flex;
padding:20px;
`;
const Button = styled.button`
cursor:pointer;
background-color: #FED74B;
color:#404040;
border: 0.5px solid #CBA500;
border-radius: 25px;
padding: 0px 30px;
font-size: 22px;
height:50px
`;



const Card = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/51snrrW/sankt-peterburg-piter-st-3495.jpg' />
          <ImgContent position="35px" bachGroundColor="FED74B" >НОВИНКА</ImgContent>
        </ImgContainer>


        <CardBody>
          <IconeTimeTop>
            <TimeIcon>
              <AccessTimeIcon />
            </TimeIcon>
            <Time>2 часа</Time>
          </IconeTimeTop>
          <Title>АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</Title>

          <Desc>
            <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Билет на целый день</List>
            <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Неограниченное число катаний</List>
            <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> 6 остановок у главных достопримечательностей</List>
            <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Ближайший рейс сегодня</List>
          </Desc>
          <ContainerTimes>
            <Times>12:00</Times>
            <Times>12:00</Times>
            <Times>12:00</Times>
            <Times>12:00</Times>
          </ContainerTimes>
        </CardBody>
        <FooterCard>
          <Left><Price>900 ₽</Price>
            <FooterLeft>1200 ₽ на причале</FooterLeft>
          </Left>
          <Right><Button>Подробнее</Button></Right>
        </FooterCard>
      </Wrapper>

      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/51snrrW/sankt-peterburg-piter-st-3495.jpg' />
          <ImgContent bachGroundColor="7553FF" border="25px" color="ffff">НОВИНКА</ImgContent>
        </ImgContainer>
        <CardBody>
          <IconeTimeTop>
            <TimeIcon>
              <AccessTimeIcon />
            </TimeIcon>
            <Time>2 часа</Time>
          </IconeTimeTop>
          <Title>АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</Title>
        </CardBody>
        <Desc>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Билет на целый день</List>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Неограниченное число катаний</List>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> 6 остановок у главных достопримечательностей</List>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Ближайший рейс сегодня</List>
        </Desc>
        <ContainerTimes>
          <Times>12:00</Times>
          <Times>12:00</Times>
          <Times>12:00</Times>
          <Times>12:00</Times>
        </ContainerTimes>
        <FooterCard>
          <Left>
            <Price>2900 ₽</Price>
            <FooterLeft>1200 ₽ на причале dmfklsfsdfl</FooterLeft>
          </Left>
          <Right>
            <Button>Подробнее</Button>
          </Right>
        </FooterCard>
      </Wrapper>

      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/51snrrW/sankt-peterburg-piter-st-3495.jpg' />
          <ImgContent position="35px" bachGroundColor="FED74B" >НОВИНКА</ImgContent>
        </ImgContainer>
        <CardBody>
          <IconeTimeTop>
            <TimeIcon>
              <AccessTimeIcon />
            </TimeIcon>
            <Time>2 часа</Time>
          </IconeTimeTop>
          <Title>АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</Title>
        </CardBody>
        <Desc>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Билет на целый день</List>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Неограниченное число катаний</List>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> 6 остановок у главных достопримечательностей</List>
          <List><CheckIcon style={{ "color": "#FECF01", "margin-bottom": "-7px", "margin-right": "16px" }} /> Ближайший рейс сегодня</List>
        </Desc>
        <ContainerTimes>
          <Times>12:00</Times>
          <Times>12:00</Times>
          <Times>12:00</Times>
          <Times>12:00</Times>
        </ContainerTimes>
        <FooterCard>
          <Left><Price>2900 ₽</Price>
            <FooterLeft>1200 ₽ на причале</FooterLeft>
          </Left>
          <Right><Button>Подробнее</Button></Right>
        </FooterCard>
      </Wrapper>
    </Container>
  )
}

export default Card