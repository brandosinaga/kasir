import Navbar from "../KasirComponents/Navbar"
import ContentComponent from "./ContentComponent"
import PagePembayaran from "../KasirComponents/PagePembayaran";
import useLoginSuccessUI from "../KasirComponents/LoginSuccess/useLoginSuccessUI";




export default function LoginSuccess(props){

 


        const {

            page,
            pageBayar,
            handleChangePage,
            handlebackToMainMenu,
            handlePageBayar,
            handleBayar,
            handleTransaksi

} = useLoginSuccessUI(props.transaksi);
   

    
  



    if(pageBayar === true){

        return(<PagePembayaran handlePageBayar = {handlePageBayar}/>)
    }






    return (<>
    
            <section className = "navBar  d-flex  justify-content-between align-items-center p-2">
                <span className="p-1 text-secondary" style={{fontWeight : "bolder"}}>{props.loginAuthentification.dataEnter.nama_user}</span>
                {page !== "loggedInPage" &&  <button className="btn btn-outline-danger" onClick={handlebackToMainMenu}>Home</button>}
                <Navbar page = {page} handleChangePage = {handleChangePage}  />
                <button className="btn btn-outline-primary" onClick={props.loginAuthentification.handleLogout}>Logout</button>
            </section>




            <section className = "content col-12  d-flex flex-column justify-content-center align-items-center p-1">
                <ContentComponent page = {page} {...props} />
            </section>




            <section className = "transaksi col-12 d-flex justify-content-center p-1">
                {page !== 'transaksi' && <button className= "btn btn-primary w-75" onClick={handleTransaksi}>Transaksi</button>}
                {(props.transaksi.total && page === 'transaksi') > 0 && <button className= "btn btn-success w-75" onClick={handleBayar}>Bayar</button>}
            </section>
    
    </>)

}