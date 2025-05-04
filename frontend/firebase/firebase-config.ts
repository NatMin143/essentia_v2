import { initializeApp , } from "firebase/app";
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCtpC9ZT-VsfFc7TCfWARK4vxeLDD-E0O0",
    authDomain: "essentia-dc271.firebaseapp.com",
    projectId: "essentia-dc271",
    storageBucket: "essentia-dc271.firebasestorage.app",
    messagingSenderId: "979818049703",
    appId: "1:979818049703:web:deafff76ffb4c66639ab82",
    measurementId: "G-3EQP5V4KJ7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
