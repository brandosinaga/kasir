import { Card } from "react-bootstrap";


export default function InfoCard(props){

  
    return(<>
        <Card className="bg-warning" style={{ width: '10rem', height :"100px"}}>
         
           <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="text-center"><h5 style={{fontStyle :"italic"}}>{props.title}</h5></Card.Title>
              <Card.Text className="text-center">
                <span>{props.info}</span>
              </Card.Text>
          </Card.Body>
          </Card>
          </>)


}