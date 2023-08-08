import { Card } from "react-bootstrap";

export default function TransaksiCard(props){



   





    return(<>
        <Card style={{ width: '10rem',height:'fit-content' }}>
         
           <Card.Body>
              <Card.Title className="text-center"><h3>{props.item.namaPelanggan === "" ? "NN" : props.item.namaPelanggan}</h3></Card.Title>
              <Card.Text className="text-center">
                <span className="text-secondary d-block">Rp.{props.item.total.toLocaleString("id-ID")},-</span>
                <span className="text-secondary d-block" style={{fontSize :"10px"}}>{props.item.tanggalTransaksi}</span>
                <button className="btn text-success" onClick={() => props.changePageToSeeDetail(props.item)} style={{fontSize : ".6rem", fontWeight : "bolder"}}>lihat detail</button>
              </Card.Text>
          </Card.Body>
          </Card>
          </>)

    

}


