import ProductsCard from "./product-page/ProductsCard"
import FunctionalPages from "./product-page/FunctionalPages";
import useProductPageUI from "./product-page/useProductPageUI";



export default function ProdukPage(props){


      

        const {
    
                pageState, 
                page, 
                namaProduk,
                harga, 
                image, 
                stock, 
                jumlahStok,     
                isDataCompleted, 
                selectedProduct, 
                handleStatePages, 
                handleTambahProduk,
                handleEditProduk, 
                handleChangeNamaProduk, 
                handleChangeHarga, 
                handleChangeStock, 
                handleJumlahStok, 
                handleChangeImage,
                handleSubmit,
                handleChangeStockAfterEdit,
                handleHapusProduct

} = useProductPageUI(props.dataReduce, props.loginAuthentification);






const functionsionalPorps = {

                                page,
                                namaProduk,
                                harga,
                                stock,
                                jumlahStok,
                                image,
                                isDataCompleted,
                                selectedProduct,
                                handleChangeNamaProduk,
                                handleChangeHarga,
                                handleChangeStock,
                                handleJumlahStok,
                                handleChangeImage,
                                handleSubmit,
                                handleStatePages,
                                handleChangeStockAfterEdit,
                                dataReduce : props.dataReduce,
                                destination : props.loginAuthentification.dataEnter.id_user
                                
                                
                                
                                
                                
                               

}










if(pageState === true){

    return(<FunctionalPages {...functionsionalPorps} />)
} 






    return(<>

                    <div className="d-flex justify-content-around flex-wrap w-100">

                            {props.loginAuthentification.dataEnter.products.map(item => <ProductsCard key = {item.id} item = {item} handleEditProduk = {handleEditProduk} handleAddToCart = {props.kelolaProduk.handleAddToCartFromKelolaProducts} cart = {props.transaksi.cart} handleHapusProduct = {handleHapusProduct} />)}

                    </div>



                    <div className="w-100 d-flex justify-content-center mb-4">
                            <button className="btn btn-warning mt-4 w-75 p-2" onClick={handleTambahProduk}>Tambah Produk</button>
                    </div>
    
    </>)

}