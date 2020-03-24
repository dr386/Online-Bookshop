// JavaScript source code
function Search() {
    window.alert("Due to the database is under construction, search result will jump to Amazon.com instead");
}

function Skip() {
    location.href = "Main.html";
}

function myFunction() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("pause");

    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

function remember_me() {
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;

    if (x == "") {
        this.alert('Enter Username!');
    }
    else if (y == "") {
        this.alert('Enter Password!');
    }
    else {
        document.getElementById("form_container").style.display = "none";
        document.getElementById("login_success").style.display = "block";
    }
    localStorage.setItem("usernamemypage", x);
}

//NEXT PAGE LOAD, THE USERNAME WILL BE SHOWN IN THEIR FIELDS
function load_em() {
    document.getElementById("username").value = localStorage.getItem("usernamemypage"); //FILLS WITH "USERNAME" COOKIE
}

function load_him() {
    document.getElementById("load").innerHTML = "Welcome " + localStorage.usernamemypage + " !";
}