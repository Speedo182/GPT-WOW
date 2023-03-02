// This is the JavaScript code for the home page of the program

// Load the required modules
const fs = require('fs');
const os = require('os');
const path = require('path');
const { dialog } = require('electron').remote;

// Set the current directory as the home directory
const HOME_DIR = os.homedir();
process.chdir(HOME_DIR);

// Define the functions for file management
function createFile() {
  // Prompt the user to enter the name of the new file
  const fileName = prompt('Enter the name of the new file:');

  // If the user entered a name, create the file
  if (fileName) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFile(filePath, '', (err) => {
      if (err) {
        alert(`An error occurred while creating the file: ${err.message}`);
      } else {
        alert(`The file "${fileName}" has been created successfully.`);
      }
    });
  }
}

function deleteFile() {
  // Prompt the user to select the file to delete
  dialog.showOpenDialog({ properties: ['openFile'] }).then((result) => {
    if (!result.canceled) {
      const filePath = result.filePaths[0];
      fs.unlink(filePath, (err) => {
        if (err) {
          alert(`An error occurred while deleting the file: ${err.message}`);
        } else {
          alert(`The file "${path.basename(filePath)}" has been deleted successfully.`);
        }
      });
    }
  });
}

function renameFile() {
  // Prompt the user to select the file to rename
  dialog.showOpenDialog({ properties: ['openFile'] }).then((result) => {
    if (!result.canceled) {
      const oldPath = result.filePaths[0];

      // Prompt the user to enter the new name for the file
      const newName = prompt(`Enter the new name for the file "${path.basename(oldPath)}":`);
      if (newName) {
        const newPath = path.join(path.dirname(oldPath), newName);
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            alert(`An error occurred while renaming the file: ${err.message}`);
          } else {
            alert(`The file "${path.basename(oldPath)}" has been renamed to "${newName}" successfully.`);
          }
        });
      }
    }
  });
}

// Add event listeners to the buttons
document.getElementById('create-file-btn').addEventListener('click', createFile);
document.getElementById('delete-file-btn').addEventListener('click', deleteFile);
document.getElementById('rename-file-btn').addEventListener('click', renameFile);
