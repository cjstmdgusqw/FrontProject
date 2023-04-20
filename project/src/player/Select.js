import {Link} from 'react-router-dom';
const Select = () =>{
    return(
        <>
            <div className='container'>
                <div className='select select1'><Link to = {''} >감독/코치</Link></div>
                <div className='select select2'><Link to = {'/Proteam/Picher'}>투수</Link></div>
                <div className='select select3'><Link to = {'/Proteam/Catcher'}>포수</Link></div>
                <div className='select select4'><Link to = {'/Proteam/Infielder'}>내야수</Link></div>
                <div className='select select5'><Link to = {'/Proteam/Outfielder'}>외야수</Link></div>
            </div>
        </>
    )
}
export default Select; 