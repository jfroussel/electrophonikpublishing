import * as firebase from 'firebase';


const prodConfig = {
  apiKey: "AIzaSyDdQjllBvPhE2ftW3Zi8ma9iE3u7KlYCe8",
  authDomain: "react-coaching.firebaseapp.com",
  databaseURL: "https://react-coaching.firebaseio.com",
  projectId: "react-coaching",
  storageBucket: "react-coaching.appspot.com",
  messagingSenderId: "576718770934"
}

const devConfig = {
  apiKey: "AIzaSyDdQjllBvPhE2ftW3Zi8ma9iE3u7KlYCe8",
  authDomain: "react-coaching.firebaseapp.com",
  databaseURL: "https://react-coaching.firebaseio.com",
  projectId: "react-coaching",
  storageBucket: "react-coaching.appspot.com",
  messagingSenderId: "576718770934"
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {auth};
