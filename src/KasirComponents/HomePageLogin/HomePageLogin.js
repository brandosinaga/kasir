import InfoCard from "./InfoCard";

export default function HomePageLogin(props){

 const data = props.loginAuthentification.dataEnter;



    return(<>
                

                <div className="snapshot-info w-100 d-flex justify-content-around align-items-center p-1">
                        {makingInfoArray(data).map(item => <InfoCard key = {item.id} {...item} />)}
                </div>

                


            </>)


}






function makingInfoArray(data){

    const infoTotal = {id : "0",title : "Pemasukan", info : `Rp.${data.income.toLocaleString('id-ID')},-`};
    const infoProduk = {id : "1",title : "Produk", info : data.products.length};
    const infoPelanggan  = {id : "2",title : "Pelanggan", info : data.pelanggan.length};
    const infoTransaksi = {id : "3",title : "Transaksi", info : data.transaksi.length};

    return [infoTotal, infoProduk, infoPelanggan, infoTransaksi];
}