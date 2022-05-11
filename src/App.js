// import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Products, Contact, Error404 } from "./Pages";

function App() {
  // const [data, updateData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (!login) return;
  //   setLoading(true);

  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response) => response.json())
  //     .then(updateData)
  //     .then(() => setLoading(false))
  //     .catch(setError);
  // }, [login]);

  // if (loading) return <h1>Loading</h1>;
  // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if (!data) return null;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
