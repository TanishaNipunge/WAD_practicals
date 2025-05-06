const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/assignmentsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use('/api/assignments', assignmentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
