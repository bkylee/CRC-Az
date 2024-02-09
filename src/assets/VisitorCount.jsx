let counter; 

fetch('https://g895njd.azurewebsites.net/api/visitorcount')
    .then(Response => Response.json)
    .then(data => counter=data)


const VisitorCount = () => {
  return (
      <div>{counter}</div>
  )
}

export default VisitorCount