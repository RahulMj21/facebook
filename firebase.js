import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwD0kJqdreKhRhLolbZ6BeS-yAbAIRDm8",
  authDomain: "fakezook.firebaseapp.com",
  projectId: "fakezook",
  storageBucket: "fakezook.appspot.com",
  messagingSenderId: "992978875293",
  appId: "1:992978875293:web:808a3b8dfbd26fdedd3574",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
