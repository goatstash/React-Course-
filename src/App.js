import { useState, useEffect } from "react";
import "./App.css";

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

  return <h1>Welcome to react testing library</h1>;
}

export default App;
