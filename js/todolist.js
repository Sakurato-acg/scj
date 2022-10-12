$(function () {
  load_items();
  // var todolist = [
  //   {
  //     title: "111",
  //     done: false,
  //   },
  //   {
  //     title: "222",
  //     done: false,
  //   },
  // ];

  $("#title").on("keydown", function (event) {
    if (event.key === "Enter") {
      // console.log("out");
      var local = getData();
      console.log(local);
      if (this.value != "") {
        var input_value = { title: this.value, done: false };
        local.push(input_value);
        saveData(local);
        load_items();
        this.value = "";
      } else {
        console.log("空");
      }
      var new_local = getData();
      console.log(new_local);
      console.log(new_local.length);
      console.log(input_value);
    }
  });

  $("ol ,ul").on("click", "a", function () {
    var data = getData();
    var index = $(this).attr("index");
    // console.log(index);
    data.splice(index, 1);
    // console.log(data);
    saveData(data);
    load_items();
  });

  $("ol,ul").on("click", "input", function () {
    var data = getData();
    var index = $(this).siblings("a").attr("index");
    console.log(data);
    console.log(index);
    data[index].done = $(this).prop("checked");
    saveData(data);
    load_items();
  });
  function getData() {
    var data = localStorage.getItem("todo");
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  function saveData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
  }
  function load_items() {
    var data = getData();
    $("ol").empty();
    $("ul").empty();
    var todocounts = 0;
    var donecounts = 0;
    $.each(data, function (i, n) {
      if (!n.done) {
        // console.log(n);
        $("#todolist").prepend(
          "<li>" +
            "<input type='checkbox' name='' id='' />" +
            "<p>" +
            n.title +
            "</p>" +
            "<a href='javascript:;' index=" +
            i +
            "></a>" +
            "</li>"
        );
        todocounts++;
      } else {
        $("#donelist").prepend(
          "<li>" +
            "<input type='checkbox' name='' id='' checked='checked'/>" +
            "<p>" +
            n.title +
            "</p>" +
            "<a href='javascript:;' index=" +
            i +
            "></a>" +
            "</li>"
        );
        donecounts++;
      }
    });
    $("#todocount").html(todocounts);
    $("#donecount").html(donecounts);
  }
});
