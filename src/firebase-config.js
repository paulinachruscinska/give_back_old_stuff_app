import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyB55MxmxUjRKyAOiTabFCAGuZobrp3XwIY",
    authDomain: "give-back-old-stuff-app.firebaseapp.com",
    projectId: "give-back-old-stuff-app",
    storageBucket: "give-back-old-stuff-app.appspot.com",
    messagingSenderId: "18185195791",
    appId: "1:18185195791:web:9bc385afa8b811168dee7a",
    measurementId: "G-E3HQ4JWK2C"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

