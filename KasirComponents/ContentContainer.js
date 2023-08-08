import LoggedInDetails from "./LoggedInDetails";
import KelolaCards from "./KelolaCards";
import KelolaPages from "./KelolaPages";



export default function ContentContainer(props){




       return(<div className="w-100 border border-4 p-4 content-container d-flex flex-column justify-content-center align-items-center">


                     {props.contentContainer.state === true ?

                                          (<KelolaPages {...props} />)
                     

                     :


                     
                     (<>
                     
                            <LoggedInDetails account = {props.login.account} />

                            <KelolaCards handleKelolaPage = {props.contentContainer.handleKelolaPage} /> 
                            
                     </>)}       


               </div>)



}