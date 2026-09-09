import express from "express";

const app = express();

app.use(express.json());


let products = [];

for (let i = 1; i <= 100; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        price: i * 100,
        description: `This is the description of Product ${i}`
    });
}



app.get("/products", (req, res) => {
    res.json(products);
});



app.get("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (product) {
        res.json(product);
    }
    else {
        res.status(404).send("Product not found");
    }
});



app.post("/products", (req, res) => {

    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    products.push(product);

    res.status(201).json(product);
});




app.put("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (product) {

        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;

        res.json({
            message: "Product updated successfully",
            product: product
        });

    }
    else {
        res.status(404).send("Product not found");
    }
});


app.delete("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (product) {

        products = products.filter(p => p.id !== id);

        res.json({
            message: "Product deleted successfully"
        });

    }
    else {
        res.status(404).send("Product not found");
    }
});




app.listen(8000, () => {
    console.log("Server is running on port 8000");
});