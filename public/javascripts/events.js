(function() {
  document.getElementById('join-event-btn').addEventListener('click', (event) => {
    let eventID = event.target.getAttribute('event-id');
    fetch(`/join/${eventID}`, {method: 'POST', credentials: 'same-origin'});
  });
})();