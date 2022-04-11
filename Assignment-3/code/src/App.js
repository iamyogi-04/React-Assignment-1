import React from 'react';
import './App.css';
import CustomerInfo from './components/CustomerInfo';
import Navbar from './components/Navbar';
import OrderInfo from './components/OrderInfo';
import ProductList from './components/ProductList';


var arrow="<"
function App() {
  const details = {
    Appointment: "12:30 (31-03-2022)",
    Email: "xyz@gmail.com",
    Phone: "8562145001",
  };
  return (
    <div className="site-container">
    {/* Start Your code here */}
    
    <Navbar arr={arrow}/>
    <CustomerInfo data={details}/>
    <OrderInfo/>
    <ProductList/>
    </div>
  );
}

export default App;
