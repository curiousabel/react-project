const mongoClient = require('mongodb').MongoClient;
const userRoutines = require('./userroutines');
const coll = 'users';
mongoExercise4 = async () => {
  let conn = undefined;
  try {
    const conn = await mongoClient.connect('mongodb://localhost', {
      useNewUrlParser: true,
    });
    const db = conn.db('info3069db');
    console.log('Connected to server');
    // set up a new user object
    let joe = await userRoutines.setUser('Joe User', 34, 'joe@here.com');
    // add the new user to db
    let docsAdded = await userRoutines.addOne(joe, db, coll);
    // see if the add worked
    docsAdded.insertedCount === 1
      ? console.log(`user ${joe.name} added`)
      : console.log(`user ${joe.name} not added`);
    // now see if we can find him
    let user = await userRoutines.findByName('Joe User', db, coll);
    console.log(`user ${user.name} found id = ${user._id}`);
    // update his email
    user.email = 'joey@here.com';
    let updateResults = await userRoutines.updateOne(user, db, coll);
    console.log(`${updateResults.modifiedCount} user document was updated`);
    // get him one more time and show the updated email
    user = await userRoutines.findByName('Joe User', db, coll);
    console.log(`user ${user.name}'s updated email is ${user.email}`);
    // remove him from the db
    let deleteResults = await userRoutines.deleteOne(user, db, coll);
    console.log(`${deleteResults.deletedCount} document was deleted`);
  } catch (err) {
    console.log(`Houston we have a problem: ${err}`);
  } finally {
    conn ? conn.close : null;
    process.exit(0);
  }
};
mongoExercise4();
