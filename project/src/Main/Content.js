import React from 'react'
import Slider from "react-slick";
import Rank from './Rank';

function Content() {
    const baseballteam = [
        {
            src : '/img/bi_game_kt.png',
            alt : '',
            src3 : '/img/bi_game_kiwoom.png'
        },
        {
            src : '/img/bi_game_kt.png',
            alt : '',
            src3 : '/img/bi_game_kiwoom.png'
            
        },
        {
            src : '/img/bi_game_kt.png',
            alt : '',
            src3 : '/img/bi_game_kiwoom.png'
        },
        {
            src : '/img/bi_game_kt.png',
            alt : '',
            src3 : '/img/bi_game_doosan.png'
        },
        {
            src : '/img/bi_game_kt.png', 
            alt : '',
            src3 : '/img/bi_game_doosan.png'
        },
        {
            src : '/img/bi_game_kt.png',
            alt : '',
            src3 : '/img/bi_game_doosan.png'
        }
    ]
    const renderSlides = () =>
    baseballteam.map(src => (
      <div className = "Play">
        <img className = "left" src={src.src} alt=''></img>
        <div className = "middle">VS</div>
        <img className = "right" src={src.src3} alt=''></img>
      </div>
    ));
    
  return (
    <div>
        <div className='position'>
            <div className = "main" >
                <div className = "title">KT위즈</div>
                <div className = "main2">
                    <div className = "item item2">
                        <div className = "leage-rank">이번주 경기일정</div>

                        <div className="major">
                            <Slider  Slider dots={true} arrows = {false} autoplay={true}>{renderSlides()}</Slider>
                        </div>
                            
                    </div>
                    <a href='#!' alt = ''><div className = "item item3"><h4>티켓구매하기&gt;</h4></div></a>
                    <a href='#!' alt = ''><div className = "item item4"><h4>선수소개</h4></div></a>
                    <div className = "item item1"><p>리그순위</p>
                    <table className = "table">
                        <Rank/>
                    </table>
                    </div>
                </div>
                <div>.</div>
            </div>
        </div>
    </div>  
  )
}

export default Content;