const express = require('express');
const mcRouter = require('./routes');


const app = express();

const port = process.env.PORT || 7070;


app.use('/', mcRouter);

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
}
);



