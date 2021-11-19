import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA1OqlT7aXTzBsLysrjvzwX3TkGUTFliB8",
  authDomain: "school-attendance-80bd3.firebaseapp.com",
  projectId: "school-attendance-80bd3",
  storageBucket: "school-attendance-80bd3.appspot.com",
  messagingSenderId: "1042116240003",
  appId: "1:1042116240003:web:d959e20f1911279a1fb1b6"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();


 

  