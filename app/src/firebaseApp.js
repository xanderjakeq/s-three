import * as firebase from 'firebase'

var config = {
	apiKey: "AIzaSyBIWAxJApdxrp8A2SlJ3y_p_lt4tNWFWJA",
	authDomain: "sthree-tlc.firebaseapp.com",
	databaseURL: "https://sthree-tlc.firebaseio.com",
	projectId: "sthree-tlc",
	storageBucket: "sthree-tlc.appspot.com",
	messagingSenderId: "216000644075"
};

export default firebase.initializeApp(config);