const fsP = require('fs').promises;
const axios = require("axios");


async function cat(path) {
  let contents = await fsP.readFile(path, "utf8");
  console.log(contents);
}

async function webCat(url) {
  let contents = await axios.get(url);
  console.log(contents);
}

const pathOrUrl = process.argv[2];

if (pathOrUrl.slice(0,4) === 'http') {
  webCat(pathOrUrl);
} else {
  cat(pathOrUrl);
}
