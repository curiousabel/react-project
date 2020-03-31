const rtns = require('./fileroutines');
require('dotenv').config({
  path: 'D:/ReactProjects/project1/src/week3/fsexercises/jsexercises/.env',
});

const userFile = async () => {
  try {
    let fileStats = await rtns.userJSONStatsPromise(process.env.USERJSON);
    if (!fileStats) {
      users = [];
      let rawData = await rtns.readFileFromFSPromise(process.env.USERSRAW);
      rawData.split('\r\n').map((user) => {
        if (user.length > 0) {
          let userJson = { Username: user, Email: user + '@abc.com' };
          users.push(userJson);
        }
      });
      await rtns.writeFileToFSPromise('./user.json', JSON.stringify(users));
      console.log('user json file written to file system');
    } else {
      console.log('user.json already exists');
    }
  } catch (err) {
    console.log(err);
    console.log('user json file not written to file system');
  }
};
userFile();
