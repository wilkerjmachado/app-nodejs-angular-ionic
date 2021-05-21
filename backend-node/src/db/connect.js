var mongoose = require('mongoose');

var databaseUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/app';

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function () {
     console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
     console.log('mongoose connection error to : ', err);
});