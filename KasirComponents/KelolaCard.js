import { Card } from "react-bootstrap";



function KelolaCard({title, image, color, page, handleKelolaPage}){

 
  
 
         return(<>
           <Card className={`mb-3 bg-${color}`} style={{ width: '15rem',height:'fit-content' }}>
             <Card.Img variant="top" src={image} />
              <Card.Body>
                 <Card.Title className="text-center"><h3>{title}</h3></Card.Title>
                 <Card.Text className="text-center">
                     <button onClick={handleKelolaPage} className={`btn btn-outline-secondary text-light fw-bold class `} value={page}>Click Disini</button>
                 </Card.Text>
             </Card.Body>
             </Card>
             </>)
 
 }

export default KelolaCard