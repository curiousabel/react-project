// currently experimental but should be mainstream soon
const fsp = require('fs').promises;

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

const userJSONStatsPromise = async (fname) => {
  let stats;
  try {
    stats = await fsp.stat(fname);
  } catch (error) {
    error.code === 'ENOENT' // doesn't exist
      ? console.log(`${process.env.USERJSON}  does not exist`)
      : console.log(error.message);
  }
  return stats;
};

module.exports = {
  readFileFromFSPromise,
  writeFileToFSPromise,
  userJSONStatsPromise,
};
