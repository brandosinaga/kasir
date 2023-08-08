import { useMemo } from "react";
import { Form } from "react-bootstrap";


export default function InputProdukToCart(props){


    
 const productOptions = useMemo(() => props.produk.map(item => <option key={item.id} value={item.name}>{item.name} {typeof item.stock === "number" && "stock :"+item.stock}</option>), [props.produk])





 return(<>
    
    <div className="w-100 h-100 border border-4 border-warning d-flex flex-column justify-content-center align-items-center">


            

                  <section className="w-75">

                              <h3 className="text-center ">Pilih Produk</h3>

                              <Form className="border border-4 rounded">
                                    <Form.Group>
                                          <select className="form-select p-3 w-100 text-center" aria-label="Pilih Produk" value={props.namaProduct} onChange={props.handleNamaProduct} >
                                          <option value={""} selected>Daftar Produk</option>
                                                {productOptions}
                                          </select> 
                                    </Form.Group>
                              </Form>     

                  </section>
             



               <section className="w-75 p-4 border border-4 d-flex justify-content-around row">
                  
                        <span><h1>{props.namaProduct}</h1></span>
                        <span><h1>stock : {props.stock}</h1></span>

                      <span className="col-4"><h3>Jumlah</h3></span>
                      <span className="col-4"><h3>{props.countQuantity}</h3></span>
                      <span className="col-4">
                      {props.namaProduct !== "" && <button className="btn btn-outline-primary w-50 fw-bold class" onClick={props.addCountQuantity}>+</button>}
                      {props.countQuantity > 1 && <button className="btn btn-outline-primary w-50 fw-bold class" onClick={props.decCountQuantity}>-</button>}
                      </span>

               </section>





              <section className="w-75 border border-4 d-flex flex-column justify-content-center align-items-center p-4">

                    <span><h5>Total</h5></span>
                    <span><h1>Rp.{props.totalPerProduct},-</h1></span>
                    <span className="mt-4">
                        <button className="btn btn-outline-secondary" onClick={props.handleShowPortal}>kembali ke cart</button>
                        {props.namaProduct && <button className="btn btn-outline-secondary" onClick={props.handleToCarts}>add to charts</button>}
                    </span>

              </section>
                      
          
              </div>

 </>)

}