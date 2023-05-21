const express = require('express');
const app = express();
const firebaseRoutes = require('./firebaseRoutes');

// TODO - possibly remove
const cors = require('cors');
app.use(cors());

// .../firebase/data -> gets sent to the firebaseRoutes file
app.use('/firebase', firebaseRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});