import { useState, useEffect } from "react"
import Select from "./Select";

const Infilder = (props) =>{
    const[Player, setplayer] = useState([]);
    console.log(props);
    useEffect(
        () =>{
            let player = [
                {img : '../../kt player/내야수/강백호.png', 등번호 : 50, position : '내야수', 경기 : 3, name : '강백호', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/김상수.png', 등번호 : 7, position : '내야수', 경기 : 3, name : '김상수', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/류현인.png', 등번호 : 36, position : '내야수', 경기 : 3, name : '류현인', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/박병호.png', 등번호 : 52, position : '내야수', 경기 : 3, name : '박병호', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/내야수/황재균.png', 등번호 : 10, position : '내야수', 경기 : 3, name : '황재균', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
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
                    Player.map(p=>{
                        return(
                                <div className="card">
                                <div className="number">NO.{p.등번호}</div>
                                <a href="#!">
                                    <img src={p.img}></img>
                                    <h1>{p.name}</h1>
                                </a>
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