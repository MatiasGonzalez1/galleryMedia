import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {usePosts} from '../context/postContext'
import {useNavigate} from 'react-router-dom'

export function PostForm() {
  
  const { createPost} = usePosts()
  const navigate = useNavigate()

  return (
    <div>
      {/* se inicializan los input con una cadena vacia */}
      <Formik initialValues={{
        title:'',
        description:''
      }}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
      })}
      onSubmit={ async(values, actions)=>{
        await createPost(values)
        navigate('/')
      }}
      >
        {({handleSubmit})=> (
          <Form onSubmit={handleSubmit}>
          {/* se hace referencia en cada input a los valores inicializados
          */}

          <Field className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' name='title' placeholder='title'/>
          <ErrorMessage component='p' className='text-red-500 text-sm'  name='title'/>
          <Field  className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' name='description' 
          placeholder='description'/>
          <ErrorMessage className='text-red-500 text-sm' component='p' name='description'/>

          <button type='submit'>Save</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}
