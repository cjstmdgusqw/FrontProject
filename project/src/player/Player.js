import { useState, useEffect } from "react"

const Player = () =>{
    const[accs, setaccs] = useState([]);

    useEffect(
        () =>{
            let Picher = [
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
                {position : '투수', name : '', era : 3.68, win : 1, lose : 1, hold : 1, save : 3, KKK : 24},
            ]
            setaccs([...accs, ...Picher]);
        },[]
    )

    return(
        <>
            <div className=""></div>
        </>
    )
}

export default Player;