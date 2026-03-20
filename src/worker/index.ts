// Microsoft OAuth redirect URL endpoint added
app.get('/auth/microsoft/callback', (req, res) => {
    // Handle the OAuth callback here
    const token = req.query.token;
    // Additional logic for processing the token
    res.send('OAuth callback received');
});
