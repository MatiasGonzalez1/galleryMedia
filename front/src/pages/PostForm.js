import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {usePosts} from '../context/postContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

export function PostForm() {
  
  //contexto de postContext
  const { createPost, getPost} = usePosts()
  
  //navegación de react-router-dom
  const navigate = useNavigate();
  const params = useParams();

  //se inicializan las variables a utilizar en 'initial values de la etiqueta formik
  const [post, setPost] = useState({
    title: '',
    description: '',
  });

  useEffect(()=>{
   (async()=> {
    //si existe la propiedad id setea al post con la informacion de ese id
    if (params.id){
      const post =  await getPost(params.id)
      setPost(post)
    }
   })()
  },[])

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-zinc-800 p-10 shadow-md shadow-black'>
        <header className='flex items-center justify-between py-4 text-white'>
          <h3 className='text-xl'>Nuevo Post</h3>
          <Link to='/' className='text-gray-400 text-sm hover:text-gray-300'>Volver al inicio</Link>
        </header>
        
      {/* se inicializan los input con una cadena vacia */}
      <Formik initialValues={post}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
      })}
      onSubmit={ async(values, actions)=>{
        await createPost(values)
        navigate('/')
      }}
      //reinicia los datos para poder mostrar los datos en los input al editar id's
      enableReinitialize={true}
      >
        {({handleSubmit})=> (
          <Form onSubmit={handleSubmit}>

            <label htmlFor='title' className='text-sm block mb-2 font-bold text-gray-400'>Titulo</label>
          {/* se hace referencia en cada input a los valores inicializados
          */}

          <Field className='px-3 py-2 mb-4 focus:outline-none rounded bg-gray-600 text-white w-full' name='title' placeholder='title'/>

          <ErrorMessage component='p' className='text-red-500 text-sm'  name='title'/>

          <label htmlFor='description' className='text-sm block mb-2 font-bold text-gray-400'>Descripcion</label>
          
          <Field component='textarea' className='px-3 py-2 mb-4 focus:outline-none rounded bg-gray-600 text-white w-full' name='description' placeholder='description' rows={3}/>

          <ErrorMessage className='text-red-500 text-sm' component='p' name='description'/>
         
          <button type='submit' className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400'>Guardar</button>
        </Form>
        )}
      </Formik>
      </div>
    </div>
  )
}
