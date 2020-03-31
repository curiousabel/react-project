const env = require('dotenv').config({ path: `${__dirname}/.env` });
const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const dataRtns = require('./userroutines');
// define a default route to retrieve all users
router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await mongoClient.connect(process.env.DBURL, {
      useNewUrlParser: true,
    });
    const db = conn.db(process.env.DB);
    let users = await dataRtns.findAll(db, process.env.USERCOLLECTION);
    res.send(users);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('get all users failed - internal server error');
  } finally {
    if (conn) conn.close();
  }
});

// router.get('/:name', async (req, res) => {
    
//     let name = req.params.name;

//     let conn;
//     try {
//       conn = await mongoClient.connect(process.env.DBURL, {
//         useNewUrlParser: true,
//       });
//       const db = conn.db(process.env.DB);
//       let users = await dataRtns.findByName(name,db, process.env.USERCOLLECTION);
//       res.send(users);
//     } catch (err) {
//       console.log(err.stack);
//       res.status(500).send('get all users failed - internal server error');
//     } finally {
//       if (conn) conn.close();
//     }
// });


router.post('/', async (req, res) => {
    
 

    let conn;
    try {
      conn = await mongoClient.connect(process.env.DBURL, {
        useNewUrlParser: true,
      });
      const db = conn.db(process.env.DB);
      let users = await dataRtns.addOne(db, process.env.USERCOLLECTION);
      res.send(users);
    } catch (err) {
      console.log(err.stack);
      res.status(500).send('get all users failed - internal server error');
    } finally {
      if (conn) conn.close();
    }
});


router.put('/', async (req, res) => {
    
    

    let conn;
    try {
      conn = await mongoClient.connect(process.env.DBURL, {
        useNewUrlParser: true,
      });
      const db = conn.db(process.env.DB);
      let users = await dataRtns.findByName(name,db, process.env.USERCOLLECTION);
      res.send(users);
    } catch (err) {
      console.log(err.stack);
      res.status(500).send('get all users failed - internal server error');
    } finally {
      if (conn) conn.close();
    }
});


router.delete('/:name', async (req, res) => {
    
    let name = req.params.name;

    let conn;
    try {
      conn = await mongoClient.connect(process.env.DBURL, {
        useNewUrlParser: true,
      });
      const db = conn.db(process.env.DB);
      let users = await dataRtns.deleteOne(name,db, process.env.USERCOLLECTION);
      res.send(users);
    } catch (err) {
      console.log(err.stack);
      res.status(500).send('get all users failed - internal server error');
    } finally {
      if (conn) conn.close();
    }
});
    
module.exports = router;
