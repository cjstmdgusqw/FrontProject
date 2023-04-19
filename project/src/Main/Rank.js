import {useState, useEffect} from 'react';
const Rank = () => {
    const [accs, setaccs] = useState([]);

    useEffect(
        () =>{
            let raccs = [
                {rank : 1, name : 'ssg', win : 8, lose : 4, draw : 0},
                {rank : 2, name : 'LG', win : 9, lose : 5, draw : 0},
                {rank : 3, name : 'NC', win : 9, lose : 5, draw : 0},
                {rank : 4, name : '키움', win : 7, lose : 6, draw : 0},
                {rank : 5, name : '두산', win : 7, lose : 6, draw : 0},
                {rank : 6, name : 'KT', win : 5, lose : 5, draw : 1},
                {rank : 7, name : '롯데', win : 5, lose : 7, draw : 0},
                {rank : 8, name : '삼성', win : 5, lose : 8, draw : 0},
                {rank : 9, name : '한화', win : 4, lose : 8, draw : 0},
                {rank : 10, name : 'KIA', win : 3, lose : 8, draw : 0}
            ]
            setaccs([...accs, ...raccs]);
        },[]
    )

    return(
        <>
        <thead>
            <th>순위</th>
            <th>팀이름</th>
            <th>승</th>
            <th>패</th>
            <th>무</th>
        </thead>
        <tbody>
            {
                accs.filter(num => num.rank > 3 && num.rank < 9).map(acc=>{
                    return(
                        <tr className={acc.name}>
                            <td >{acc.rank}</td>
                            <td >{acc.name}</td>
                            <td>{acc.win}</td>
                            <td>{acc.lose}</td>
                            <td>{acc.draw}</td>
                        </tr>
                    )
                })
            }
        </tbody> 
        </>
    )
}
export default Rank;