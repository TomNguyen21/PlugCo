const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
    // console.log(req)
});


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on PORT: ${PORT}.`)
    }
})