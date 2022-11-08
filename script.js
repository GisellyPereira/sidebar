const btn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.bx-buscar');
const logOut = document.querySelector('.log-out');


btn.onclick =function(){
  sidebar.classList.toggle('active');
}

searchBtn.onclick =function(){
  sidebar.classList.toggle('active');
}

logOut.onclick =function(){
  sidebar.classList.toggle('active');
}



