import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU0dDy4eAN0Mu1FfTSLKgTVo5MNUla2mI",
  authDomain: "ai-trip-b473c.firebaseapp.com",
  projectId: "ai-trip-b473c",
  storageBucket: "ai-trip-b473c.firebasestorage.app",
  messagingSenderId: "697485856909",
  appId: "1:697485856909:web:49bb6a18187baf055192c4",
  measurementId: "G-YT8F1QHYK9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 

