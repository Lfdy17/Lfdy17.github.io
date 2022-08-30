//english
const englishKeybord = document.querySelector(".en");
const avail = document.querySelectorAll(".avil");

//persian setting
const farsiKeybord = document.querySelector(".fa");
farsiKeybord.classList.add("hide");
const availf = document.querySelectorAll(".avilf");

//working with select input

const select = document.querySelector("select");

var mainObj = new (function () {
  this.result;
  this.condition = () => {
    if (select.value === "persian") {
      farsiKeybord.classList.remove("hide");
      englishKeybord.classList.add("hide");
      let randNum = Math.floor(Math.random() * availf.length);
      availf.forEach((e) => {
        e.classList.remove("shake");
        e.classList.add("black");
      });
      this.result = availf[randNum];
    } else if (select.value === "english") {
      englishKeybord.classList.remove("hide");
      farsiKeybord.classList.add("hide");
      let randNum = Math.floor(Math.random() * avail.length);
      avail.forEach((e) => {
        e.classList.remove("shake");
        e.classList.add("black");
      });
      this.result = avail[randNum];
      console.log(this.result);
    }

    this.change = () => {
      select.addEventListener("change", () => {
        randomKeyword.totalWork();
      });
    };
  };
})();

const randomKeyword = new (function () {
  //create random Number and pick random key up
  this.randomKey;
  this.randomKeyGen = () => {
    mainObj.condition();
    this.randomKey = mainObj.result;
  };

  //add animation to selected key
  this.addClass = () => {
    this.randomKey.classList.add("shake");
  };

  //add right color to selected key
  this.rightColor = () => {
    if (this.randomKey.classList.contains("red")) {
      this.randomKey.style.color = "#dc143c";
    } else if (this.randomKey.classList.contains("beige")) {
      this.randomKey.style.color = "#ff7f50";
    } else if (this.randomKey.classList.contains("orange")) {
      this.randomKey.style.color = "#ff8c00";
    } else if (this.randomKey.classList.contains("yellow")) {
      this.randomKey.style.color = "#ffd701";
    } else if (this.randomKey.classList.contains("ivory")) {
      this.randomKey.style.color = "#f1e68c";
    }
  };

  //working with keybord to hande and jump other key when requested key pressed

  this.windo = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key.toUpperCase() === this.randomKey.innerHTML) {
        this.randomKey.classList.remove("shake");
        this.randomKey.style.color = "black";
        this.totalWork();
      }
    });
  };

  //OOP for this app is here
  this.totalWork = () => {
    this.randomKeyGen();
    this.addClass();
    this.rightColor();
    this.windo();
    mainObj.change();
  };
})();

document.addEventListener("DOMContentLoaded", randomKeyword.totalWork);
