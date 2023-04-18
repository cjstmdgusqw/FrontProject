import React from 'react'

function Nav () {
  return (
    <div>
        <div className="nav">
            <ul className="subnav">
                <li><a href="">HOME</a></li>
                <li>
                    <a href="">PLAYER</a>
                    <ul>
                        <li><a>감독/코치</a></li>
                        <li><a>내야수</a></li>
                        <li><a>외야수</a></li>
                        <li><a>투수</a></li>
                        <li><a>포수</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">MEDIA</a>
                    <ul>
                        <li><a>VIDEO</a></li>
                        <li><a>공지사항</a></li>
                        <li><a>보도사항</a></li>
                        <li><a>이벤트</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">STORE</a>
                    <ul>
                        <li><a>유니폼</a></li>
                        <li><a>응원도구</a></li>
                        <li><a>KBO 공인구</a></li>
                    </ul>
                </li> 
                <li>
                    <a href="">TICKET</a>
                    <ul>
                    
                    </ul>   
                    </li>
                <div>
                    <img className='MainLOGO' src='/img/KTOL.png'></img>
                </div>
            </ul> 
        </div>
    </div>
  )
}

export default Nav;
