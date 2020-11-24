const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const userRoutes = require('./routes/user');
const habitRoutes = require('./routes/habit');
const habitScoreRoutes = require('./routes/habitScore');
const habitPostRoutes = require('./routes/habitPost');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/our-habits-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan('tiny'));

// Routes
app.use('/api', userRoutes);
app.use('/api', habitRoutes);
app.use('/api', habitScoreRoutes);
app.use('/api', habitPostRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./our-habits-client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
