const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// unsubscribe when no longer needed
// unsubscribe();

//The above code is a common example for handling user authentication state changes in Firebase. However, there is a potential bug related to memory leaks if the unsubscribe function is never called.  The onAuthStateChanged method returns an unsubscribe function, which must be called when the component or function where it is used is unmounted or no longer needed. Failing to do so will lead to the listener continuously running, consuming resources even when the component is no longer active.