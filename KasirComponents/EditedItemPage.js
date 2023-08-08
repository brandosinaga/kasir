import { Form } from "react-bootstrap";

export default function EditedItemPage(props){


        console.log(props)


    
    return (<>
    
                <Form>


                    <Form.Group>
                        <Form.Label>Nama Produk</Form.Label>
                        <Form.Control  placeholder={props.editProduk.name} value={props.editProduk.name} onChange={props.editProduk.handleChangeName} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control placeholder={props.editedItem.price} value={props.editProduk.price} onChange={props.editProduk.handleChangePrice} />
                    </Form.Group>



                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control id="image"  type="file" onChange={props.editProduk.handleChangeImage}  />
                    </Form.Group>



                    <Form.Group>

                        <Form.Label>Stock</Form.Label>
                        <section>
                        <Form.Label className="border border-4 p-2"><input type="radio" onClick={props.editProduk.handleAturStock} checked = {props.editProduk.aturStock} /> atur stock  </Form.Label>
                        <Form.Label className="border border-4 p-2"><input type="radio" onClick={props.editProduk.handleUnlimitedStock} checked = {props.editProduk.stockUnlimited} /> tidak aktif  </Form.Label>                        
                        </section>

                    </Form.Group>


                    {props.editProduk.aturStock === true && (<Form.Group>

                                <Form.Label>Masukkan Jumlah Stock</Form.Label>
                                <Form.Control type="number" min={1} onClick={props.editProduk.handleChangeStock} onChange={props.editProduk.handleEnterStock} />

                    </Form.Group>)}


                </Form>



               
                    
                    <button className="btn btn-outline-primary" onClick={props.handleEditedItem}>back</button>
                    <button className="btn btn-outline-primary" onClick={props.editProduk.handleEditedUbah}>ubah</button>

        </>)
}