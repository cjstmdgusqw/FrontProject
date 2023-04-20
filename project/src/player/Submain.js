import '../player/Select.css'
import Select from './Select';
import Picher from './Picher';
import {Routes, Route} from 'react-router-dom';
const Submain = () =>{
    return(
        <div>
            <div className='Position'>
                <Select/>
            </div>
        </div>
    )
}

export default Submain;