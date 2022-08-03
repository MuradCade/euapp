// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_jHvf63wGirKO3xtR4rr0BiuN_-kBPvQ",
  authDomain: "euapp-1c4c4.firebaseapp.com",
  projectId: "euapp-1c4c4",
  storageBucket: "euapp-1c4c4.appspot.com",
  messagingSenderId: "676094577750",
  appId: "1:676094577750:web:0c6878cd9209307b463ff7"
};

let app;
if(firebase.apps.length === 0){
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};