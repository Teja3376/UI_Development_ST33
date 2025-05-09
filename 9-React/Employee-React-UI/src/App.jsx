
import React from 'react';
import './App.css' 
 import './App.css';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import ListEmployeeComponent from './components/ListEmployeeComponent';
 import HeaderComponent from './components/HeaderComponent';
 import FooterComponent from './components/FooterComponent';
 import CreateEmployeeComponent from './components/CreateEmployeeComponent';
 import ViewEmployeeComponent from './components/ViewEmployeeComponent';

 function App() {
   return (
     <div>
       <Router>
         <HeaderComponent />
         <div className="container">
           <Routes> {/* Use Routes instead of Switch */}
             <Route path="/" element={<ListEmployeeComponent />} /> {/* Use element prop */}
             <Route path="/employees" element={<ListEmployeeComponent />} />
             <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
             <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
             {/* Uncomment when you want to use UpdateEmployeeComponent */}
             {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} /> */}
           </Routes>
         </div>
         <FooterComponent />
       </Router>
     </div>
   );
 }

 export default App;
