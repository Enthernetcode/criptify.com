const isLoggedIn = sessionStorage.getItem('user'));
if (!isLoggedIn) {
  window.location.replace('login.html');
}
else  {
 //nothing xup
}
