export default function LoggedInDetails(props){

    const {email, city, nama_user, id_user} = props.account


    

       return(<div className="w-100 mb-3 p-2 row">

                            <span className="border border-4 p-2 text-center rounded  col-8"><h3>{nama_user}</h3></span>
                            <span className="border border-4 col-4 p-2 text-center rounded bg-dark text-light"><h3>{id_user}</h3></span> 
                            <span className="col-12 mt-4"></span>

                            <span className="border border-1 p-2 rounded  col-3 d-flex justify-content-center align-items-center"><h5>Email</h5></span>
                            <span className="border border-1 col-9 p-2 text-center rounded d-flex justify-content-center align-items-center"><h5>{email}</h5></span> 

                            <span className="border border-1 p-2 rounded  col-3 d-flex justify-content-center align-items-center"><h5>Kota</h5></span>
                            <span className="border border-1 col-9 p-2 text-center rounded d-flex justify-content-center align-items-center"><h5>{city}</h5></span> 

                </div>)
}