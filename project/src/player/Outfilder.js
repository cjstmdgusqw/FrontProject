import { useState, useEffect } from "react"
import Select from "./Select";

const Outfilder = (props) =>{
    const[Player, setplayer] = useState([]);
    useEffect(
        () =>{
            let player = [
                {img : '../../kt player/외야수/김민혁.png', 등번호 : 53, position : '외야수', 경기 : 3, name : '김민혁', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/송민섭.png', 등번호 : 12, position : '외야수', 경기 : 3, name : '송민섭', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/알포드.png', 등번호 : 25, position : '외야수', 경기 : 3, name : '알포드', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/조용호.png', 등번호 : 23, position : '외야수', 경기 : 3, name : '조용호', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/외야수/홍현빈.png', 등번호 : 31, position : '외야수', 경기 : 3, name : '홍현빈', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
            ]
            setplayer([...Player, ...player]);
        },[]
    )

    return(
        <>
            <div className='Position'>
                <Select/>

                <div className="Player">
                <div className="Title">outfielder</div>
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

export default Outfilder;