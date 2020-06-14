var main = document.getElementById("main");
var table = document.createElement("TABLE");
var caption = document.createElement("caption");

caption.innerHTML = "My WishList";
table.appendChild(caption);

var tr = document.createElement("TR");
var th = document.createElement("TH");

var tn = document.createTextNode("Wish Title");
th.appendChild(tn);
tr.appendChild(th);

th = document.createElement("TH");
tn = document.createTextNode("Expected Date");
th.appendChild(tn);
tr.appendChild(th);

th = document.createElement("TH");
tn = document.createTextNode("Your wish will come true after xD");
th.appendChild(tn);
tr.appendChild(th);

th = document.createElement("TH");
tn = document.createTextNode("Remove");
th.appendChild(tn);
tr.appendChild(th);

table.appendChild(tr);
main.appendChild(table);




var form = document.getElementById("form");

var wishTitles = new Array();
var wishDates = new Array();
var years = new Array();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var wishTitle = event.target.wishTitle.value;
    var wishDate = event.target.wishDate.value;
    var year = Math.floor(Math.random() * 99) + 1

    wishTitles.push(wishTitle);
    wishDates.push(wishDate);
    years.push(year);

    localStorage.setItem("wishTitles", JSON.stringify(wishTitles));
    localStorage.setItem("wishDates", JSON.stringify(wishDates));
    localStorage.setItem("years", JSON.stringify(years));

    var storedwishTitles = JSON.parse(localStorage.getItem("wishTitles"));
    var storedwishDates = JSON.parse(localStorage.getItem("wishDates"));
    var storedyears = JSON.parse(localStorage.getItem("years"));

    while(table.lastChild)
        {
            table.removeChild(table.lastChild);
        }

        table.appendChild(caption);

        var tr = document.createElement("TR");
        var th = document.createElement("TH");

        var tn = document.createTextNode("Wish Title");
        th.appendChild(tn);
        tr.appendChild(th);

        th = document.createElement("TH");
        tn = document.createTextNode("Expected Date");
        th.appendChild(tn);
        tr.appendChild(th);

        th = document.createElement("TH");
        tn = document.createTextNode("Your wish will come true after xD");
        th.appendChild(tn);
        tr.appendChild(th);

        th = document.createElement("TH");
        tn = document.createTextNode("Remove");
        th.appendChild(tn);
        tr.appendChild(th);

        table.appendChild(tr);


    for (i in storedwishTitles) {

        var tr = document.createElement("TR");
        var td = document.createElement("TD");
        var tn = document.createTextNode(storedwishTitles[i]);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement("TD");
        tn = document.createTextNode(storedwishDates[i]);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement("TD");
        tn = document.createTextNode(storedyears[i]);
        td.appendChild(tn);
        tr.appendChild(td);


        table.appendChild(tr);
    }


    /*var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var tn = document.createTextNode(wishTitle);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement("TD");
    tn = document.createTextNode(wishDate);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement("TD");
    tn = document.createTextNode(year);
    td.appendChild(tn);
    tr.appendChild(td);


    table.appendChild(tr);*/
});

