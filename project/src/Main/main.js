import './main.css';
import styled from '@emotion/styled';
import Content from './Content';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
   
    return(
        <>
            <Container>
            <Content/>           {/* <Slider slidesToShow={5} Slider dots={true}>{}</Slider> */}
            </Container>
        </>
    )
}

export default Main;

const Container = styled.div
`
width : 100%; 
margin : 0 auto;
`
