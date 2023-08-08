


const loggedInPageBtn = [
    
    {id : "0",title : "Produk", page : "productPage"}, 
    {id : "1",title : "Pelanggan", page : "pelangganPage" }, 
    {id : "2",title : "Transaksi", page :"lihatTransaksiPage"}

]




export default function Navbar(props){

    

    if(props.page === 'loggedInPage') {

        return (<>{loggedInPageBtn.map(item => <button key={item.id} className="btn btn-outline-primary" onClick = {() => props.handleChangePage(item.page)}>{item.title}</button>)}</>)



    } else {

        return(<>{loggedInPageBtn.map(item => <button key={item.id} className={`btn btn-outline-primary ${props.page === item.page && 'active'}`} onClick = {() => props.handleChangePage(item.page)}>{item.title}</button>)}</>)


    }
    

}
