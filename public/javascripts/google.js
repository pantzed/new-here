(function() {

  document.getElementById('google-signout').addEventListener('click', signOut);
  
  function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
  }

  function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

})();
