import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    fs.readFile('./pages/index.html', 'utf-8', (err, data) => {

        if (err) {
            res.status(500).send("Error reading file");
            return;
        }

        res.send(data);
    });

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});