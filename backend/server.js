const express = require('express');
const userRoutes = require('./routes/userRoutes')
const app = express();
app.use(express.static('dist'));
app.use('/', userRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});