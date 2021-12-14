import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7WmbWTUkwxvwiYq63AtiuVXdb2bZ7M6w",
  authDomain: "crm-inforsys.firebaseapp.com",
  projectId: "crm-inforsys",
  storageBucket: "crm-inforsys.appspot.com",
  messagingSenderId: "783448505353",
  appId: "1:783448505353:web:7c05e811153deaaa5f4cd8"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// intalado o firebase: 8.6.5

/* Corrigir erro firebase:

Step 1

I updated the npm.
npm install -g npm@next OR npm install -g npm@latest

Step 2

I updated the node js
https:'//nodejs.org/dist/v16.8.0/node-v16.8.0-x64.msi'

Step 3

When running the npm i command with powershell, I encountered this problem
"To address all issues (including breaking changes), run: npm audit fix --force "

Step 4

Then I run this code npm audit fix --force

Final step

Finally, I run the program with the command npm start
Fortunately, my problem was solved. */