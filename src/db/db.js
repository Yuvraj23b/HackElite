const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dhanrajzala7:LcfVBoJRKnOZug2a@clustertt1.k3e2buy.mongodb.net/logindb')

.then(()=>{console.log('mongoose connection successfull')})
.catch((err)=>{console.log(err)})