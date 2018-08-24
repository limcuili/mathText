const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// function addSyllabus(moduleCode) {
//   var moduleRef = db.collection("module_details")
//   var moduleCode = document.getElementById("moduleCode").value;
//   var topic = document.getElementsByClassName("topic").value;
//   var syllabusArray = db.collection("module_details").doc(moduleCode).syllabus
//   console.log(db.collection("module_details").doc("1101").data().name)
//   syllabusArray.push(topic)
// }

function createModule() {
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
  var syllabusArray = new Array;
  var recommendedTextArray = new Array;

  if (syllabus_1 === "") {
    return true;
  } else {
    syllabusArray.push(syllabus_1);
  };

  if (syllabus_2 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_2);
  };

  if (syllabus_3 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_3);
  };

  if (syllabus_4 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_4);
  };

  if (syllabus_5 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_5);
  };

  if (syllabus_6 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_6);
  };

  if (syllabus_7 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_7);
  };

  if (syllabus_8 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_8);
  };

  if (syllabus_9 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_9);
  };

  if (syllabus_10 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_10);
  };

  if (syllabus_11 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_11);
  };

  if (syllabus_12 === "") {
    ;
  } else {
    syllabusArray.push(syllabus_12);
  };

  if (recommended_text_1 === "") {
    ;
  } else {
    recommendedTextArray.push(recommended_text_1);
  };

  if (recommended_text_2 === "") {
    ;
  } else {
    recommendedTextArray.push(recommended_text_2);
  };

  if (recommended_text_3 === "") {
    ;
  } else {
    recommendedTextArray.push(recommended_text_3);
  };

  if (recommended_text_4 === "") {
    ;
  } else {
    recommendedTextArray.push(recommended_text_4);
  };

  if (recommended_text_5 === "") {
    ;
  } else {
    recommendedTextArray.push(recommended_text_5);
  };

  if (recommended_text_6 === "") {
    ;
  } else {
    recommendedTextArray.push(recommended_text_6);
  };

  if (recommended_text_7 === "") {
    ;
  } else {
    recommendedTextArray.push(recommended_text_7);
  };

  db.collection("module_details").doc(code).set({
    code: code,
    name: name,
    lecturer: lecturer,
    prerequisites: prerequisites,
    assessment: assessment,
    structure: structure,
    syllabus: syllabusArray,
    recommended_texts: recommendedTextArray
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}
