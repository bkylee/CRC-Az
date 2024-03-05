import { useEffect } from "react";
import { useState } from "react"

const Uniques = () =>{
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://oij4nv0.azurewebsites.net/api/uniqueCount', {
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
      {count !== null ? `Unique visitor count: ${count}` : 'Loading...'}
    </div>
  );
};

export default Uniques