import { usePosts } from "../context/postContext"

const HomePage = () => {

  const myContext = usePosts()
  console.log(myContext)
  return (
    <div>HomePage

      <button>Add</button>
    </div>
  )
}
export default HomePage