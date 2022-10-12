document.addEventListener("DOMContentLoaded", function () {
  load_items();
  var par = document.querySelector(".list").querySelector(".row");

  var add = par.children;
  add = add[add.length - 1];
  console.log(add);

  if (new Date().getHours() > 18) {
    add.children[0].style.display = "none";
    add.children[2].style.display = "block";
    console.log(add.children[2].style.display);
  } else {
    add.children[0].style.display = "block";
    add.children[2].style.display = "none";
  }

  var div = document.createElement("div");
  div.className = "col-4 col-s-3 col-m-2";
  div.setAttribute("id", "ads");
  var a = document.createElement("a");
  var img = document.createElement("img");
  var h4 = document.createElement("h4");
  var i = document.createElement("i");
  i.className = "fa fa-times";
  var addInfo = document.querySelector("#addInfo");
  var btns = addInfo.querySelectorAll("button");
  var inputs = addInfo.querySelectorAll("input");

  div.appendChild(a);
  a.appendChild(img);
  a.appendChild(h4);
  div.appendChild(i);
  add.addEventListener("click", as);
  function as() {
    addInfo.nextElementSibling.style.display = "block";
    addInfo.style.display = "block";

    addInfo.addEventListener("mousedown", function (e) {
      var x = e.pageX - addInfo.offsetLeft;
      var y = e.pageY - addInfo.offsetTop;
      var move_mouse = function (e) {
        addInfo.style.left = e.pageX - x + "px";
        addInfo.style.top = e.pageY - y + "px";
      };
      document.addEventListener("mousemove", move_mouse);
      document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", move_mouse);
      });
    });

    btns[0].addEventListener("mouseover", function () {
      if (inputs[0].value != "" && inputs[1].value != "") {
        btns[0].style.backgroundColor = "white";
        btns[0].style.color = "rgb(26, 115, 232)";
      }
    });
    btns[0].addEventListener("mouseout", function () {
      if (inputs[0].value != "" && inputs[1].value != "") {
        btns[0].style.backgroundColor = "#f1f3f4";
        btns[0].style.color = "#80868b";
      }
    });
    btns[1].addEventListener("click", function () {
      addInfo.nextElementSibling.style.display = "none";
      addInfo.style.display = "none";
    });
  }

  btns[0].addEventListener("click", function () {
    a.setAttribute("href", inputs[0].value);
    console.log(a);
    img.setAttribute("src", a.getAttribute("href") + "favicon.ico");
    console.log(img.src);
    h4.innerHTML = inputs[1].value;
    console.log(div);
    var url_data = {
      url: a.getAttribute("href"),
      img_src: img.getAttribute("src"),
      uname: h4.innerHTML,
    };
    console.log(111);
    console.log(url_data);
    var data = getdata();
    data.push(url_data);
    savedata(data);

    load_items();
    addInfo.nextElementSibling.style.display = "none";
    inputs[0].value = "";
    inputs[1].value = "";
    addInfo.style.display = "none";
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
  document.addEventListener("keyup", function (e) {
    if (e.key === "n") {
      as();
    }
  });

  var first = par.children[0];
  console.dir(first.children[0]);
  // a.addEventListener("click", function () {
  //   location.replace("https://dongmanhuayuan.myheartsite.com/");
  // });
});
