$(document).on('ready page:load', function() {
  // function displaySearchResults() {
  //   if (this.readyState === 4) {
  //     console.log(this);
  //     document.getElementById('products').innerHTML = this.responseText;
  //   }
  // }

  // var form = document.getElementById('search-form');
  // form.addEventListener('submit', function(event){
  //   event.preventDefault();
  //   var searchValue = document.getElementById('search').value;

  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = displaySearchResults;
  //   xhr.open('GET', '/products?search=' + searchValue, true);
  //   xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  //   xhr.send();
  // });

  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
      url: '/products?search=' + searchValue,
      type: 'GET',
      dataType: 'script'
    }).done(function(data) {
      $('#products').html(data);
      console.log("Hello");
    });

  });
});