const mongoClient = require('mongodb').MongoClient;
const userRoutines = require('./userroutines');
const coll = 'users';
const mongoExercise1 = async () => {
  let conn = undefined;
  try {
    conn = await mongoClient.connect('mongodb://localhost', {
      useNewUrlParser: true,
    });
    let db = conn.db('info3069db');
    console.log('Connected to server');
    let user = await userRoutines.findByName('Jane Doe', db, coll);
    console.log(`user ${user.name} found id = ${user._id}, age = ${user.age}`);
  } catch (err) {
    console.log(`Houston we have a problem: ${err}`);
  } finally {
    conn ? conn.close() : null;
    process.exit;
  }
};
mongoExercise1();
