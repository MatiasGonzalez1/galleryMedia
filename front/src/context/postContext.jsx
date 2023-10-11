import PropTypes from 'prop-types';
import { useState, createContext, useContext } from "react";

const postContext = createContext()

//contexto para poder compartir funciones con todos los componente que esten dentro

export const usePosts = () =>{
  const context = useContext(context)
  return context
}

export const PostProvider = ({children}) => {
  
  const [posts, setPosts] = useState([])
  
  return (

    <postContext.Provider value={{
      posts,
      setPosts
    }}>
      {children}
    </postContext.Provider>
  )
}

PostProvider.propTypes = {
  children: PropTypes.node,
}

