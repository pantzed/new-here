(function() {
  fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyDjVuClQnfaaaAx5O3J4Hi_joj3OZYK_B0&callback=initMap',
    {method: 'GET'})
  .then((x) => {
    console.log(x);
  })
})();
