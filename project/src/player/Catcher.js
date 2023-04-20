import { useState, useEffect } from "react"
import Select from "./Select";

const Catcher = () =>{
    const[catcher, setcatcher] = useState([]);
    useEffect(
        () =>{
            let Catcher = [
                {img : '../../kt player/포수/강현우.png', 등번호 : 55, position : '포수', 경기 : 3, name : '강현우', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/포수/김준태.png', 등번호 : 44, position : '포수', 경기 : 3, name : '김준태', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/포수/장성우.png', 등번호 : 22, position : '포수', 경기 : 3, name : '장성우', 타율 : 3.68, 안타 : 1, '2루타' : 1, '3루타': 1, 홈런 : 3, 볼넷 : 24},
            ]
            setcatcher([...catcher, ...Catcher]);
        },[]
    )

    return(
        <>
            <div className='Position'>
                <Select/>
                {/* <div className="Title">Picher</div> */}

                <div className="Player">
                <div className="Title">Catcher</div>
                    <div className="flex">
                {
                    catcher.map(Catch=>{
                        return(
                                <div className="card">
                                <div className="number">NO.{Catch.등번호}</div>
                                <a href="#!">
                                    <img src={Catch.img}></img>
                                    <h1>{Catch.name}</h1>
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

export default Catcher;