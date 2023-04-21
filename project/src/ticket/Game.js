import '../ticket/ticket.css'
import { useState, useEffect } from 'react';

const Game = () =>{
    const[game, setgame] = useState([]);
    useEffect(
        () => {
            let Game = [
                {id : 0, date : "4월 20일", Time : '18:30. (목)',Home : 'LG트윈스', Homeimg : '../../img/bi_game_lg.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png', stadium : '대구 라이온즈파크'},
                {id : 1, date : "4월 21일", Time : '18:30. (금)', Home : '삼성라이온즈', Homeimg : '../../img/bi_game_samsung.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 2, date : "4월 22일", Time : '14:00. (토)', Home : '삼성라이온즈', Homeimg : '../../img/bi_game_samsung.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 3, date : "4월 23일", Time : '14:00. (일)', Home : '삼성라이온즈', Homeimg : '../../img/bi_game_samsung.png' ,Away : 'KT위즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 4, date : "4월 24일", Time : '18:30. (화)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '키움히어로즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 5, date : "4월 25일", Time : '18:30. (수)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '키움히어로즈', Awayimg : '../../img/bi_game_kt.png'},
                {id : 6, date : "4월 26일", Time : '18:30. (목)', Home : 'KT위즈', Homeimg : '../../img/bi_game_kt.png' ,Away : '키움히어로즈', Awayimg : '../../img/bi_game_kt.png'},
            ]
            setgame([...game, ...Game]);
        },[]
    )
    return(
        <>
            <div className='Position'>
                <div className='game'>123</div>

                <div className='game2'>123</div>

            </div>
        </>
    )
}

export default Game;
