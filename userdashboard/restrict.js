// const isLoggedIn = sessionStorage.getItem('user'));
// if (!isLoggedIn) {
//  window.location.replace('login.html');
// }
// else  {
 //nothing xup
// }

//FUNCTION
            function getUsername(){
                 let keepLoggedIn = localStorage.getItem('keepLoggedIn')

                 if(keepLoggedIn == 'yes'){
                     currentUser = JSON.parse(localStorage.getItem('user'));
                 }else{
                      currentUser = JSON.parse(sessionStorage.getItem('user'));
                 }
            }

            function signout(){
                 sessionStorage.removeItem('user');
                 localStorage.removeItem('user');
                 localStorage.removeItem('keepLoggedIn');
                 window.location="index.html";
            }
//WINDOW LOADS
            window.onload = function(){
                 getUsername();
                 if(currentUser == null){
                   window.location.replace('login.html');
  }
    }
