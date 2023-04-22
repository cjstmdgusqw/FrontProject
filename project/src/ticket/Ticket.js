import '../ticket/ticket.css'
import { useState } from 'react';

const Ticket = () =>{
    const [data, setData] = useState([
        {id : 1, img : '/stadium/메인.PNG' , price : 0},
        {id : 2, img : '/stadium/1루_내야지정석.png', price : 15000},
        {id : 3, img : '/stadium/1루_스카이존.png', price : 7000},
        {id : 4, img : '/stadium/1루석.png', price : 7500},
        {id : 5, img : '/stadium/3루_내야지정석.png', price : 12000},
        {id : 6, img : '/stadium/3루_스카이존.png', price : 7000},
        {id : 7, img : '/stadium/3루_익사이팅석.png', price : 20000},
        {id : 8, img : '/stadium/외야잔디자유석.png', price : 9000},
        {id : 9, img : '/stadium/지니존.png', price : 50000},
        {id : 10, img : '/stadium/콕콕114존.png', price : 12000},
        {id : 11, img : '/stadium/BC라운지존.png', price : 50000},
        {id : 12, img : '/stadium/PAYCO존.png', price : 35000},
    ])

    const [selectedButton, setSelectedButton] = useState('1');

    const filteredData = () => {
        if (selectedButton === '1') {
          return data.filter((item) => item.img === '/stadium/메인.PNG');
        } else if (selectedButton === '2') {
          return data.filter((item) => item.img === '/stadium/1루_내야지정석.png');
        } else if (selectedButton === '3') {
          return data.filter((item) => item.img === '/stadium/1루_스카이존.png');
        } else if (selectedButton === '4') {
          return data.filter((item) => item.img === '/stadium/1루석.png');
        } else if (selectedButton === '5') {
            return data.filter((item) => item.img === '/stadium/3루_내야지정석.png');
        } else if (selectedButton === '6') {
            return data.filter((item) => item.img === '/stadium/3루_스카이존.png');
        } else if (selectedButton === '7') {
            return data.filter((item) => item.img === '/stadium/3루_익사이팅석.png');
        } else if (selectedButton === '8') {
            return data.filter((item) => item.img === '/stadium/외야잔디자유석.png');
        } else if (selectedButton === '9') {
            return data.filter((item) => item.img === '/stadium/지니존.png');
        } else if (selectedButton === '10') {
            return data.filter((item) => item.img === '/stadium/콕콕114존.png');
        } else if (selectedButton === '11') {
            return data.filter((item) => item.img === '/stadium/BC라운지존.png');
        } else if (selectedButton === '12') {
            return data.filter((item) => item.img === '/stadium/PAYCO존.png');
        }
    };

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return(
        <>
            <div className='PlayDay'>
                <div className='game'>123</div>
                <div className='Title2'><h1><span>KT</span>위즈 티켓</h1></div>

                <div className='Stadium'>
                    <div className='KTStadium'>
                        <img src={
                            filteredData().map((item) => (
                                item.img
                              ))
                        }>    
                        </img>
                    </div>
                    <div className='Buy'>
                        <div className='Ticketname'>
                            <button className='button1' onClick={() => handleButtonClick('1')}>All</button>
                            <button className='button8' onClick={() => handleButtonClick('8')}>외야잔디자유석</button>
                            <button className='button3' onClick={() => handleButtonClick('3')}>1루_스카이존</button>
                            <button className='button6' onClick={() => handleButtonClick('6')}>3루_스카이존</button>
                            <button className='button5' onClick={() => handleButtonClick('5')}>3루_내야지정석</button>
                            <button className='button2' onClick={() => handleButtonClick('2')}>1루_내야지정석</button>
                            <button className='button7' onClick={() => handleButtonClick('7')}>3루_익사이팅석</button>
                            <button className='button4' onClick={() => handleButtonClick('4')}>1루석</button>
                            <button className='button9' onClick={() => handleButtonClick('9')}>지니존</button>
                            <button className='button10' onClick={() => handleButtonClick('10')}>콕콕114존</button>
                            <button className='button11' onClick={() => handleButtonClick('11')}>BC라운지존</button>
                            <button className='button12' onClick={() => handleButtonClick('12')}>PAYCO존</button>
                        </div>
                        <div className='price'>
                            <div>
                                <button>구매하기</button>
                            </div>
                            <div className='ticketprice'>구입 금액 : &nbsp; 
                            {filteredData().map((item) => (
                                item.price
                            ))}원
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ticket;