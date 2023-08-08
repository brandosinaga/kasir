import { useMemo } from "react"



export default function DetailPage(props){




const detailCart = useMemo(() => {

    return props.cart.map(item => (<span key={item.number}>
                                    <li>Item {item.number}</li>
                                    <li>Nama produk : {item.namaProduk}</li>
                                    <li>Harga per item  : Rp.{item.price},- {}</li>
                                    <li>Jumlah pesanan : {item.quantity}</li>
                                    <li>Total per item : Rp.{item.totalPerItem},-</li>
                                </span>))
},[props.cart])





return(<>
    <div className="detail-laporan p-2">
            <span>
                <p>Invoice : {props.invoice}</p>
                <p>Date : {props.tanggalTransaksi}</p>
                <p>Nama Pelanggan : {props.namaPelanggan === "" ? "NN" : props.namaPelanggan}</p>
            </span>
                
            <span>
                <ul  style={{listStyle : "none"}}>
                    {detailCart}
                </ul>
            </span>

            <span>
                <p>Total Kuantitas : {props.jumlah_item}</p>
                <p>Total Transaksi : Rp.{props.total},-</p>
            </span>
            

</div>

<div className="mt-2">
            <button className="btn btn-outline-secondary" onClick={props.backToLihatTransaksiPage}>kembali</button>
            <button className="btn btn-outline-secondary">cetak</button>
</div>
</>)

}