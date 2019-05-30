import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAq5RLhd8Nj7kCFKQgofXx-OzqKiEB3fpg",
	authDomain: "histamine-intolerance-app.firebaseapp.com",
	databaseURL: "https://histamine-intolerance-app.firebaseio.com",
	projectId: "histamine-intolerance-app",
	storageBucket: "histamine-intolerance-app.appspot.com",
	messagingSenderId: "723065240315",
	appId: "1:723065240315:web:5179e3fc95581f6a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;