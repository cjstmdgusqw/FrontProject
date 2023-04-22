import { useState, useEffect } from "react"
import {Link} from 'react-router-dom';
import Select from "./Select";

const Infilder = (props) =>{
    const[Player, setplayer] = useState([]);
    console.log(props);
    useEffect(
        () =>{
            let player = [
                {img : '../../kt player/내야수/강백호.png', game : 3, NUM : 50, position : '내야수', 경기 : 3, name : '강백호', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/김상수.png', game : 3,NUM : 7, position : '내야수', 경기 : 3, name : '김상수', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/류현인.png', game : 3,NUM : 36, position : '내야수', 경기 : 3, name : '류현인', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/박병호.png', game : 3,NUM : 52, position : '내야수', 경기 : 3, name : '박병호', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/황재균.png', game : 3,NUM : 10, position : '내야수', 경기 : 3, name : '황재균', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
            ]
            setplayer([...Player, ...player]);
        },[]
    )

    return(
        <>
            <div className='Position'>
                <Select/>
                {/* <div className="Title">Picher</div> */}

                <div className="Player">
                <div className="Title">Infielder</div>
                    <div className="flex">
                {
                    Player.map(Hit=>{
                        return(
                                <div className="card">
                                <div className="number">NO.{Hit.NUM}</div>
                                <Link to = {`/Proteam/Hitter/${Hit.NUM}`}
                                state = {{Hit}}> 
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

export default Infilder;