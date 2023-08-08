export default function TableCart(props){





    return( <tr>
        <td>{props.item.countCart}</td>
             <td>{props.item.name}</td>
                 <td>{props.item.harga}</td>
                     <td>{props.item.countQuantity}</td>
                         <td>{props.item.totalPerProduct}</td>
                            <td><button className="btn btn-outline-secondary" onClick={() => props.handleEditProductInCart(props.item)}>edit</button></td>
        </tr>)
}