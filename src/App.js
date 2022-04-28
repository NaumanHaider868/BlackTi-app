import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Renters from "./componet/Renters";
import Packs from "./componet/Packs";
import InventoryManagement from "./componet/InventoryManagement";
import InventoryCount from "./componet/InventoryCount";
import DashBoard from "./componet/DashBoard";
import HomeDeliveries from "./componet/HomeDeliveries";
import LoginPage from './componet/LoginPage';



export default class App extends Component {
  
  render() {
    return (
      <div>
            <Routes>
                <Route   path='/' element={<LoginPage/>}/>
                <Route path='/DashBoard' exact element={<DashBoard/>}/>
                <Route path='/packs'  element={<Packs/>}/>
                <Route path='/HomeDeliveries' exact element={<HomeDeliveries/>}/>
                <Route path='/Renters' exact element={<Renters/>}/>
                <Route path='/InventoryManagement' exact element={<InventoryManagement/>}/>
                <Route path='/InventoryCount' exact element={<InventoryCount/>}/>
            </Routes>
        
      </div>
    )
  }
}

// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Renters from "./componet/Renters";
// import Packs from "./componet/Packs";
// import InventoryManagement from "./componet/InventoryManagement";
// import InventoryCount from "./componet/InventoryCount";
// import DashBoard from "./componet/DashBoard";
// import HomeDeliveries from "./componet/HomeDeliveries";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//             <Route exact  path='/' element={<DashBoard/>}/>
//             <Route path='/packs'  element={<Packs/>}/>
//             <Route path='/HomeDeliveries' exact element={<HomeDeliveries/>}/>
//             <Route path='/Renters' exact element={<Renters/>}/>
//             <Route path='/InventoryManagement' exact element={<InventoryManagement/>}/>
//             <Route path='/InventoryCount' exact element={<InventoryCount/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
