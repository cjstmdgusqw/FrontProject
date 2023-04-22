import { useState, useEffect } from "react"
import {Link} from 'react-router-dom';
import Select from "./Select";

const Picher = () =>{
    const[picher, setpicher] = useState([]);
    useEffect(
        () =>{
            let Picher = [
                {img : '../../kt player/투수/고영표.png', NUM : 1, position : '투수', name : '고영표', game : 5, era : 3.54, win : 1, lose : 1, hold : 1, save : 3, KKK : 15, ining : '20 1/3'},
                {img : '../../kt player/투수/김민.png', NUM : 11, position : '투수', name : '김민', game : 5, era : 5.79, win : 1, lose : 1, hold : 1, save : 3, KKK : 2, ining : '4 2/3'},
                {img : '../../kt player/투수/김재윤.png', NUM : 62, position : '투수', name : '김재윤', game : 3, era : 0.00, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/배제성.png', NUM: 19, position : '투수', name : '배제성', game : 3,era : 4.19, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/벤자민.png', NUM : 43, position : '투수', name : '벤자민', game : 3,era : 3.20, win : 5, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/소형준.png', NUM : 30, position : '투수', name : '소형준', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/슐서.png', NUM : 40, position : '투수', name : '슐서', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/엄상백.png', NUM : 18, position : '투수', name : '엄상백', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/주권.png', NUM : 38, position : '투수', name : '주권', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
            ]
            setpicher([...picher, ...Picher]);
        },[]
    )

    return(
        <>
            <div className='Position'>
                <Select/>
                <div className="Player">
                <div className="Title">PICHER</div>
                    <div className="flex">
                {
                    picher.map((pic)=>{
                        return(
                                <div className="card">
                                    <div className="number">NO.{pic.NUM}</div>
                                    <Link to = {`/Proteam/Picher/${pic.NUM}`} state = {{pic}}>
                                        <img src={pic.img}></img>
                                        <h1>{pic.name}</h1>
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

export default Picher;