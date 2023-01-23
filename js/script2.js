// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, set, onValue, remove, push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://webapp-977c7-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyCk-3bxcydbANhbWQZs682lfIFV8B6e19I",
  authDomain: "webapp-977c7.firebaseapp.com",
  projectId: "webapp-977c7",
  storageBucket: "webapp-977c7.appspot.com",
  messagingSenderId: "199299128594",
  appId: "1:199299128594:web:b6565d60127fa38df8e7cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase(app);

console.log(db);

function writeUserData() {
    
    set(ref(db, 'Ali'), {
      message:"hello world"
    });
  }

  writeUserData();



  

  onValue(ref(db,"Ali"), (snapshot) => {
    const data = snapshot.val();
    alert(data.message)
    document.body.innerHTML=data.message;
  },{
    onlyOnce:true
  }
  );

  onValue(ref(db,"/"), (snapshot) => {
    snapshot.forEach((childSnapshot)=>{
    alert(data.message)
    const childKey= childSnapshot.key;
    const childData= childSnapshot.val
    console.log(childKey,childData);
    })
  },{
    onlyOnce:true
  }
  );