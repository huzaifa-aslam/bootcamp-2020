
 importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyASEhQLgs47Q0mDl2o6H6I78F4mMrA2gNw",
    authDomain: "notificationapp-83249.firebaseapp.com",
    databaseURL: "https://notificationapp-83249.firebaseio.com",
    projectId: "notificationapp-83249",
    storageBucket: "notificationapp-83249.appspot.com",
    messagingSenderId: "357560505122",
    appId: "1:357560505122:web:0e83dc20eb5e8d614b4b7b",
    measurementId: "G-112RZX70PV"
  };
  firebase.initializeApp(firebaseConfig)
  firebase.messaging();