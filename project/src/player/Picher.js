import { useState, useEffect } from "react"
import Select from "./Select";

const Picher = (props) =>{
    const[picher, setpicher] = useState([]);
    console.log(props);
    useEffect(
        () =>{
            let Picher = [
                {img : '../../kt player/투수/고영표.png', 등번호 : 1, position : '투수', name : '고영표', game : 5, era : 0.00, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/김민.png', 등번호 : 11, position : '투수', name : '김민', game : 5, era : 5.79, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/김재윤.png', 등번호 : 62, position : '투수', name : '김재윤', game : 3, era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/배제성.png', 등번호 : 19, position : '투수', name : '배제성', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/벤자민.png', 등번호 : 43, position : '투수', name : '벤자민', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/소형준.png', 등번호 : 30, position : '투수', name : '소형준', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/슐서.png', 등번호 : 40, position : '투수', name : '슐서', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/엄상백.png', 등번호 : 18, position : '투수', name : '엄상백', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {img : '../../kt player/투수/주권.png', 등번호 : 38, position : '투수', name : '주권', game : 3,era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},

            ]
            setpicher([...picher, ...Picher]);
        },[]
    )

    return(
        <>
            <div className='Position'>
                <Select/>
                <div className="Player">
                <div className="Title">Picher</div>
                    <div className="flex">
                {
                    picher.map(pic=>{
                        return(
                                <div className="card">
                                    <div className="number">NO.{pic.등번호}</div>
                                    <a href="#!">
                                        <img src={pic.img}></img>
                                        <h1>{pic.name}</h1>
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

export default Picher;