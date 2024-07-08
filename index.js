const express = require('express');
const mcRouter = require('./routes');
const port = process.env.PORT || 7070;

const app = express();

app.use(express.json());


app.use('/', mcRouter);

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
}
);



