document.addEventListener("DOMContentLoaded", function () {
  var i_list = document
    .querySelector(".list")
    .querySelector("div")
    .querySelectorAll("i");
  console.log(i_list);

  i_list.forEach((element) => {
    element.addEventListener("click", function () {
      console.log("dinaji");
      element.parentElement.style.display = "none";
    });
  });
});
