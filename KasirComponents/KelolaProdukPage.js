import { useMemo} from "react"
import ProductCard from "./ProductCard";
import EditedItemPage from "./EditedItemPage";

export default function KelolaProdukPage(props){


    

    
    const productCard = useMemo(() => {


        return props.produk.map(item => <ProductCard item = {item} handleEditedItem = {props.editProduk.handleEditedItem}  />)


    },[props.produk,  props.editProduk.handleEditedItem])
            



   
const editedItemPageProps  = {...props.editProduk, id_user :props.login.account.id_user, dispatch : props.dataReducer.dispatch }


    if(props.editProduk.editedItemPage === true){

                     return(<EditedItemPage {...editedItemPageProps} />)
    }




    
        return(<>
        
        
                <section className="border border-4 w-100 bg-danger d-flex flex-wrap justify-content-around align-items-center p-1">
                       {productCard}
                       
                </section>


                <section className="border border-4 w-100 p-2">

                    <button className="btn btn-outline-primary" onClick={props.contentContainer.handleBack}>back</button>

                </section>
        
        </>)


        }