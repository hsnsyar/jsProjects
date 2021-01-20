const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody =document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");



// Tğm evenleri yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films=Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);

  });
  cardbody.addEventListener("click",deleteFilm);
  clear.addEventListener("click",clearAllFilms);
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  console.log(director);

  if (title === "" || director === "" || url === "") {
    //hata
    UI.displayMessages("Tüm Alanları doldurun..", "danger");
  } else {
    // yenifilm
    const newFilm = new Film(title, director, url);
    Storage.addFilmToStorage(newFilm); // storageye filmekleme
    UI.addFilmToUI(newFilm); //arayuze fılm ekleme
    UI.displayMessages("Film Başarıyla Eklendi...", "success");
  }

  //Clear
  UI.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e){ // sayfa yenılendıgındekı kısımdan sılme storage
  // console.log(e.target);
  if(e.target.id === "delete-film"){
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    UI.displayMessages("Silme İşlemi Başarılı...","success");
  }
}
function clearAllFilms(){
  if(confirm("Emin misiniz ?")){
  UI.clearAllFilmsFromUI();
  Storage.clearAllFilmsFromStorage();
  }
}
