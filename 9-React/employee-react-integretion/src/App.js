// import React from 'react';
// // eslint-disable-next-line no-unused-vars
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for Routes
// import ListEmployeeComponent from './components/ListEmployeeComponent';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
// import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import ViewEmployeeComponent from './components/ViewEmployeeComponent';

// function App() {
//   return (
//     <div>
//       <Router>
//         <HeaderComponent />
//         <div className="container">
//           <Routes> {/* Use Routes instead of Switch */}
//             <Route path="/" element={<ListEmployeeComponent />} /> {/* Use element prop */}
//             <Route path="/employees" element={<ListEmployeeComponent />} />
//             <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
//             <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
//             {/* Uncomment when you want to use UpdateEmployeeComponent */}
//             {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} /> */}
//           </Routes>
//         </div>
//         <FooterComponent />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './services/App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch in v6
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes> {/* Use Routes instead of Switch in v6 */}
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
