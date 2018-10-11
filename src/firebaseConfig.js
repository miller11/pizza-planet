import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAj3z910r7XizRS48PMVpxzXuimQleuP88",
  authDomain: "pizza-planet-3d8ad.firebaseapp.com",
  databaseURL: "https://pizza-planet-3d8ad.firebaseio.com",
  projectId: "pizza-planet-3d8ad",
  storageBucket: "pizza-planet-3d8ad.appspot.com",
  messagingSenderId: "553595264229"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
export const  dbOrdersRef = db.ref('orders');
