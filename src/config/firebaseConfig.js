import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWfLGmzmgXjrQG5lRoq0PV2-ciZxt--N0",
  authDomain: "test-c2dd7.firebaseapp.com",
  databaseURL:
    "https://test-c2dd7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-c2dd7",
  storageBucket: "test-c2dd7.appspot.com",
  messagingSenderId: "241865523349",
  appId: "1:241865523349:web:699e69ae660a553ee59b9c",
  measurementId: "G-JNX6TZQQHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Function to fetch top rating movies
export const fetchnewMovies = async () => {
  const moviesRef = ref(db, "newMovies");
  const snapshot = await get(moviesRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No data available");
    return [];
  }
};
