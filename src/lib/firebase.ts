import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQK6_TupUuvU-F90tX92OQgVAbDV2Aff8",
  authDomain: "website-portfolio-85366.firebaseapp.com",
  projectId: "website-portfolio-85366",
  storageBucket: "website-portfolio-85366.firebasestorage.app",
  messagingSenderId: "745648928864",
  appId: "1:745648928864:web:92d7ebd9ae1b87a42e6b05",
  measurementId: "G-GW94M74W6V"
};

// Initialize Firebase only if it hasn't been initialized already (important for Next.js SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
