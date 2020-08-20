const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI_LOCAL_NOSQL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('MongoDB Database approsy is connected'))
