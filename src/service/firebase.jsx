// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCKFnaN_Y9I3RF5goOg9VXWT6rgQb3V7Jg",
authDomain: "coder-react-c12e1.firebaseapp.com",
projectId: "coder-react-c12e1",
storageBucket: "coder-react-c12e1.firebasestorage.app",
messagingSenderId: "145750427990",
appId: "1:145750427990:web:f140189153a865d5806ef7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);