$(document).ready(
  function () {
    var todoList = [
      'prendere il latte',
      'scrivere mail a Giuseppe',
      'comprare coniglio',
      'pagare bolletta'
    ];

    for (var i = 0; i < todoList.length; i++) {
      var elementList = $('.template li').clone();
      elementList.append(todoList[i]);
      $('.todo').append(elementList);
    }

    $(document).on('click', '.todo li span', function () {
      $(this).parent().remove();
    });

    $('#add-element').keypress(
      function (event) {
        if(event.which == 13 || event.keyCode == 13) {
          var text = $('#add-element').val();
          console.log(text);
          var elementNew = $('.template li').clone();
          elementNew.append(text);
          $('.todo').append(elementNew);
        }
      }
    );

  }
);
