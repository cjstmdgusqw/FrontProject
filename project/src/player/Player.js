// import { useState, useEffect } from "react"
import Select from "./Select";

const Player = () =>{
    return(
        <>
            <div className='Position'>
                <Select/>
                <div className="Content">
                    <div className="record">
                        <div className="playerimg">2</div>
                        <img src="../../kt player/포수/장성우.png"></img>
                    </div>
                    <div className="record2">2</div>
                    <div className="record3">3</div>
                    <div className="record4">4</div>
                </div>
            </div>
        </>
    )
}
export default Player;