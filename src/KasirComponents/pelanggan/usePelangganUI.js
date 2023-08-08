import { useState } from "react"

export default function usePelangganUI(dispatch, destination){

// states

const [countpelanggan, setCountPelanggan] = useState(3);
const [currentPage, setCurrentPage] = useState('pelangganMainPage');
const [item, setItem] = useState({});
const [editedName, setEditedName] = useState('');
const [editedKota, setEditedKota] = useState('');
const [state, setState] = useState(null)



// function

const handleCountPelangan = () => setCountPelanggan(countpelanggan + 1);



const changeCurrentPageToDetail = (item) => {

                    setCurrentPage('detail');

                    setItem({...item});

                    setEditedName(item.nama);

                    setEditedKota(item.kota)


} 


const backToMainPagePelanggan = () => setCurrentPage('pelangganMainPage');


const handleChangeNamaPelanggan = (e) => setEditedName(e.target.value);


const handleChangeKotaPelanggan = (e) => setEditedKota(e.target.value);


const handleSubmit = () => {

        const isSomeDataChanged = editedName.toLowerCase() !== item.nama.toLowerCase() || editedKota.toLowerCase() !== item.kota.toLowerCase();

        if(isSomeDataChanged){


                setState(true);
                dispatch({type : "editedpelanggan", data : {id : item.id, nama : editedName, kota : editedKota}, destination});
                setCurrentPage("pelangganMainPage")

        } else {

            setState(false);
        }

}


const handleHapus = () => {

                            dispatch({type : "hapusPelanggan", data : {id : item.id}, destination});
                            setCurrentPage("pelangganMainPage");
}


const changeCurrentPageToTambahPelanggan = () => {

                    setCurrentPage("tambah")
}


const handleTambahPelanggan = () => {

               const isDataNotEmpty = (editedName !== "") && (editedKota !== "");

               if(isDataNotEmpty){

                            setState(true);
                            dispatch({type : "tambahPelanggan", data : {nama : editedName, kota : editedKota}, destination})
                            setCurrentPage("pelangganMainPage")
                            setEditedName("");
                            setEditedKota("");
               } else {

                            setState(false);
               }

}




    return{

                    countpelanggan,
                    currentPage,
                    item,
                    editedName,
                    editedKota,
                    state,
                    handleCountPelangan,
                    changeCurrentPageToDetail,
                    changeCurrentPageToTambahPelanggan,
                    backToMainPagePelanggan,
                    handleChangeKotaPelanggan,
                    handleChangeNamaPelanggan,
                    handleSubmit,
                    handleHapus,
                    handleTambahPelanggan
                   


    }
}