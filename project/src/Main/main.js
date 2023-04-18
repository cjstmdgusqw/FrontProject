import './main.css';
import $ from 'jquery';
import styled from '@emotion/styled';
import Content from './Content';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    $(function(){
        var $firstmenu = $('div.nav > ul > li'), 
            $header = $('div > div.nav');
        $firstmenu.mouseenter(function(){
            $header.stop().animate({height : '300px'},300)
        })  
        .mouseleave(function(){
            $header.stop().animate({height : '60px'},300)
        })  
    });
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
