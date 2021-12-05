import './App.css';

function App() {
  const title = 'wlecome to the new blog'
  const likes = 50;
  // const person ={name:'ali', age:21};
  return (
    <div className="App">
      <div className="content">
        <h1>App Comonent</h1>
        <h1>{title} </h1>
        <p> Liked {likes}</p>
        {/* <p> {person}
        </p> */}
        <p> {10} </p>
      </div>
      
    </div>
  );
}

export default App;
