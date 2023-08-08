import PrintPembayaran from "./PrintPembayaran";



export default function PagePembayaran(props){


   return(<>
                <PrintPembayaran />
                <button onClick={props.handlePageBayar}>kembali</button>
   </>)

}