(function() {

  function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    fetch(`/signin/${id_token}`, {method: 'POST'});
  }

  function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

})();
