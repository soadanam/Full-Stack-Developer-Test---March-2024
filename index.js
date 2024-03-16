const express = require('express');
const cors = require('cors');
const app = express();

const port = 4000;

// Middleware and Body-parser
app.use(cors())
app.use(express.json());



// Create / POST request Method 
app.post('/user', async (req, res) => {
    // console.log('Hitting the post!');
    const newUser = {
        name: req.body.userName,
        password: req.body.password,
    }
    const result = await userCollection.insertOne(newUser);
    // res.send(result);
    res.send("Inserted user:", newUser );
});


// Read/ GET request Method
app.get('/user', async (req, res) => {
    const specificUser = req.body.name;
    const cursor = userCollection.find(specificUser);
    const result = await cursor.toArray();
    // res.send(result);
    res.send("User detail:", user );
});


// Delete / DELETE request Method
app.delete('/deleteUser', async (req, res) => {
    const user = {
        name: req.body.userName,
        password: req.body.password,
    }
    const deleteResult = await userCollection.deleteOne(user);
    // res.send(deleteResult);
    res.send("Deleted user:", user );
});


// Update / PUT / PATCH request Method
app.patch('/updateUser', async (req, res) => {
    const name = req.body.name;
    const newUser = {
        name: "James Bond",
        password: "007007",
    }
    const filter = { name };
    const UpdatedResult = await userCollection.updateOne(filter, newUser);
    // res.send(UpdatedResult);
    res.send("Updated user:", newUser);
});


app.listen(port, () => {
    console.log(`Listing to my port: ${port}`)
})