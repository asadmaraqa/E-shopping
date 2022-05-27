
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/v1/products")
      .then((res) => res.json())
      .then((resjson)=>console.log(resjson))

  }, []);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;