let ObjectID = require('mongodb').ObjectID;
const findByName = (name, db, coll) =>
  db.collection(coll).findOne({ name: name });
  
const addOne = (user, db, coll) =>
  db
    .collection(coll)
    .insertOne({ name: user.name, age: user.age, email: user.email });

const setUser = (name, age, email) => {
  return new Promise((resolve, reject) => {
    resolve({
      // with property value shorthand syntax, you can omit the property
      // value if key matches variable name. So this is just a short form of
      // resolve({name: name, age: age, email: email})
      name,
      age,
      email,
    });
  });
};

const updateOne = (user, db, coll) => {
  let realId = new ObjectID(user._id);
  return db
    .collection(coll)
    .updateOne(
      { _id: realId },
      { $set: { name: user.name, age: user.age, email: user.email } }
    );
};

const deleteOne = (user, db, coll) => {
  let realId = new ObjectID(user._id);
  return db.collection(coll).deleteOne({ _id: realId });
};

const findUniqueValues = (db, coll, field) =>
  db.collection(coll).distinct(field);


const findAll = (db, coll) => db.collection(coll).find().toArray();
module.exports = {
  findByName,
  setUser,
  addOne,
  updateOne,
  deleteOne,
  findUniqueValues,
  findAll,
};
