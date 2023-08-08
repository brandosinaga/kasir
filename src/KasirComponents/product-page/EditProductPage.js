import { Form, Image } from "react-bootstrap";
import useEditProduct from "./useEditProduct";


export default function EditProductPage(props){


    
    
   const {

                    editName,

                    editHarga,

                    editImage,
                    
                    editStock,

                    editJumlahStok,

                    handleChangeStock,

                    handleChangeJumlahStok,

                    handleChangeEditImage,

                    handleChageEditHarga,

                    handleChangeEditName,

                    handleSubmit

    


   } = useEditProduct(props.selectedProduct, props.dataReduce.dispatch, props.destination)





    return(<>
    
    <Form className="text-secondary border border-1 p-4">


             <Form.Group>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control placeholder={editName} onChange={handleChangeEditName} />
                
            </Form.Group>




            <Form.Group className="mt-3">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control  placeholder={editHarga} onChange={handleChageEditHarga} />
            </Form.Group>





            <Form.Group className="mt-3">
                            <Form.Label className="d-block">image</Form.Label>
                            <Image src={editImage} style={{width : "100px", height : "100px"}} />
                            <Form.Label className="d-block">ganti gambar</Form.Label>
                            <Form.Control type="file" onChange={handleChangeEditImage}/>                             
            </Form.Group>  




            <Form.Group className="mt-3">
                    
                     <Form.Select aria-label="Default select example" className="text-secondary text-center" value={editStock}  onChange={handleChangeStock} >
                        <option value={false}>stok tidak diatur</option>
                        <option value={true}>Atur Stok</option>
                    </Form.Select>
                   
                </Form.Group>

              



                { editStock === true && (

                    <Form.Group className="mt-4">
                        <Form.Control  className="text-center border border-4 rounded" value={editJumlahStok} onChange={handleChangeJumlahStok}/>
                    </Form.Group>
                )}




     </Form>





    <span><button onClick={props.handleStatePages}>back</button></span>



    <span><button onClick={handleSubmit}>Ubah</button></span>

       
            
    </>)



}


