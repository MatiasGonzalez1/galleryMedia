import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

import postRoutes from './routes/posts.routes.js';
import {connectDB} from './db.js'

const app = express()
connectDB()

//middleware
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

app.use(morgan('dev'));
//routes
app.use(postRoutes);

app.listen(3000, ()=>{
  console.log('Servidor listo en el puerto 3000')
})
