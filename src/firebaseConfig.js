

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuS-rOGOsyr_eK6mjntSL_8e025L1OIUY",
    authDomain: "college-projects-587b0.firebaseapp.com",
    projectId: "college-projects-587b0",
    storageBucket: "college-projects-587b0.appspot.com",
    messagingSenderId: "210494401057",
    appId: "1:210494401057:web:48620ed60285f41577d160",
    measurementId: "G-KL60CWBR86"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig.firebase);
const db = firebase.firestore();

export default db;
// npm install - g firebase - tools

// You can deploy now or later.To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

// Sign in to Google
// ->firebase login
// Initiate your project
// Run this command from your app's root directory:

// ->firebase init
// When you're ready, deploy your web app
// Put your static files(e.g.HTML, CSS, JS) in your app's deploy directory (the default is 'public'). Then, run this command from your app's root directory:

// ->firebase deploy
// After deploying, view your app at college - projects - 587b0.web.app