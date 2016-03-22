$(document).ready(function() {
  $("#create-button").on('click', function() {
    var ideaParams = {
        title: $('#Title').val(),
        body: $('#Body').val()
      }


    $.ajax({
      type: 'POST',
      url: '/api/v1/ideas',
      data: ideaParams,
      success: function(newIdea) {
        renderIdea(newIdea)
      }
    })

  })


})
