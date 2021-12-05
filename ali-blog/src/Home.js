import { useState } from "react"


const Home = () => {
  // let name = "Ali"
  const[name, setName]= useState('mario');
  const[age,setAge]= useState(25);


  const handleclick = ()=>{
    setName('Love');
    setAge('30')
    

  }

  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <p> {name} is {age} year old </p>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}

export default Home;