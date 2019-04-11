const functions = require('firebase-functions');
const firebase = require('firebase-admin');

firebase.initializeApp(functions.config().firebase);

const database = firebase.database();

exports.createUserAccount = functions.auth.user().onCreate(user => {
	const {displayName: name, uid, email, photoURL} = user;
	const username = email.substring(0,email.indexOf('@'));

	const newUserRef = database.ref().child(`users/${uid}/info`);
	newUserRef.set({
		name: name,
		email: email,
		photoUrl: photoURL,
		username: username,
		uid: uid,
		website:''
	});

	database.ref().child(`usernames/`).update({
		[uid]:username
	})

	return
});