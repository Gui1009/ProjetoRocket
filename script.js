function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  //}
  
  //pegar a tag img
const img = document.querySelector("#profile img")

//substituição de imagem
if(html.classList.contains('light')){
  img.setAttribute('src', './assets/avatar-light.png')
  img.setAttribute('alt', ' Foto mayk Brito em um fundo azul com rosa, com oculos preto, sorrindo como sempre e camisa preta')
} else{
 img.setAttribute("src", "./assets/avatar.png")
 img.setAttribute("alt",' foto do mayk brito sorrindo com barba e oculos, usando camisa preta em um fundo amarelo')
}
}