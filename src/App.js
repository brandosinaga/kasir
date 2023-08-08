import { BrowserRouter, Routes, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useData from './Utility/useData';
import MainPage from './MainPages/MainPage';
import FormSignUp from './MainPages/FormSignUp';
import KasirPage from "./MainPages/KasirPage";

 


export default function App(){


const allData = useData();



  return(
  
                <BrowserRouter>

                                    <Routes>

                                              <Route path="/" element={<MainPage   />} />

                                              <Route path="/daftar" element={<FormSignUp {...allData} />} />

                                              <Route path="/login" element={<KasirPage {...allData}   />} /> 
                                              
                                    </Routes>
                      
              </BrowserRouter>)


}