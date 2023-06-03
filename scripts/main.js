const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.svg") {
    myImage.setAttribute("src", "images/neko.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.svg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozillaはかっこいいよ、${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozillaはかっこいいよ、${storedName}`;
}

myButton.onclick = () => setUserName();
