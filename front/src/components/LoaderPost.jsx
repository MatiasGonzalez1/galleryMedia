import {VscEmptyWindow} from 'react-icons/vsc'

function LoaderPost() {
  return (
    <div>
      <h1 className="text-white flex flex-col justify-center items-center">
        <VscEmptyWindow className="
        w-20 h-20 text-white"/>
        There are no posts</h1>
      </div>
  )
}
export default LoaderPost