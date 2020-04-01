function search(event) {
  event.preventDefault();

  var username = input.value;
  console.log(username);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.github.com/users/${username}`);
  xhr.onload = function() {
    if (this.status == 200) {
    var data = JSON.parse(xhr.response);
    outputUi(data);
    } else {
    console.log("user not found");
    errorPage();
    }
  };
  xhr.send();
}
let input = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit", search);

let output = document.querySelector(".output");


function outputUi(data) {
  output.innerHTML = "";
  let box = document.createElement("div");
  box.classList.add("outputBox");
  let imgdiv = document.createElement("div");
  imgdiv.classList.add("imgbox");
  let img = document.createElement("img");
  img.setAttribute("src", data.avatar_url);
  imgdiv.append(img);
  let ul = document.createElement("ul");
  ul.classList.add("list");
  let user = document.createElement("li");
  user.classList.add("name");
  user.innerText = `Username : ${data.login}`;
  let id = document.createElement("li");
  id.classList.add("userid");
  id.innerText = `ID : ${data.id}`;
  let bio = document.createElement("li");
  bio.classList.add("userbio");
  bio.innerText = `BIO : ${data.bio}`;
  ul.append(user, id, bio);
  box.append(imgdiv, ul);
  output.append(box);
}
function errorPage() {
  output.innerHTML = "";
  let found = document.createElement("p");
  found.classList.add("error");
  found.innerText = "User was not found! :(";
  output.append(found);
}
