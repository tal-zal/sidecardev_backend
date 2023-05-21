const express = require('express');
const app = express();
const firebaseRoutes = require('./firebaseRoutes');
const chatgptRoutes = require('./chatgpt')

// TODO - possibly remove
const cors = require('cors');
app.use(cors());

// .../firebase/data -> gets sent to the firebaseRoutes file
app.use('/firebase', firebaseRoutes);

app.use('/chatgpt', chatgptRoutes)


const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});