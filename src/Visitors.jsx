import { useEffect } from "react";
import { useState } from "react"

function Visitors() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://g895njd.azurewebsites.net/api/visitorcount')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>{data && <div>{ JSON.stringify(data)} </div>}</div>
  )
}

export default Visitors