// File Management Module

const fs = require('fs');
const path = require('path');

// Function to create a new directory
function createDirectory(dirName) {
  fs.mkdirSync(dirName);
}

// Function to delete a directory
function deleteDirectory(dirName) {
  fs.rmdirSync(dirName, { recursive: true });
}

// Function to create a new file
function createFile(fileName, fileContent) {
  fs.writeFileSync(fileName, fileContent);
}

// Function to read the content of a file
function readFile(fileName) {
  return fs.readFileSync(fileName, 'utf-8');
}

// Function to delete a file
function deleteFile(fileName) {
  fs.unlinkSync(fileName);
}

// Function to rename a file or directory
function rename(oldName, newName) {
  fs.renameSync(oldName, newName);
}

// Function to copy a file or directory
function copy(source, destination) {
  const sourceStat = fs.statSync(source);
  if (sourceStat.isDirectory()) {
    fs.mkdirSync(destination);
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      const sourcePath = path.join(source, file);
      const destPath = path.join(destination, file);
      copy(sourcePath, destPath);
    });
  } else {
    fs.copyFileSync(source, destination);
  }
}

// Export all the functions
module.exports = {
  createDirectory,
  deleteDirectory,
  createFile,
  readFile,
  deleteFile,
  rename,
  copy,
};
