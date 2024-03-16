const express = require('express');
const cors = require('cors');
const app = express();


const port = 4000;


// Middleware and Body-parser
app.use(cors())
app.use(express.json());



// Create / POST request Method 
app.post('/user', async (req,res) => {
    // console.log('Hitting the post!');
    const newUser = {
        name: req.body.userName,
        password: req.body.password,
    }

    const result1 = await userCollection.insertOne(newUser);
    res.send(newUser);
});


// Read/ GET request Method
app.get('/user', (req,res) => {

    const user = {
        name: 'Soad Anam',
        PassWord: 123123,
    }

    res.send(user);
});



// Delete / DELETE request Method
app.delete('/deleteUser', async (req, res) => {
    const newUser = {
        name: req.body.userName,
        password: req.body.password,
    }

    const deleteResult = await userCollection.deleteOne(newUser);
    res.send(result);
});



// Update / PUT request Method



app.listen(port, () => {
    console.log(`Listing to my port: ${port}`)
})