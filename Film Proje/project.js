const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody =document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");

// UI objesını başlatma
const ui = new UI();

//Storage objesı uret
const storage = new Storage();

// Tğm evenleri yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films=storage.getFilmsFromStorage();
    ui.loadAllFilms(films);

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
    ui.displayMessages("Tüm Alanları doldurun..", "danger");
  } else {
    // yenifilm
    const newFilm = new Film(title, director, url);
    storage.addFilmToStorage(newFilm); // storageye filmekleme
    ui.addFilmToUI(newFilm); //arayuze fılm ekleme
    ui.displayMessages("Film Başarıyla Eklendi...", "success");
  }

  //Clear
  ui.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e){ // sayfa yenılendıgındekı kısımdan sılme storage
  // console.log(e.target);
  if(e.target.id === "delete-film"){
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    ui.displayMessages("Silme İşlemi Başarılı...","success");
  }
}
function clearAllFilms(){
  if(confirm("Emin misiniz ?")){
  ui.clearAllFilmsFromUI();
  storage.clearAllFilmsFromStorage();
  }
}
