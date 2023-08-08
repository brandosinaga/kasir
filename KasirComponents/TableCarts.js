import TableCart from "./TableCart";

export default function TableCarts(props){



        return(<div>
        <table className="table text-center">
            <thead className="thead-dark">
                          <tr>
                          <th scope="col">No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Harga per Item</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                          </tr>
          </thead>
          <tbody>{props.charts.map(item =>  <TableCart item = {item} handleEditProductInCart= {props.handleEditProductInCart} />)}
                                            

            </tbody>
        </table>
         </div>)




}
