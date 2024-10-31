// Logical Error Example
app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = a + b; // Incorrect operation
    res.send(`The result is: ${result}`);
});

// Debugging: Ensure correct logic
app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = a * b; // Fixed: Correct operation
    res.send(`The result is: ${result}`);
});
