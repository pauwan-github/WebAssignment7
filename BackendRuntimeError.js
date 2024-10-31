// Runtime Error
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = database.find(user => user.id === userId); // May return undefined
    res.send(user.name); // Will cause an error if user is undefined
});

// Debugging: Check for undefined values
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = database.find(user => user.id === userId);
    if (!user) {
        return res.status(404).send('User not found'); // Handle error
    }
    res.send(user.name);
});
