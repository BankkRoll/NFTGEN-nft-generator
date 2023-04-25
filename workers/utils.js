const fs = require("fs").promises;

async function readDir(path) {
  try {
    const files = await fs.readdir(path);
    return files;
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
    return [];
  }
}

module.exports = { readDir };
