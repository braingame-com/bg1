import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from 'firebase/auth';
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCJvabEjuwLlMUXFA4mjtz6xmTGnL6Grmg',
  authDomain: 'brain-game-77a02.firebaseapp.com',
  projectId: 'brain-game-77a02',
  storageBucket: 'brain-game-77a02.appspot.com',
  messagingSenderId: '531003853441',
  appId: '1:531003853441:web:993fdcba69c53ebf17db80',
  measurementId: 'G-ZZBHWDF4FZ',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
