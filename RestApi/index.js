import express from "express";

const app = express();

app.use(express.json());

let users = [
    {
        id: 1,
        name: "A",
        email: "a@abes.ac.in"
    },
    {
        id: 2,
        name: "B",
        email: "b@abes.ac.in"
    }
];


// ================= GET =================

// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});


// ================= POST =================

// Create a new user
app.post("/users", (req, res) => {

    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(user);

    res.json(user);
});


// ================= PUT =================

// Update an existing user
app.put("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (user) {

        user.name = req.body.name;
        user.email = req.body.email;

        res.send("User updated successfully");

    } else {

        res.status(404).send("User not found");

    }
});


// ================= DELETE =================

// Delete a user
app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (user) {

        users = users.filter(u => u.id !== req.params.id);

        res.send("User deleted successfully");

    } else {

        res.status(404).send("User not found");

    }
});


// ================= SERVER =================

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});




//create a restapi for 100 product with id,name,price,description,category
//implement get,post,put,and delete request for products