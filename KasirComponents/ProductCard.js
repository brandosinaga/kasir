import { useState } from "react";
import { Card } from "react-bootstrap";

export default function ProductCard(props){

    
  



    return(<>
        <Card style={{ width: '15rem',height:'fit-content' }}>
          <Card.Img variant="top" src={props.item.image} />
           <Card.Body>
              <Card.Title className="text-center"><h3>{props.item.name}</h3></Card.Title>
              <Card.Text className="text-center">
                        <p>Rp.{props.item.price},-</p>
                        <p>Stock : {props.item.stock === false ?  "tidak aktif":props.item.stock  }</p>
                      <button className="btn btn-outline-primary" onClick={() => props.handleEditedItem(props.item)}>Click Disini</button>
              </Card.Text>
          </Card.Body>
          </Card>
          </>)
}