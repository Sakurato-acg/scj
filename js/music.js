document.addEventListener("DOMContentLoaded", function () {
  var music = this.documentElement.querySelector(".music");
  var btn = music.querySelector("#btn");
  console.log(btn);
  var check = false;
  btn.addEventListener("click", () => {
    // console.log(check);
    if (!check) {
      music.style.overflow = "visible";
      check = !check;
    } else {
      music.style.overflow = "hidden";
      check = !check;
    }
  });
});
