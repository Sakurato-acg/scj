document.addEventListener("DOMContentLoaded", function () {
  load_items();

  var title = this.documentElement.querySelector("#title");
  title.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var local = getData();
      local = Array.from(local);
      console.log(local);
      if (this.value != "") {
        var input_value = { title: this.value, done: false };
        local.push(input_value);
        savaData(local);
        load_items();
        this.value = "";
      } else {
        console.log("空");
      }
    }
  });

  var ol = this.documentElement.querySelector("ol");
  var ul = this.documentElement.querySelector("ul");
  //
  ol.addEventListener("click", function (e) {
    var data = getData();

    // console.log(e.target.nodeName === "A");
    if (e.target.nodeName === "A") {
      var index = e.target.getAttribute("index");
      // console.log(index);
      data.splice(index, 1);
      // console.log(data);

      savaData(data);
      load_items();
    } else if (e.target.nodeName === "INPUT") {
      var data = getData();
      var index = e.target.nextSibling.nextSibling.getAttribute("index");
      data[index].done = e.target.checked;
      console.log(data);
      savaData(data);
      load_items();
    }
  });
  //
  ul.addEventListener("click", function (e) {
    var data = getData();

    // console.log(e.target.nodeName === "A");
    if (e.target.nodeName === "A") {
      var index = e.target.getAttribute("index");
      // console.log(index);
      data.splice(index, 1);
      // console.log(data);

      savaData(data);
      load_items();
    } else if (e.target.nodeName === "INPUT") {
      var data = getData();
      var index = e.target.nextSibling.nextSibling.getAttribute("index");
      data[index].done = e.target.checked;
      console.log(data);
      savaData(data);
      load_items();
    }
  });
  function getData() {
    var data = localStorage.getItem("todo");
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  function savaData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
  }

  function load_items() {
    var data = getData();
    var ol = document.querySelector("ol");
    // console.log(ol);
    var ul = document.querySelector("ul");
    ol.innerHTML = "";
    // console.log(ol);
    ul.innerHTML = "";
    var todocounts = 0;
    var donecounts = 0;

    var cc = 0;

    data = Array.from(data);

    data.forEach((element) => {
      if (!element.done) {
        var li = document.createElement("li");
        li.innerHTML =
          "<input type='checkbox' name='' id=''/>" +
          "<p>" +
          element.title +
          "</p>" +
          "<a href='javascript:;' index=" +
          cc +
          ">-</a>";
        ol.insertBefore(li, ol.children[0]);
        todocounts++;
      } else {
        var li = document.createElement("li");
        li.innerHTML =
          "<input type='checkbox' name='' id='' checked='checked'/>" +
          "<p>" +
          element.title +
          "</p>" +
          "<a href='javascript:;' index=" +
          cc +
          ">-</a>";

        ul.insertBefore(li, ul.children[0]);
        donecounts++;
      }
      cc++;
      document.querySelector("#todocount").innerHTML = todocounts;
      document.querySelector("#donecount").innerHTML = donecounts;
    });
    if (data.length == 0) {
      document.querySelector("#todocount").innerHTML = 0;
      document.querySelector("#donecount").innerHTML = 0;
    }
  }
});
