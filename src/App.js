import { useState, useEffect } from "react";
import "./App.css";

function App({ login }) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`).then((response) =>
      response.json().then(updateData)
    );
  });

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return <div>No user available</div>;
}

export default App;
