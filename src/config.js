import firebase from 'firebase'

export const appName = 'advreact-984ea'

export const firebaseConfig = {
  apiKey: "AIzaSyAlmEBqU5tbvtj5F-x_8QiJ7NTftsvXHWU",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "386678898495",
  appId: "1:386678898495:web:7ad325412d40e9e2"
};

export const app = firebase.initializeApp(firebaseConfig)
export default app