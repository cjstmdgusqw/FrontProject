// import { useState, useEffect } from "react"
import Select from "./Select";
import { useLocation } from 'react-router-dom'

function Player(){
    const location = useLocation();
    const data  = location.state;
    console.log(data.pic.NUM);
    // console.log(data.img)

    return(
        <>

                <div className='Position'>
                <Select/>
                {data && (
                    <div className="Content">
                        <div className="record">
                        <div className="playerimg"></div>
                            <img src={data.pic.img}></img>
                        </div>
                        <div className="record2">2</div>
                        <div className="record3">3</div>
                        <div className="record4">4</div>
                    </div>
                )}
                 </div>
        </>
    );
}
export default Player;