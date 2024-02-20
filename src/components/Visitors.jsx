import { useEffect } from "react";
import { useState } from "react"

const Visitors = () =>{
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://g895njd.azurewebsites.net/api/visitorcount', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => { setCount(data.count); })
      .catch(error => console.error('Error:', error));
  }, []); // empty dependency array = run once at mount 

  return (
    <div>
      {count !== null ? `Visitor count: ${count}` : 'Loading...'}
    </div>
  );
};

export default Visitors