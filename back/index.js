import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

import postRoutes from './server/routes/posts.routes.js';
import {connectDB} from './server/db.js'
// import {dirname, join} from 'path'
// import { fileURLToPath } from 'url';

const app = express()
// const __dirname = dirname(fileURLToPath(import.meta.url))

connectDB()

const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

app.use(morgan('dev'));
//routes
app.use(postRoutes);

// app.use(express.static(join(__dirname, '../../front/build')))

app.listen(port, ()=>{
  console.log(`Servidor listo en el puerto ${port}`)
})
