import './App.css'
import { useQuery } from "@tanstack/react-query"
function App() {

  const fetchData = async () => {
    let data = await fetch("http://localhost:3000/posts");
    console.log(data)
  }

   const {data, status}  = useQuery({
    queryKey : ["posts"],
    queryFn: fetchData,
   })

  return (
    <>
      <div>this is the beginning!</div>
    </>
  )
}

export default App
