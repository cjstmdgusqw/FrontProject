import Select from "./Select";
import { useLocation } from 'react-router-dom'

const Player2 = () =>{
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
                                <img src={data.Hit.img}></img>
                            </div>
                        </div>
                        <div className="record2">
                            <div className="playerNumber">NO.{data.Hit.NUM}</div>
                            <div className="playerName">{data.Hit.name}</div>
                            <div className="season">2023시즌</div>
                        </div>
                        <div className="record3">
                            <div  className="playerRecord">경기수 : {data.Hit.game}</div>   
                            <div  className="playerRecord">타율 : {data.Hit.타율}</div>    
                            <div  className="playerRecord">안타 : {data.Hit.안타}</div>
                            <div  className="playerRecord">2루타 : {data.Hit.two}</div>  
                            <div  className="playerRecord">3루타 : {data.Hit.third}</div>
                            <div  className="playerRecord">홈런 : {data.Hit.홈런}</div>    
                        </div>
                        <div className="record4">
                            <div className="fight">응원하기</div>   
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Player2;