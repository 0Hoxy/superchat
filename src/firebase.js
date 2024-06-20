import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcSM02Js7gcByaJ-eOGCuwBDwTP-a26qM",
  authDomain: "superchat-0hoxy.firebaseapp.com",
  projectId: "superchat-0hoxy",
  storageBucket: "superchat-0hoxy.appspot.com",
  messagingSenderId: "983237654761",
  appId: "1:983237654761:web:780ec5edc598b9e7969878"
};

//파이어베이스
export const app = initializeApp(firebaseConfig);
//구글 로그인
export const googleAuth = new GoogleAuthProvider(app);
// Firebase 인증
export const auth = getAuth(app);
// Firestore 데이터베이스
export const db = getFirestore(app);