// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBixisidBjf6H7MqNCv0TSwmlCDH5Ec48",
  authDomain: "planechase-387e0.firebaseapp.com",
  projectId: "planechase-387e0",
  storageBucket: "planechase-387e0.appspot.com",
  messagingSenderId: "870954806270",
  appId: "1:870954806270:web:49ba57c06413bfd2512eaf",
  measurementId: "G-6VG643JK7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const updateCurrentCardIndex = (newIndex) => {
  set(ref(database, 'currentCardIndex'), newIndex);
};

export const updateCardBase = (cardArray) => {
    set(ref(database, 'cardBase'), cardArray);
  };
  
  export const onCurrentCardIndexChange = (callback) => {
    const cardIndexRef = ref(database, 'currentCardIndex');
    return onValue(cardIndexRef, (snapshot) => {
      const index = snapshot.val();
      callback(index);
    });
  };
  
  export const onCardBaseChange = (callback) => {
    const cardBaseRef = ref(database, 'cardBase');
    return onValue(cardBaseRef, (snapshot) => {
      const cards = snapshot.val();
      callback(cards);
    });
  };


// const firebaseConfig = {
//     apiKey: "AIzaSyBBixisidBjf6H7MqNCv0TSwmlCDH5Ec48",
//     authDomain: "planechase-387e0.firebaseapp.com",
//     projectId: "planechase-387e0",
//     storageBucket: "planechase-387e0.appspot.com",
//     messagingSenderId: "870954806270",
//     appId: "1:870954806270:web:49ba57c06413bfd2512eaf",
//     measurementId: "G-6VG643JK7B"
//   };