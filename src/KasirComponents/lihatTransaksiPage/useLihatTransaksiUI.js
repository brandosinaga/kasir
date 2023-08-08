import { useState } from "react";

export default function useLihatTransaksiUI(){


    // states


    const [currentPage, setCurrentPage] = useState('allTransaksi');
    const [item, setItem] = useState({});



    // functions

    const changePageToSeeDetail = (item) => {

            setCurrentPage("detail")
               setItem({...item})
    }

    const backToLihatTransaksiPage = () => setCurrentPage("allTransaksi")


    return {

                currentPage,
                item,
                changePageToSeeDetail,
                backToLihatTransaksiPage
    }
}