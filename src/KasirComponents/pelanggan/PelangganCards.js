import { Card } from "react-bootstrap";

export default function PelangganCard(props){





    return(<>
        <Card style={{ width: '10rem',height:'fit-content' }}>
           <Card.Body>
              <Card.Title className="text-center"><h3>{props.item.nama}</h3></Card.Title>
              <Card.Text className="text-center">
                <span className="text-secondary"></span>
                <span className="text-secondary" style={{fontSize :"10px"}}></span>
                <button className="btn text-success" onClick={() => props.seeDetail(props.item)}>lihat detail dan edit</button>
              </Card.Text>
          </Card.Body>
          </Card>
          </>)

    

}


