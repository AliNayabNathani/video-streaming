const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     console.log('user details:\n\n\n\n', req.oidc.isAuthenticated())
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });


// router.get('/protected', (req, res) => {
//     const authenticatedUser = req.user;
//     res.json({ message: 'You are authorized to access this route.', user: authenticatedUser });
// });

// router.get('/profile', requiresAuth(), (req, res) => {
//     res.send(JSON.stringify(req.oidc.user));
// });

// router.get('/admin', requiresAuth(), (req, res) =>
//     res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`)
// );

module.exports = router;