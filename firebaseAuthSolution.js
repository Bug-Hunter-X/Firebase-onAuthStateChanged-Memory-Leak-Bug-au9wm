import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseConfig'; //Import your firebase configuration

let unsubscribe;

function handleAuthStateChange(){
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/auth/web/user-properties
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

function cleanupAuthStateChange(){
  if(unsubscribe){
    unsubscribe();
  }
}

//In a React component, you would call handleAuthStateChange() in componentDidMount and cleanupAuthStateChange() in componentWillUnmount