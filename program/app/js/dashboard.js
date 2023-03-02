// Import necessary libraries
const flask = require('flask');
const pyautogui = require('pyautogui');
const opencv = require('opencv');

// Define the dashboard function
function dashboard() {
  // Display welcome message
  console.log("Welcome to your dashboard!");

  // Prompt user to choose an action
  const action = prompt("What would you like to do today? Choose from the following options: \n1. Post on social media\n2. Create images or edit video content\n3. Create a new program\n4. Deploy a program\n5. Machine learning\n6. Organize files and folders\n7. Install or uninstall software applications\n8. Create or edit documents and presentations\n9. Download or upload files and documents\n10. Scan for viruses and malware\n11. Create and manage backups\n12. Basic computer troubleshooting and maintenance\n13. Create graphics and designs for social media, websites, or applications\n14. Create and publish mobile applications for iOS or Android devices\n15. Other tasks related to computer and internet use");

  // Depending on the user's choice, call the corresponding function
  switch (action) {
    case '1':
      flask.postOnSocialMedia();
      break;
    case '2':
      flask.createOrEditMediaContent();
      break;
    case '3':
      flask.createProgram();
      break;
    case '4':
      flask.deployProgram();
      break;
    case '5':
      flask.machineLearning();
      break;
    case '6':
      flask.organizeFilesAndFolders();
      break;
    case '7':
      flask.installOrUninstallSoftware();
      break;
    case '8':
      flask.createOrEditDocument();
      break;
    case '9':
      flask.downloadOrUploadFiles();
      break;
    case '10':
      flask.scanForViruses();
      break;
    case '11':
      flask.createAndManageBackups();
      break;
    case '12':
      flask.computerTroubleshooting();
      break;
    case '13':
      flask.createGraphicsAndDesigns();
      break;
    case '14':
      flask.createAndPublishMobileApps();
      break;
    case '15':
      flask.otherComputerTasks();
      break;
    default:
      console.log("Invalid option selected. Please choose a number from 1 to 15.");
  }
}

// Export the dashboard function
module.exports = {
  dashboard
};
