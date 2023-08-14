const DB_HOST = '127.0.0.1';
const DB_PORT = '27017';
const DB_NAME = 'VisitCard' ;
const DB_URI =`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
const mongoose =require('mongoose');
const dbConnection =mongoose.createConnection(DB_URI,{
  useUnifiedTopology:true,
});
module.exports=dbConnection;
dbConnection.on('connected',
  () => console.log(`db.controller.js : connected to ${DB_URI}`)
);
dbConnection.on('disconnected',
  () => console.log(`db.controller.js : disconnected from ${DB_URI}`)
);
dbConnection.on('error',
  err => console.log(`db.controller.js : connection error ${err} `)
);
const shutdown = (msg, callback) => {
  dbConnection.close(
    () => {
      console.log(` Mongoose shutdown : ${msg}`);
      callback();
    }
  );
}