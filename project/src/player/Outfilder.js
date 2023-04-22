import { useState, useEffect } from "react"
import Select from "./Select";
import {Link} from 'react-router-dom';

const Outfilder = (props) =>{
    const[Player, setplayer] = useState([]);
    useEffect(
        () =>{
            let player = [
                {img : '../../kt player/외야수/김민혁.png', NUM : 53, position : '외야수', game : 3, name : '김민혁', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/송민섭.png', NUM : 12, position : '외야수', game : 3, name : '송민섭', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/알포드.png', NUM : 25, position : '외야수', game : 3, name : '알포드', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/조용호.png', NUM : 23, position : '외야수', game : 3, name : '조용호', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/홍현빈.png', NUM : 31, position : '외야수', game : 3, name : '홍현빈', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
            ]
            setplayer([...Player, ...player]);
        },[]
    )

    return(
        <>
            <div className='Position'>
                <Select/>

                <div className="Player">
                <div className="Title">OUTFILDER</div>
                    <div className="flex">
                {
                    Player.map(Hit=>{
                        return(
                                <div className="card">
                                <div className="number">NO.{Hit.NUM}</div>
                                <Link to = {`/Proteam/Hitter/${Hit.NUM}`} state = {{Hit}}>
                                    <img src={Hit.img}></img>
                                    <h1>{Hit.name}</h1>
                                </Link>
                            </div>
                        )
                    })
                }
                    </div>
                </div>
        
                
            </div>
        </>
    )
}

export default Outfilder;