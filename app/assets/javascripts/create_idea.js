var $newIdeaTitle = $('#title');
var $newIdeaBody = $('#body');

function createIdea() {
  $("#create-button").on('click', function() {
    var ideaParams = {
        title: $newIdeaTitle.val(),
        body: $newIdeaBody.val()
      }

    $.post('/api/v1/ideas', ideaParams).then(renderIdea)
                                       .then(clearForm)
                                      //  .fail(handleError)
  })
}

function clearForm() {
  $newIdeaTitle.val('')
  $newIdeaBody.val('')
}
