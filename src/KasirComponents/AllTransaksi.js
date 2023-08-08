import DetailPage from "./lihatTransaksiPage/DetailPage";
import TransaksiCard from "./lihatTransaksiPage/TransaksiCard"
import useLihatTransaksiUI from "./lihatTransaksiPage/useLihatTransaksiUI";


export default function AllTransaksi(props){


   

    const userData = props.loginAuthentification.dataEnter;

    const { 
        item,
        currentPage,
        changePageToSeeDetail,
        backToLihatTransaksiPage
    
    } = useLihatTransaksiUI()


    if(currentPage === "detail"){

        return (<DetailPage backToLihatTransaksiPage = {backToLihatTransaksiPage} {...item} />)
    }

    return(<div className="w-100" style={{height : "100%"}}>
    
                <div className="p-2 w-100 d-flex justify-content-between text-secondary">
                            <span><p style={{fontStyle : "italic"}}>total pemasukan {userData.nama_user}</p></span>
                            <span><h3>Rp.{userData.income.toLocaleString('id-ID')},-</h3></span>
                </div>

                <div className="p-2 w-100 d-flex justify-content-around flex-wrap align-items-center">
                    {userData.transaksi.length === 0 ? (<h1 className="text-secondary">belum ada transaksi</h1>) :( userData.transaksi.map((item) => <TransaksiCard key={item.invoice}  item = {item} changePageToSeeDetail = {changePageToSeeDetail} /> ))}
                </div>

    </div>)
}