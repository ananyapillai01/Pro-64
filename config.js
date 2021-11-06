import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyALF3ErsiaW-QOnJSl8gV_UCVvPka75hgs",
    authDomain: "dictionary-app-ae029.firebaseapp.com",
    projectId: "dictionary-app-ae029",
    storageBucket: "dictionary-app-ae029.appspot.com",
    messagingSenderId: "748928261449",
    appId: "1:748928261449:web:e3dad9b23cc4526081ce98"
  };    

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();