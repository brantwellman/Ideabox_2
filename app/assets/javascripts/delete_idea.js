function deleteIdea() {
  $('#all-ideas').on('click', "#delete-idea", function() {
    var $idea = $(this).closest(".idea");

    $.ajax({
      type: 'DELETE',
      url: '/api/v1/ideas/' + $idea.attr('data-id'),
      success: removeIdea($idea),
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });
}

function removeIdea($idea) {
  $idea.remove();
}
