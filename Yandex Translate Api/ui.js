function UI() {
  this.outputImage = document.getElementById("outputImage");
  this.outputLanguage = document.getElementById("outputLanguage");
  this.outputWord = document.getElementById("outputWord");

  this.languageList = document.getElementById("language");
}

UI.prototype.changeUI = function () {
  // arayuz degısıklıgı
  this.outputImage.src = `images/${this.languageList.value}.png`; // resımlerıdınamık olarak degıstırme secılen resımlerı yanı.
  this.outputLanguage.innerHTML = this.languageList.options[
    this.languageList.selectedIndex
  ].textContent;
  // console.log(this.languageList.options[this.languageList.selectedIndex].textContent);
};
UI.prototype.displayTranslate = function (word) {
  this.outputWord.textContent = word;
};
