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
