import { menusKelola } from "../Util/dataKelolaMenus"
import KelolaCard from "../KasirComponents/KelolaCard"

export default function KelolaCards(props){

   

    return (<div className="border border-1 border-dark rounded w-100 p-2 d-flex justify-content-around align-items-center">

                {menusKelola.map(item => <KelolaCard key={item.id} title={item.title} page = {item.page} color = {item.color} handleKelolaPage = {props.handleKelolaPage}  />)}

            </div>)
}