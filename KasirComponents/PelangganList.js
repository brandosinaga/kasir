export default function PelangganList({chooseNamaPelangganFromList,  listPelangganFounded}){



 

    return(<ul className="p-1 w-100" style={{listStyle : "none"}}>
        { listPelangganFounded.map(item => <li key={item.id}><button className="btn btn-outline-primary w-100" value={item.nama} onClick={chooseNamaPelangganFromList}>{item.nama}</button></li>)}
        </ul>)
}