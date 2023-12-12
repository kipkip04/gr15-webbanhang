var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
 btn.onclick = function() {
 modal.style.display = "block";
}
span.onclick = function() {
modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}


var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];
 btn1.onclick = function() {
 modal1.style.display = "block";
}
span1.onclick = function() {
modal1.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal1) {
modal1.style.display = "none";
}
}







var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
 btn2.onclick = function() {
 modal2.style.display = "block";
}
span2.onclick = function() {
modal2.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal2) {
modal2.style.display = "none";
}
}


var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];
 btn3.onclick = function() {
 modal3.style.display = "block";
}
span3.onclick = function() {
modal3.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal3) {
modal3.style.display = "none";
}
}


function deleteImg(delBtn,previewImage1)
{
  document.getElementById(previewImage1).src="#";
  document.getElementById(delBtn).style.display="none";
}
function deleteImg2(delBtn2,previewImage2)
{
  document.getElementById(previewImage2).src="#";
  document.getElementById(delBtn2).style.display="none";
}
function deleteImg3(delBtn3,previewImage3)
{
  document.getElementById(previewImage3).src="#";
  document.getElementById(delBtn3).style.display="none";
}












// function chooseFile(fileInput) {
//   if (fileInput.files && fileInput.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//           $('#image').attr('src', e.target.result);
//       }
//       reader.readAsDataURL(fileInput.files[0]);
//   }
// }




function displayImage(input) {
    var file = input.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('previewImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
}
function displayImage1(input) {
    var file = input.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('previewImage1').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
}
function displayImage2(input) {
    var file = input.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('previewImage2').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
}
function displayImage3(input) {
    var file = input.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('previewImage3').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
}