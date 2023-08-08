import { Card } from "react-bootstrap";


export default function ProductsCard(props){

const {image, name, price, stock} = props.item;



    return(<>
        <Card className="products-card text-secondary"  style={{ width: '10rem',height:'fit-content' }}>
          <Card.Img variant="top" src={image} />
           <Card.Body>
              <Card.Title className="text-center"><h3>{name}</h3></Card.Title>
              <Card.Text className="text-center">

                  <span>Rp.{price.toLocaleString('id-ID')},-</span>
                  <span className="d-block">stok : {typeof stock === "boolean" ? <span className="text-success">tidak diatur</span> : stock}</span>
               
                  <span className="productCard_menu w-100 d-flex justify-content-around align-items-center" style={{borderStyle : "none"}}>
                          <button  className={`btn fw-bold class`} onClick={() => props.handleEditProduk(props.item)} disabled = {props.cart.some(item => item.namaProduk.trim() === props.item.name)} style={{borderStyle : "none", width : "10px"}}>
                              <span className="material-symbols-outlined">edit</span>
                          </button>
                          <TambahCartFromProductsPage item = {props.item} handleAddToCart = {props.handleAddToCart} cart = {props.cart} />
                          <button className="btn" style={{border : "none"}} onClick={() => props.handleHapusProduct(props.item)} disabled = {props.cart.some(item => item.namaProduk.trim() === props.item.name)}>
                              <span className="material-symbols-outlined">delete_forever</span>
                          </button>
                  </span>



              </Card.Text>
          </Card.Body>
          </Card>

         
          </>)

}




function TambahCartFromProductsPage(props){


if(typeof props.item.stock === "number" && props.item.stock !== 0){

  return(<>
            <button  className={`btn fw-bold class`} onClick={() => props.handleAddToCart(props.item)} disabled = {props.cart.some(item => item.namaProduk.trim() === props.item.name)} style={{borderStyle : "none", width : "10px"}}>
              <span className="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </>)
}


if(typeof props.item.stock === "boolean"){

  return(<>
            <button  className={`btn fw-bold class`} onClick={() => props.handleAddToCart(props.item)} disabled = {props.cart.some(item => item.namaProduk.trim() === props.item.name)} style={{borderStyle : "none", width : "10px"}}>
              <span className="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </>)
}
}