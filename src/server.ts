import express from 'express';


const app = express();

// app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: true })
});

app.listen(3333, () => {
    console.log('Server Started on Port 3333!');
});
