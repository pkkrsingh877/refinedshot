const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.post('/api/edit', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
