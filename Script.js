 let menuList = document.getElementById("lists")
 let openMenu = document.getElementById("menuopen")
 let cross = document.getElementById("cross")

 openMenu.addEventListener("click",() =>{
    // menuList.style.opacity = "100%";
    openMenu.style.display = "none"
    menuList.style.opacity = "100%"
      cross.style.display = "block"
 })
  cross.addEventListener("click",() =>{

         menuList.style.opacity = "0%"
         openMenu.style.display = "block"
         cross.style.display = "none"
  })