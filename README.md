# Firebase onAuthStateChanged Memory Leak Bug

This repository demonstrates a common bug related to Firebase's `onAuthStateChanged` function and how to properly handle it to prevent memory leaks.

The issue arises when the unsubscribe function returned by `onAuthStateChanged` is not called when the component or function using it is unmounted or no longer required. This keeps the listener active, consuming resources and potentially causing performance issues.

The `firebaseAuthBug.js` file contains the code exhibiting the bug. The `firebaseAuthSolution.js` file shows the corrected code with the `unsubscribe()` function called appropriately.

## How to Reproduce

1. Clone this repository.
2. Install Firebase:
   ```bash
   npm install firebase
   ```
3. Configure your Firebase project and credentials.
4. Run the `firebaseAuthBug.js` file. You'll see that the listener continues to run even if the component is unmounted (simulated in this case).
5. Compare with the corrected version in `firebaseAuthSolution.js`.

## Solution

The solution is to always call the `unsubscribe()` function when the listener is no longer needed to release the resources and prevent the memory leak.  Ensure this happens in componentWillUnmount lifecycle method in React or equivalent in other frameworks.