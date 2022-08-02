const mongoose = require('mongoose');

const Db = process.env.ATLAS_URI;


mongoose.connect(Db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
    
