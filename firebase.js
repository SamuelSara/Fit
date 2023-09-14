import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrnGOpzGV4SVIvx-mV0o5Tpf79282UbO4",
    authDomain: "fitness-app-with-andy.firebaseapp.com",
    projectId: "fitness-app-with-andy",
    storageBucket: "fitness-app-with-andy.appspot.com",
    messagingSenderId: "569898230189",
    appId: "1:569898230189:web:c3ce49f07b1efa863b0124",
    measurementId: "G-JN38LFC2VY"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
