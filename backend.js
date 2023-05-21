const express = require('express');
const app = express();
const firebaseRoutes = require('./firebaseRoutes');
const cors = require('cors');

// .../firebase/data -> gets sent to the firebaseRoutes file
app.use('/firebase', firebaseRoutes);

app.use(cors({
    origin: '*'
}));

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});