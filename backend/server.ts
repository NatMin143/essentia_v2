import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/routes'

dotenv.config()
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
