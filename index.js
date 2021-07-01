const arrowBtn = document.getElementById("arrow");
const share = document.getElementById("share");
const imgname = document.getElementById("img-name");
const profile = document.getElementById("profile");
const svg = document.getElementById("svg");

arrowBtn.addEventListener("click", function () {
  share.classList.toggle("share-toggle");
  profile.classList.toggle("profile-toggle");
  imgname.classList.toggle("img-name-toggle");
  arrowBtn.classList.toggle("arrow-toggle");
  svg.classList.toggle("svg-toggle");
});
