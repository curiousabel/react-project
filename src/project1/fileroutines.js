const request = require('request');
const fspp = require('fs').promises;

const fileStatPromise = (async = (fname) => {
    let stats;
  try {
    stats = await fsp.stat(fname);
  } catch (error) {
    error.code === 'ENOENT' // doesn't exist
      ? console.log('./user.json does not exist')
      : console.log(error.message);
  }
  return stats;
});

const getJSONFromWWWPromise = (url) => {};

const writeFileToFSPromise = async (fname, ...rawdata) => {
    let filehandle;
    try {
      let dataToWrite = '';
      dataToWrite = rawdata.map((element) => dataToWrite + element); // concatentate
      await fsp.writeFile(fname, dataToWrite); // returns promise
    } catch (err) {
      console.log(err);
    }
};

const readFileFromFSPromise = async (fname) => {
  let filehandle;
  let rawData;
  try {
    rawData = await fsp.readFile(fname); // returns promise
  } catch (error) {
    console.log(error);
  } finally {
    if (rawData !== undefined) return rawData.toString();
  }
};

module.exports = {
  fileStatPromise,
  getJSONFromWWWPromise,
  readFileFromFSPromise,
  writeFileToFSPromise,
};
