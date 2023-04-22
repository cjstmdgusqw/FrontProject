import { useState, useEffect } from "react"
import {Link} from 'react-router-dom';
import Select from "./Select";

const Catcher = () =>{
    const[catcher, setcatcher] = useState([]);
    useEffect(
        () =>{
            let Catcher = [
                {img : '../../kt player/포수/강현우.png', NUM : 55, position : '포수', game : 3, name : '강현우', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/포수/김준태.png', NUM : 44, position : '포수', game : 3, name : '김준태', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
                {img : '../../kt player/포수/장성우.png', NUM : 22, position : '포수', game : 3, name : '장성우', 타율 : 0.297, 안타 : 1, two : 1, third: 1, 홈런 : 3, 볼넷 : 24},
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
                <div className="Title">CATCHER</div>
                    <div className="flex">
                {
                    catcher.map(Hit=>{
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

export default Catcher;