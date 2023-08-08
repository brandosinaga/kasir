import TableCartRow from "./TableCartRow";

export default function TableCarts(props){





    return(<table className="table text-center">

    <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Nama Produk</th>
            <th scope="col">Harga</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
            </tr>
    </thead>

    <tbody>     
        {props.transaksi.cart.map(item => <TableCartRow key={item.number} item = {item}  handleHapusFromCart={props.transaksi.handleHapusFromCart} handleAdd = {props.editQuantityInCart.handleAddQuantityFromCart} handleDec = {props.editQuantityInCart.handleDecQuantityFromCart} {...props} />)}
    </tbody>


    </table>)
}