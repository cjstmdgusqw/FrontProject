import './main.css';
import $ from 'jquery';
import Slider from "react-slick";
import Rank from './Rank';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Main = () => {
    const baseballteam = [
        {
            src : '/img/bi_game_kt.png',
            src3 : '/img/bi_game_kiwoom.png'
        },
        {
            src : '/img/bi_game_kt.png',
            src3 : '/img/bi_game_kiwoom.png'
        },
        {
            src : '/img/bi_game_kt.png',
            src3 : '/img/bi_game_kiwoom.png'
        },
        {
            src : '/img/bi_game_kt.png',
            src3 : '/img/bi_game_doosan.png'
        },
        {
            src : '/img/bi_game_kt.png',
            src3 : '/img/bi_game_doosan.png'
        },
        {
            src : '/img/bi_game_kt.png',
            src3 : '/img/bi_game_doosan.png'
        }
    ]
    const renderSlides = () =>
    baseballteam.map(src => (
      <div className = "Play">
        <img className = "left" src={src.src}></img>
        <div className = "middle">VS</div>
        <img className = "right" src={src.src3}></img>
      </div>
    ));

    $(function(){
        var $firstmenu = $('#container > div > div.nav > ul > li'), 
            $header = $('#container > div > div.nav');
        $firstmenu.mouseenter(function(){
            $header.stop().animate({height : '300px'},300)
        })  
        .mouseleave(function(){
            $header.stop().animate({height : '60px'},300)
        })  

    });
    return(
            <>
            <div className = "logo">
                <ul>
                    <a href=""><div id = "logo" className = "youtube"></div></a>
                    <a href=""><div id = "logo" className = "instagram"></div></a>
                    <a href=""><div id = "logo" className = "facebook"></div></a>
                    <a href=""><div id = "logo" className = "twitter"></div></a>
                </ul>
            </div>


            <div id="container">
                <div className = "backImg" width={"100%"}>
                    <div className="nav">
                        <ul className="subnav">
                            <li><a href="">HOME</a></li>
                            <li>
                                <a href="">PLAYER</a>
                                <ul>
                                    <li>감독/코치</li>
                                    <li>내야수</li>
                                    <li>외야수</li>
                                    <li>포수</li>
                                    <li>투수</li>
                                </ul>
                            </li>
                            <li><a href="">MEDIA</a></li>
                            <li><a href="">STORE</a></li> 
                            <li><a href="">TICKET</a></li>
                            <div>
                                <img className='MainLOGO' src='/img/KTOL.png'></img>
                            </div>
                            <div>
                                <img className='MainLOGO' src='/img/kthome.png'></img>
                            </div>
                        </ul> 
                        {/* <!-- <header classNameName = "header">
                            <div>이미지보일부분</div>
                        </header> --> */}
                    </div>
                    <div className='position'>
                        <div className = "main" >
                            <div className = "title">KT위즈</div>
                            <div className = "main2">
                                <div className = "item item2">
                                    <div className = "leage-rank">경기일정</div>
                                    <div className = "Hello"></div>

                                    <div className="major">
                                        <Slider Slider dots={true} arrows = {false} autoplay={true}>{renderSlides()}</Slider>
                                    </div>
                                    
                                </div>
                                <a href='#'><div className = "item item3">티켓구매하기</div></a>
                                <a href='#'><div className = "item item4">선수소개</div></a>
                                <div className = "item item1">순위
                                <table className = "table">
                                    <Rank/>
                                </table>
                            </div>
                        </div>
                        <div>sdfa</div>
                    </div>
                    <div>

                    </div>
                       
                </div>
            </div>               {/* <Slider slidesToShow={5} Slider dots={true}>{}</Slider> */}
        </div>
            <footer id = "footer">asdf</footer>
        </>
    )
}

export default Main;
