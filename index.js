const arrow = document.getElementById("arrow");

function desktop() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    arrow.addEventListener("click", function () {
      let profile = document.getElementById("profile");
      let img = document.getElementById("img-name");
      let svg = document.getElementById("svg");
      let share = document.getElementById("share");
      let arrow = document.getElementById("arrow");

      if (img.style.display === "flex") {
        profile.style.backgroundColor = "hsl(217, 19%, 35%)";
        img.style.display = "none";
        share.style.display = "flex";
        svg.style.fill = "hsl(210, 46%, 95%)";
        arrow.style.backgroundColor = "hsl(214, 17%, 51%)";
      } else {
        profile.style.backgroundColor = "#FFFFFF";
        img.style.display = "flex";
        share.style.display = "none";
        svg.style.fill = "#545864";
        arrow.style.backgroundColor = "#edf2f8";
      }
    });
  } else {
    arrow.addEventListener("click", function () {
      let profile = document.getElementById("profile");
      let img = document.getElementById("img-name");
      let svg = document.getElementById("svg");
      let share = document.getElementById("share");
      let arrow = document.getElementById("arrow");

      if (share.style.display === "none") {
        profile.style.backgroundColor = "#FFFFFF";
        img.style.display = "flex";
        share.style.display = "flex";
        share.style.backgroundColor = "hsl(217, 19%, 35%)";
        svg.style.fill = "hsl(210, 46%, 95%)";
        arrow.style.backgroundColor = "hsl(214, 17%, 51%)";
      } else {
        profile.style.backgroundColor = "#FFFFFF";
        share.style.display = "none";
        img.style.display = "flex";
        svg.style.fill = "#545864";
        arrow.style.backgroundColor = "#edf2f8";
      }
    });
  }
}

desktop();

window.addEventListener("resize", desktop);
