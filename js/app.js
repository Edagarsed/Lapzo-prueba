

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-left");//replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-left", "bx-menu");//replacing the iocns class
  }
}


// TABS


const liItems     = document.querySelectorAll('.li')
const bloqueItems = document.querySelectorAll('.bloque')

// CLICK en li
// TODOS .li quitar la clase activo
// TODOS .bloque quitar la clase activo
// .li con la posicion se añadimos la clase activo
// .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
liItems.forEach((li, index) => {
  // Asignando un CLICK a liItem
  li.addEventListener("click", () => {
    // Quitando la clase activo a todos los li
    liItems.forEach((li) => li.classList.remove("activo"));
    // Quitando la clase activo a todos los bloques
    bloqueItems.forEach((bloque) => bloque.classList.remove("activo"));
    // En el li que hemos click le añadimos la clase activo
    li.classList.add("activo");

    // En el bloque con la misma posición le añadimos la clase activo
    // Son equivalentes:
    // 1.
    bloqueItems[index]?.classList.add("activo");
    // 2.
    // if (bloqueItems[index]) {
    //   bloqueItems[index].classList.add("activo");
    // }
  });

  
});

