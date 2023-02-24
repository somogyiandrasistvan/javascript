window.addEventListener("load", init);
function init() {
  const tartalomElemEz = document.querySelectorAll(".tartalom");
  console.log(tartalomElemEz);
  const etelek = ["Pizza", "Hamburger", "Rántott hús"];

  const tartalomKepek = document.querySelectorAll(".kepek");
  etelKiiras(etelek, tartalomElemEz);
  const kepek = [
    "kep1.jpg",
    "kep2.jpg",
    "kep3.jpg"
  ];
  kepKiiras(kepek, tartalomKepek)
}

function etelKiiras(etelek, tartalomElemEz) {
  tartalomElemEz[0].innerHTML = "<ul> </ul>";
  const ulElem = document.querySelectorAll(".tartalom ul")[0];
  for (let index = 0; index < etelek.length; index++) {
    let etel = etelek[index];
    ulElem.innerHTML += "<li>" + etel + "</li>";
  }
}

function kepKiiras(kepek, tartalomKepek){
    for (let index = 0; index < kepek.length; index++) {
      let etelKep = kepek[index];
      tartalomKepek[0].innerHTML += "<img src="+etelKep+" alt="+index+">";
    }
}
