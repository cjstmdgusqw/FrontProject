// import { useState, useEffect } from "react"
import Select from "./Select";
import { useLocation } from 'react-router-dom'

function Player(){
    const location = useLocation();
    const data  = location.state;

    return(
        <>
            <div className='Position'>
            <Select/>
                {data && (
                    <div className="Content">
                        <div className="record">
                            <div className="playerimg"> 
                                <img src={data.pic.img}></img>
                            </div>
                        </div>
                        <div className="record2">
                            <div className="playerNumber" >NO.{data.pic.NUM}</div>
                            <div className="playerName">{data.pic.name}</div>
                            <div className="season">2023시즌</div>
                        </div>
                        <div className="record3">
                            <div  className="playerRecord">경기수 : {data.pic.game}</div>   
                            <div  className="playerRecord">승 : {data.pic.win}</div>    
                            <div  className="playerRecord">패 : {data.pic.lose}</div>
                            <div  className="playerRecord">홀드 : {data.pic.hold}</div>  
                            <div  className="playerRecord">세이브 : {data.pic.save}</div>
                            <div  className="playerRecord">평균자책점 : {data.pic.era}</div>    
                        </div>
                        <div className="record4">
                            <div className="fight">응원하기</div>   
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Player;