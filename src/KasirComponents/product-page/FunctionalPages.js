import EditProductPage from "./EditProductPage"
import TambahProduk from "./TambahProduk"

export default function FunctionalPages(props){





    if(props.page === "tambahProduk"){

        return(<TambahProduk {...props} />)
    }



    

    if(props.page === "editProduk"){

        return(<>
                    <EditProductPage {...props}  />

        </>)
    }


}