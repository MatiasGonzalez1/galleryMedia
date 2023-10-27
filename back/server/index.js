import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

import postRoutes from './routes/posts.routes.js';
import {connectDB} from './db.js'

const app = express()
connectDB()

const PORT = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

app.use(morgan('dev'));
//routes
app.use(postRoutes);

app.listen(PORT, ()=>{
  console.log(`Servidor listo en el puerto ${PORT}`)
})
