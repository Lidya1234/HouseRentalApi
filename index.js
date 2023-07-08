const express = require('express');
const app = express();
const house = require('./src/House/Routes/house')

const port = 3000 || process.env.PORT
app.listen(port, () =>
    console.log(`Server listening  on port ${port}`)
)
app.get('/', (req, res) => {
    res.send("Hello there")
})
app.use(express.json());
app.use('/house', house)
