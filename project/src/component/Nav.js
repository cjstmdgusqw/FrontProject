import React from 'react';
import $ from 'jquery';

function Nav () {
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
  return (
    <div>
        <div className="nav">
            <ul className="subnav">
                <li><a href = "#!">HOME</a></li>
                <li>
                    <a href="#!">PLAYER</a>
                    <ul className = "subsubnav">
                        <li><a href = "#!">감독/코치</a></li><br/>
                        <li><a href = "#!">내야수</a></li><br/>
                        <li><a href = "#!">외야수</a></li><br/>
                        <li><a href = "#!">투수</a></li><br/>
                        <li><a href = "#!">포수</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#!">MEDIA</a>
                    <ul className = "subsubnav">
                        <li><a href = "#!">VIDEO</a></li>
                        <li><a href = "#!">공지사항</a></li>
                        <li><a href = "#!">보도사항</a></li>
                        <li><a href = "#!">이벤트</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#!">STORE</a>
                    <ul className = "subsubnav">
                        <li><a href = "#!">유니폼</a></li>
                        <li><a href = "#!">응원도구</a></li>
                    </ul>
                    
                </li> 
                <li>
                    <a href="#!">TICKET</a>  
                  
                    </li>
                <div>
                    <img className='MainLOGO' src='/img/KTOL.png' alt="LOGO"></img>
                </div>
            </ul> 
        </div>
    </div>
  )
}

export default Nav;
