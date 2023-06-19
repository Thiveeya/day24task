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

// day 25 APP.js

/* eslint-disable react/jsx-pascal-case */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Charts_Page from './Components/Charts';
import Dashboard from './Components/Dashboard';
import Button_Page from './Components/dropcomp/Buttons';
import Cards_Page from './Components/dropcomp/Cards';
import Error_Page from './Components/Pages/404Page';
import Blank_page from './Components/Pages/Blank_page';
import Forgot_page from './Components/Pages/ForgetPassword';
import Login_Page from './Components/Pages/Login';
import Register_Page from './Components/Pages/Registor';
import Tables_Page from './Components/Tables';
import Animation_Page from './Components/Utilities/Animations';
import Borders_Page from './Components/Utilities/Borders';
import Colors_Page from './Components/Utilities/Colors';
import Other_Page from './Components/Utilities/Other';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
          {/* Components */}

          <Route path="/cards">
            <Cards_Page/>
          </Route>

          <Route path="/buttons">
            <Button_Page/>
          </Route>

        {/* Utilities */}

        <Route path="/colors">
          <Colors_Page/>
        </Route>

        <Route path="/borders">
          <Borders_Page/>
        </Route>

        <Route path="/animations">
          <Animation_Page/>
        </Route>

        <Route path="/others">
          <Other_Page/>
        </Route>

        {/* Pages */} 

        <Route path="/login">
          <Login_Page/>
        </Route>

        <Route path="/register">
          <Register_Page/>
        </Route>

        <Route path="/forgot">
          <Forgot_page/>
        </Route>

        <Route path="/**/**">
          <Error_Page/>
        </Route>

        <Route path="/blank">
          <Blank_page/>
        </Route>

        <Route path="/charts">
          <Charts_Page/>
        </Route>

        <Route path="/tables">
          <Tables_Page/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
