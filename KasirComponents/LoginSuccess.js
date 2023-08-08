import NavbarMenu from "../KasirComponents/NavbarMenu"

import ContentContainer from "./ContentContainer";

import TransaksiButton from "./TransaksiButton";




function LoginSuccess(props){


   

    const contentContainerProps = { produk : props.login.account.products,...props};



       


        return(<>
        
        
            <NavbarMenu handleLogout={props.logout.handleLogout} />


       
                  
            <ContentContainer {...contentContainerProps} />   
          
        

            <TransaksiButton onTransaksiPage = {props.transaksi.onTransaksiPage} handleTransaksi = {props.transaksi.handleTransaksi} handleBackTransaksi = {props.transaksi.handleBackTransaksi} />
            
           

            </>) 

           
                    
        
}






export default LoginSuccess;