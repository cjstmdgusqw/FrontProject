import React from 'react'
import Slider from "react-slick";
import Rank from './Rank';
import {Link} from 'react-router-dom';

function Content() {
    const baseballteam = [
        {
            src : 'https://thumb.mt.co.kr/06/2023/03/2023032116464273208_2.jpg',
        },
        {
            src : 'https://images.chosun.com/resizer/lUYrGYqfiilgIyxykHf8qmUXEs8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/2TJ5663K4VCFVONCEQL2JEFIPY.jpg',
        },
        {
            src : 'https://www.ktwiz.co.kr/v2/imgs/dummy/main/img/banner/player@2x.png',
        },
        {
            src : 'https://img0.yna.co.kr/etc/inner/KR/2022/06/11/AKR20220611041500007_02_i_P4.jpg',
        },
    ]
    const renderSlides = () =>
    baseballteam.map(src => (
      <div className = "Play">
        <img className = "left" src={src.src} alt=''></img>
      </div>
    ));
    
  return (
    <div>
        <div className='position'>
            <div className = "main" >
                <div className = "title">KT위즈</div>
                <div className = "main2">
                    <div className = "item item2">
                        <div className = "leage-rank">선수 갤러리</div>

                        <div className="major">
                            <Slider  Slider dots={true} arrows = {false} autoplay={true}>{renderSlides()}</Slider>
                        </div>
                            
                    </div>
                    <Link to = {'/Ticket'}><div className = "item item3"><h4>티켓구매하기&gt;</h4></div></Link>
                    <Link to = {'/Proteam'}><div className = "item item4"><h4>선수소개</h4></div></Link>
                    <div className = "item item1"><p>리그순위</p>
                    <table className = "table">
                        <Rank/>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Content;