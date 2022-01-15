import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// const firebaseConfig = {
//     apiKey: "AIzaSyCLP2VGK5gQHQsNGO5Ubi71GHleoqlgUss",
//     authDomain: "decoration-3ff56.firebaseapp.com",
//     projectId: "decoration-3ff56",
//     storageBucket: "decoration-3ff56.appspot.com",
//     messagingSenderId: "25822985061",
//     appId: "1:25822985061:web:3ba951c35a803d87043f8c"
//   };
  // const firebaseConfig = {  apiKey: "AIzaSyC3eSrtFWmub-w2BcQ6o4YGMIddLt08Wno",  authDomain: "blog-app-7df1e.firebaseapp.com",  projectId: "blog-app-7df1e",  storageBucket: "blog-app-7df1e.appspot.com",  messagingSenderId: "361988733961",  appId: "1:361988733961:web:55ee717ccbe5189d340cd8"};
  
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCIGPJ_3R5pc1DM1S3b4Z4c_8EjDW8-Og8",
  //   authDomain: "decoration-a.firebaseapp.com",
  //   projectId: "decoration-a",
  //   storageBucket: "decoration-a.appspot.com",
  //   messagingSenderId: "470892743846",
  //   appId: "1:470892743846:web:3383ad4ba8d4576e33f867"
  // };
  // Your web app's Firebase configuration
 
    const firebaseConfig = {
      apiKey: "AIzaSyBeLx9MvpBu6YRkaIvReW0cKNwW6yfQmvQ",
      authDomain: "decoration-8a212.firebaseapp.com",
      projectId: "decoration-8a212",
      storageBucket: "decoration-8a212.appspot.com",
      messagingSenderId: "228341862046",
      appId: "1:228341862046:web:af626fa868e1165410b58f"
    };
    
// Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  
  const base = firebase.storage() ;
  const A = firebase.firestore();

  export  {base,A};