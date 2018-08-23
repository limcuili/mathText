const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var moduleRef = db.collection("module_details");

var moduleContainer = document.getElementById("moduleContainer");
moduleContainer.innerHTML += "<div class='module'>" + "I can add something into the module container" + "</div>"
