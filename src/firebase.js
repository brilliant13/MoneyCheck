import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAerrjIgkPckDBjo_WQqEMs0Z6tgyqOzT4",
    authDomain: "money-check-283c9.firebaseapp.com",
    projectId: "money-check-283c9",
    storageBucket: "money-check-283c9.firebasestorage.app",
    messagingSenderId: "89089408297",
    appId: "1:89089408297:web:f19deff9dd8c8f55de4b38"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export authentication module
export const auth = getAuth(app);