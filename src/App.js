// import { Badge, Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import "./App.css";

// function App() {
  
//   const data = [
//     {
//       product:"Fancy items",
//       productImages:
//     "https://images.meesho.com/images/products/262115773/zuyfj_512.webp",
//       productName: "PEARLS Green Bridal jewel",
//       Metal: "Alloy",
//       price: "1100",
//       colour: "green",
//     },
//     {
//       productImages:
//         "https://images.meesho.com/images/products/21241650/jzszh_512.webp",
        
//       productName: "Adiyogi Shiva Statue ",
//       material: "poly-resin",
//       price: "106",
//       colour: "Black",

//     },
//     {
//       productImages:
//         "https://images.meesho.com/images/products/18531575/15044_512.webp",
//         productName: "Trendy Idols",
//         price: "1958",
//         colour: "gold-platted",
//     },
//     {
//       productImages:
//         "https://images.meesho.com/images/products/31524896/fbjo3_512.webp",
//       productName: "Modern Idols",
//       material: "Poly-Resin",
//       price: "418",
      
//     },
//     {
//       productImages:
//         "https://images.meesho.com/images/products/239154788/mpooy_512.webp",
//       productName: "Women combo sling bag",
//       type: " Printed",
//       price: "268",
//       combo: " pack of 3",
//     },
//     {
//       productImages:
//         "https://images.meesho.com/images/products/25874127/86ap6_512.webp",
//       productName: "Sports shoe",
//       price: "600",
//       colour: "gray",
//     },
//     {
//       productImages:
//         "https://images.meesho.com/images/products/2328300/1_512.webp",
//       productName: "Unisex Sunglasses",
//       material: "Metal",
//       price: "800",
//     },
//     {
//       productImages:
//         "https://images.meesho.com/images/products/17782973/411b8_400.webp",
//       productName: "Essential Idols",
//       material: "Wooden",
//       price: "2010",
      
//     },
//   ];
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container px-4 px-lg-5">
//             <a className="navbar-brand" href="#!">
//               Meesho
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
//                 <li class="nav-item">
//                   <a className="nav-link active" aria-current="page" href="#home">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#about">
//                     About
//                   </a>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle"
//                     id="navbarDropdown"
//                     href="#shop"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Shop
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li>
//                       <a className="dropdown-item" href="# allpro">
//                         All Products
//                       </a>
//                     </li>
//                     <li>
//                       <hr className="dropdown-divider" />
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#ite">
//                         Popular Items
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#!">
//                         New Arrivals
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//               <form className="d-flex">
//                 <button className="btn btn-outline-dark" type="submit">
//                   <i className="bi-cart-fill me-1"></i>
//                   Cart
//                   <span className="badge bg-dark text-white ms-1 rounded-pill">
//                     {count}
//                   </span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <header className="bg-dark py-5">
//         <div className="container px-4 px-lg-5 my-5">
//           <div className="text-center text-white">
//             <h1 className="display-4 fw-bolder">Meesho</h1>
//             <p className="lead fw-normal text-white-50 mb-0">Mega mesho hall</p>
//           </div>
//         </div>
//       </header>

//       <div className="cart-value">
//         <Badge bg="success">CART {count}</Badge>
//       </div>

//       <div className="card-container">
//         {data.map((product, index) => 
//           <Cards
//             index={index}
//             product={product}
//             setCount={setCount}
//             count={count}
//           />
//         )}
//       </div>

//       <footer className="py-5 bg-secondary">
//         <div className="container">
//           <p class="m-0 text-center  text-warning">
//             Copyright &copy; Thiveeya <span>2023</span>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

// function Cards({product, index, setCount, count}) {
//   const [show, setShow] = useState(false);

//   function addToCart() {
//     setShow(!show);
//     setCount(count + 1);
//   }
//   function removeFromCart() {
//     setShow(!show);
//     setCount(count - 1);
//   }
//   return (
    
//       <Card key={index} style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={product.productImages} />
//         <Card.Body>
//           <Card.Title>{product.productName}</Card.Title>
//           <Card.Text>{product.memory}</Card.Text>
//           <Card.Text>
//             <span>&#8377;</span>
//             {product.price}
//           </Card.Text>
//           <Card.Text>{product.colour}</Card.Text>

//           {!show ? (
//             <Button variant="primary" onClick={addToCart}>
//               Add to Cart
//             </Button>
//           ) : (
//             ""
//           )}

//           {show ? (
//             <Button variant="danger" onClick={removeFromCart}>
//               Remove Cart
//             </Button>
//           ) : (
//             ""
//           )}
//         </Card.Body>
//       </Card>
    
//   );
// }

// Admin task 
 

import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
 import Dashboard from './components/DashboardPage/Dashboard';
import ButtonPage from './components/ComponentsPage/ButtonsPage/ButtonPage';
import Cards from './components/ComponentsPage/CardsPage/Cards';
import Colors from './components/UtilitiesPage/ColorsPage/Colors';
import Borders from './components/UtilitiesPage/BordersPage/Borders';
import Animations from './components/UtilitiesPage/AnimationsPage/Animations';
import Others from './components/UtilitiesPage/OthersPage/Others';
import Login from './components/AddonPages/Login';
import Register from './components/AddonPages/Register';
import ForgotPassword from './components/AddonPages/ForgotPassword';
import ErrorPage from './components/AddonPages/ErrorPages';
import BlankPage from './components/AddonPages/BlankPages';
import Charts from './components/ChartsPage/Charts';
import Tables from './components/TablesPage/Tables';

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleOpen1 = () => {
    setOpen1(!open1)
  }
  const handleOpen2 = () => {
    setOpen2(!open2)
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/dashboard" element={<Dashboard open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/buttons" element={<ButtonPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/cards" element={<Cards open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/colors" element={<Colors open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/borders" element={<Borders open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2} />} />
        <Route path="/animations" element={<Animations open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/others" element={<Others open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/errorpage" element={<ErrorPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/blankpage" element={<BlankPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        <Route path="/charts" element={<Charts open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} /> 
        <Route path="/tables" element={<Tables open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
      </Routes>
    </div>
  )
}

export default App
