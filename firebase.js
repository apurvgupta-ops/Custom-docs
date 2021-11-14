import firebase from "./firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCXsEC_Pcf-gtgM01jukZ0-GUnNwR6GtL0",
  authDomain: "custom-docs.firebaseapp.com",
  projectId: "custom-docs",
  storageBucket: "custom-docs.appspot.com",
  messagingSenderId: "660453768875",
  appId: "1:660453768875:web:093420544d10390a8101ee",
};

const app = if(!firebase.apps.length){

   firebase.initializeApp(firebaseConfig)
}

const db = app.firestore();
export { db };
