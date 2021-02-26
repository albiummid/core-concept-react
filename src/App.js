import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ["Arafin-Nayok","Tonooy-Nayok","Tanvir-Nayok","Ummid-Nayok","Hassan-Nayok"]
const products = [
  {name:"Photoshoop",price:'$99.00'},
  {name:"Adobe Primier",price:"$89.00"},
  {name:"Adobe XD",price:"$89.00"},
  {name:"Adobe Flash Player",price:"$20.99"}
]
// const productNames = products.map(product =>product.name);
// here each product is a single object and product.name reffers to name.
// console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
    <p>I am a React Person</p>
    <Counter></Counter>
    <Users name="users[0]"></Users>
    {/* {
      users.map(user => <Users user ="user"></Users>)
    } */}
<ul>
  {
    nayoks.map(nayok => <li>{nayok}</li> )
  }
  {
    products.map(product =><li>{product.name}</li> )
  }
  {
    nayoks.map(nayok => <li>{nayok}</li> )
  }
</ul>
{
  products.map(product=> <Product product={product}></Product>)
}
{/* every foreach, map,filter,slice,for have to write on a 3rd bracket */}

    {/* <Product product={products[0]} ></Product>  */}

    {/* without  */}

    <Person name="Albi" naika="Mim"></Person>
    <Person name="Ananto" naika="Purnima"></Person>


    {/* let's collet data from array <statics>*/}
    {/* <Person name={nayoks[0]} naika="Sabnur"></Person>
    <Person name={nayoks[1]} naika="Asmaul"></Person> */}


    {/* let's collet data from array <dynamic> */}
    {
      nayoks.map(nayok => <Person name={nayok}></Person>)
    }


</header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
// we can use the function on the onClick value ,directly;

return(<div>
  <h1>Count:{count}</h1>
  <button style={{marginRight:"20%",padding:"15px"
,borderRadius:"10px",backgroundColor:"salmon",color:"white"}} onMouseMove={handleDecrease} >Decrease</button>
  <button style={{padding:"15px",borderRadius:"10px",backgroundColor:"salmon",color:"white"}} onMouseMove={handleIncrease} >Increase</button>

  {/* when we call a funtion...we have to write the function in a secondbracket without firstbracket */}
</div>)
}

function Users(props){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  // thirdbracket for blocking unlimited callig of array
  const userStyle ={
    border:"1px solid gray",
    borderRadius:"5px",
    backgroundColor:"lightgray",
    margin:"20px",
    padding:"30px 5%"
  }
  return(
    <div style={userStyle}>
       <h3>Dynamic Users:{users.length}</h3>
           <hr/>
      {
        users.map(user => <div style={{margin:"10px,border",backgroundColor:"red"}}>
          <h4>User Name: {user.name} </h4>
          <h4> Email:{user.email} </h4></div> )
      }
      </div>
   
  )
}

function Product(props) {
 const ProductStyle ={
   border:"1px solid gray",
   borderRadius:"5px",
   backgroundColor:"lightgray",
   width:"200px",
   height:"300px",
   float:"left",
   margin:"20px",
   padding:"0px 5%"
 }
// distructure for easier --here name and price be two separate variable for name and price of each product. 
const{name,price} = props.product;

  return (
  <div style={ProductStyle}>
<h3>{name} </h3>
<h5>{price}</h5>
<button>Buy Now</button>
    </div>
    ) ;
}













function Person(props) {
// here props used for dynamic the value
  return <div style={{border:"2px solid red",boxShadow:"5px 5px 10px salmon",backgroundColor:"lightGray",borderRadius:"5px",width:"50%",margin:"3% auto",color:"green"}}>
  <h1>Name: {props.name}</h1>
  <p >Hero of {props.naika}.</p>
  </div>
}

export default App;
