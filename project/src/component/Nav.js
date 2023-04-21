import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

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
                <li><Link to = {'/'}>HOME</Link></li>
                <li>
                    <Link to = {'/Proteam'}>PLAYER</Link>
                    <ul className = "subsubnav">
                        <li><a href = "#!">감독/코치</a></li><br/>
                        <li><Link to = {'/Proteam/Picher'}>투수</Link></li><br/>
                        <li><Link to = {'/Proteam/Catcher'}>포수</Link></li><br/>
                        <li><Link to = {'/Proteam/Infielder'}>내야수</Link></li><br/>
                        <li><Link to = {'/Proteam/Outfielder'}>외야수</Link></li>
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
                <Link to = {'/Ticket'}>TICKET</Link> 
                  
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
