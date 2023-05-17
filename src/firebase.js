import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDIOzesd1mLridebnV2tr-ao0_YlbohUq8",
    authDomain: "todo-app-65ad3.firebaseapp.com",
    projectId: "todo-app-65ad3",
    storageBucket: "todo-app-65ad3.appspot.com",
    messagingSenderId: "19929761049",
    appId: "1:19929761049:web:a9a8987ffbf5f002eb3188"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{db};