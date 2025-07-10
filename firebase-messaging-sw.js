importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAOJ4Ye2PmNA9DykjWX4hvFYhjKg0pZuQM",
  authDomain: "new-wala-app.firebaseapp.com",
  projectId: "new-wala-app",
  messagingSenderId: "443237566876",
  appId: "1:443237566876:web:your_app_id_here"
});

firebase.messaging();
