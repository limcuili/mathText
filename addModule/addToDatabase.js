const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function createModule() {
  var moduleRef = db.collection("module_details")
  var code = document.getElementById("code").value;
  var name = document.getElementById("name").value;
  var lecturer = document.getElementById("lecturer").value;
  var prerequisites = document.getElementById("prerequisites").value;
  var assessment = document.getElementById("assessment").value;
  var structure = document.getElementById("structure").value;
  var syllabus_1 = document.getElementById("syllabus_1").value;
  var syllabus_2 = document.getElementById("syllabus_2").value;
  var syllabus_3 = document.getElementById("syllabus_3").value;
  var syllabus_4 = document.getElementById("syllabus_4").value;
  var syllabus_5 = document.getElementById("syllabus_5").value;
  var syllabus_6 = document.getElementById("syllabus_6").value;
  var syllabus_7 = document.getElementById("syllabus_7").value;
  var syllabus_8 = document.getElementById("syllabus_8").value;
  var syllabus_9 = document.getElementById("syllabus_9").value;
  var syllabus_10 = document.getElementById("syllabus_10").value;
  var syllabus_11 = document.getElementById("syllabus_11").value;
  var syllabus_12 = document.getElementById("syllabus_12").value;
  var recommended_text_1 = document.getElementById("recommended_text_1").value;
  var recommended_text_2 = document.getElementById("recommended_text_2").value;
  var recommended_text_3 = document.getElementById("recommended_text_3").value;
  var recommended_text_4 = document.getElementById("recommended_text_4").value;
  var recommended_text_5 = document.getElementById("recommended_text_5").value;
  var recommended_text_6 = document.getElementById("recommended_text_6").value;
  var recommended_text_7 = document.getElementById("recommended_text_7").value;
  moduleRef.doc(code).set({
    code: code,
    name: name,
    lecturer: lecturer,
    prerequisites: prerequisites,
    assessment: assessment,
    structure: structure,
    syllabus: [syllabus_1, syllabus_2, syllabus_3, syllabus_4, syllabus_5, syllabus_6, syllabus_7, syllabus_8, syllabus_9, syllabus_10, syllabus_11, syllabus_12],
    recommended_texts: [recommended_text_1, recommended_text_2, recommended_text_3, recommended_text_4, recommended_text_5, recommended_text_6, recommended_text_7]
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}
