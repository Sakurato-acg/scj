document.addEventListener("DOMContentLoaded", function () {
  load_items();
  var i_list = document
    .querySelector(".list")
    .querySelector("div")
    .querySelectorAll("i");
  console.log(i_list);

  i_list.forEach((element) => {
    console.log(element);
    element.addEventListener("click", function () {
      console.log("dinaji");

      // element.parentElement.style.display = "none";
      var div = element.parentNode.firstChild;
      var upload = {
        url: div.href,
        img_src: div.href + "favicon.ico",
        uname: div.lastChild.innerText,
      };
      console.log(upload);
      var data = getdata();
      data.forEach(function (item, index, data) {
        if (
          item.url === upload.url ||
          item.img_src === upload.img_src ||
          item.uname === upload.uname
        ) {
          data.splice(index, 1);
        }
      });
      console.log(data);
      savedata(data);
      load_items();
      location.reload();
    });
  });
  function savedata(data) {
    localStorage.setItem("url", JSON.stringify(data));
  }

  function getdata() {
    var data = localStorage.getItem("url");
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  //
  function load_items() {
    var data = getdata();
    var par = document.querySelector(".list").querySelector(".row");
    var add = par.children;
    add = add[add.length - 1];
    var ads = document.querySelectorAll("#ads");
    console.log(ads);
    console.log("删除中.....");
    ads.forEach((element) => {
      par.removeChild(element);
    });

    console.log("加载中.....");
    data.forEach((element) => {
      var div = document.createElement("div");
      div.className = "col-4 col-s-3 col-m-2";
      div.setAttribute("id", "ads");
      var a = document.createElement("a");
      var img = document.createElement("img");
      var h4 = document.createElement("h4");
      var i = document.createElement("i");
      i.className = "fa fa-times";
      div.appendChild(a);
      a.appendChild(img);
      a.appendChild(h4);
      div.appendChild(i);
      a.setAttribute("href", element.url);
      img.setAttribute("src", element.img_src);
      h4.innerText = element.uname;

      par.insertBefore(div, add);
    });
  }
});
