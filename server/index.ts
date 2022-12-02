import express from 'express'
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
import path from "path"

const categoryRoutes = require('./routes/category')
const positionRoutes = require('./routes/position')

const app = express()

const port = process.env.PORT || 3000

app.use(require('cors')())
console.log(__dirname)
app.use('/uploads', express.static(path.join(__dirname, './uploads')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})); 

app.use('/api/category', categoryRoutes)
app.use('/api/position', positionRoutes)

app.listen(port, () =>
  console.log(`REST API server ready at: http://localhost:${port}`),
)