import '../ticket/ticket.css'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Game = () =>{
    const[game, setgame] = useState([]);
    useEffect(
        () => {
            let Game = [
                {id : 0, date : "4월 20일", Time : '18:30. (목)',Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '삼성라이온즈', Awayimg : '../../img/bi_game_lg.png', stadium : '대구 라이온즈파크'},
                {id : 1, date : "4월 21일", Time : '18:30. (금)', Home : '삼성라이온즈', Homeimg : '../../img/bi_game_samsung.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 2, date : "4월 22일", Time : '14:00. (토)', Home : '삼성라이온즈', Homeimg : '../../img/bi_game_samsung.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 3, date : "4월 23일", Time : '14:00. (일)', Home : '삼성라이온즈', Homeimg : '../../img/bi_game_samsung.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 4, date : "4월 25일", Time : '18:30. (화)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '키움히어로즈', Awayimg : '../../img/bi_game_kiwoom.png'},
                {id : 5, date : "4월 26일", Time : '18:30. (수)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '키움히어로즈', Awayimg : '../../img/bi_game_kiwoom.png'},
                {id : 6, date : "4월 27일", Time : '18:30. (목)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '키움히어로즈', Awayimg : '../../img/bi_game_kiwoom.png'},
                {id : 7, date : "4월 28일", Time : '18:30. (금)', Home : 'LG트윈스', Homeimg : '../../img/bi_game_lg.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 8, date : "4월 29일", Time : '14:00. (토)', Home : 'LG트윈스', Homeimg : '../../img/bi_game_lg.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 9, date : "4월 20일", Time : '14:00. (일)', Home : 'LG트윈스', Homeimg : '../../img/bi_game_lg.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 10, date : "5월 01일", Time : '18:30. (화)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '두산베어스', Awayimg : '../../img/bi_game_doosan.png'},
                {id : 11, date : "5월 02일", Time : '18:30. (수)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '두산베어스', Awayimg : '../../img/bi_game_doosan.png'},
                {id : 12, date : "5월 03일", Time : '18:30. (목)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '두산베어스', Awayimg : '../../img/bi_game_doosan.png'},
            ]
            setgame([...game, ...Game]);

        },[]
    )
    return(
        <>
            <div className='PlayDay'>
                <div className='game'>123</div>
                <div className='Title2'><h1><span>KT</span>위즈 홈구장 경기일정</h1></div>
                <div className='scroll'>
                {
                    game.filter(home => 
                        home.Home === 'KT위즈'
                    ).map(game=>{
                        return(
                        
                        <div className='game2'>
                            <div className='Home'>Home</div>
                            <div className='HomeLogo'><img src={game.Homeimg}></img></div>
                            <div className='VS'>
                                <div>VS</div>
                                <div className='time'><h2></h2>날짜 : &nbsp;{game.date}&nbsp;&nbsp;{game.Time}</div>
                                <div className= 'button'><Link to = {`/Ticket/${game.id}`}><button>예매하기</button></Link></div>
                            </div>
                            <div className='Away'>Away</div>
                            <div className='AwayLogo'><img src = {game.Awayimg}></img></div> 
                        </div>
                        )
                    })
                }
                </div>
               
                {/* {
                   game.map(game=>{
                        return(
                        <div className='game2'>
                            <div className='game3'>
                                <div className='Home'>Home</div>
                                <div className='HomeLogo'><img src={game.Homeimg}></img></div>
                                <div className='VS'>Vs</div>
                                <div className='AwayLogo'><img src = {game.Awayimg}></img></div>
                                <div className='Away'>Away</div>
                                <div className='Button'>
                                    <button>예매하기</button>
                                </div>
                            </div> 
                        </div>
                        )
                    })
                } */}

               
            </div>
        </>
    )
}

export default Game;

{/* <div className='game2'>
<div className='game3'>
    <div className='Home'>Home</div>
    <div className='HomeLogo'><img src={game.Homeimg}></img></div>
    <div className='VS'>Vs</div>
    <div className='AwayLogo'><img src = {game.Awayimg}></img></div>
    <div className='Away'>Away</div>
    <div className='Button'>
        <button>예매하기</button>
    </div>
</div> 
</div> */}
