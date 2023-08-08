import DetailPage from "./pelanggan/DetailPage";
import PelangganCard from "./pelanggan/PelangganCards";
import TambahPelanggan from "./pelanggan/TambahPelanggan";
import usePelangganUI from "./pelanggan/usePelangganUI";



export default function PelangganPage(props){

    

const Allpelanggan = props.loginAuthentification.dataEnter.pelanggan;



const {


               
                currentPage,
                item,
                editedName,
                editedKota,
                changeCurrentPageToDetail,
                backToMainPagePelanggan,
                handleChangeKotaPelanggan,
                handleChangeNamaPelanggan,
                handleSubmit,
                handleHapus,
                changeCurrentPageToTambahPelanggan,
                handleTambahPelanggan



} = usePelangganUI(props.dataReduce.dispatch, props.loginAuthentification.dataEnter.id_user);



const toDetailPageProps = {

                                item,
                                editedName,
                                editedKota,
                                handleChangeKotaPelanggan,
                                handleChangeNamaPelanggan,
                                handleSubmit,
                                handleHapus,
                                handleBack : backToMainPagePelanggan,

}


const toTambahpelangganPagProps = {

                                editedName,
                                editedKota,
                                handleChangeNamaPelanggan,
                                handleChangeKotaPelanggan,
                                handleBack : backToMainPagePelanggan,
                                handleTambahPelanggan
}








    if(currentPage === "detail"){

                        return(<DetailPage {...toDetailPageProps} />)
    }


    if(currentPage === "tambah"){

        return(<TambahPelanggan {...toTambahpelangganPagProps} />)
    }




    return(<>
            
            <div className="p-4 w-100 d-flex justify-content-around">{props.loginAuthentification.dataEnter.pelanggan.length === 0 ? 

                (<span><h1 className="text-secondary">tidak ada pelanggan</h1></span>) 
                    :
                Allpelanggan.map(item => <PelangganCard key = {item.id} item = {item} seeDetail = {changeCurrentPageToDetail} />)}
                <button className="btn btn-outline-success" style={{height : "10rem", fontWeight : "bolder"}} onClick={changeCurrentPageToTambahPelanggan}>Tambah Pelanggan</button>
            </div>
    </>)

}