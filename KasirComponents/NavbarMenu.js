export default function NavbarMenu({handleLogout}){


  


    return (<div className="border border-4 border-dark p-4 mb-4">

                    <button className="btn btn-outline-primary rounded" onClick={handleLogout}>Logout</button>

             </div>)

}