import { useMemo } from "react";
import { Form } from "react-bootstrap"
import HandleStock from "./HandleStock";





export default function InputProductsToCart(props){



    

    const fiteredproducts = props.loginAuthentification.dataEnter.products.filter(item => item.stock > 0 || item.stock === false);




    const productslist = useMemo(() =>  props.transaksi.cart.reduce((a,e) =>  [...(a.filter(item => item.name.toLowerCase().trim() !== e.namaProduk.toLowerCase().trim()))],[...fiteredproducts])

    , [ props.transaksi.cart, fiteredproducts])





    const handleKembali = () => {

                props.transaksi.handleBackFromSelectingProduct();
                props.handleAdditionalPage()
                

    }




    const handleTambahkanKeCart = () => {

        props.transaksi.handleAddToCart()
      
        props.transaksi.handleBackFromSelectingProduct()
    }

  




        return(<div className="w-100 d-flex flex-column justify-content-center align-items-center ">
            

                        <span className="d-flex justify-content-center w-100"><Form.Control className="w-75 text-center border border-2" placeholder="Masukkan Nama Produk" value={props.transaksi.namaProduk} onChange={props.transaksi.handleNamaProduk} /></span>





                        <ul className="w-100 d-flex flex-column justify-content-center align-items-center" style={{listStyle : "none"}}>
                            {productslist.filter(item => item.name.toLowerCase().includes(props.transaksi.namaProduk.toLowerCase()) && props.transaksi.namaProduk !== '').map(item => <li key={item.id} className="w-75 d-flex justify-content-center"><button className="btn btn-outline-primary w-75" onClick={() => props.transaksi.handleMakeThisNamaProduk(item.name)}>{item.name}</button></li>)}
                        </ul>





                        {productslist.some(item => item.name.toLowerCase() + " " === props.transaksi.namaProduk.toLowerCase()) &&
                     
                            (<><span className="row w-75">
                                           <h5 className="border border-1 rounded col-6 text-center p-2">Harga per Item</h5>
                                           <h3 className="bg-secondary text-light p-2 col-6  text-center">Rp.{props.transaksi.price.toLocaleString("id-ID")},-</h3>
                            </span>
                          
                          <HandleStock {...props.transaksi} />
                          
                            
                            </>)}
                     
                      

                        <span className="w-100 mt-3 d-flex justify-content-around">
                            <button className="btn btn-outline-danger" onClick={handleKembali}>Lihat Cart</button>
                        {(props.transaksi.namaProduk !== "" && props.transaksi.price !== 0) && <button className="btn btn-outline-success" onClick={() => handleTambahkanKeCart()}>Tambahkan ke Cart</button>}
                        </span>


                    
        </div>)
    



}