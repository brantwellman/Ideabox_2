function editIdeaTitle(){
  $('#all-ideas').on('click', ".title", function() {
    var $idea = $(this).closest(".idea")
    $(this).attr('contentEditable', 'true')

    $(".title").bind('keydown focusout', function(e) {
      if(e.keyCode == 13) {
        $(this).attr('contentEditable', 'false')
      }
      var ideaParams = { title: $($idea).children('h3').text() }
      updateIdea($idea, ideaParams)
    })
  })
}

function editIdeaBody(){
  $('#all-ideas').on('click', ".body", function() {
    var $idea = $(this).closest(".idea")
    $(this).attr('contentEditable', 'true')

    $(".body").bind('keydown focusout', function(e) {
      if(e.keyCode == 13) {
        $(this).attr('contentEditable', 'false')
      }
      var ideaParams = { body: $($idea).children('p').text() }
      updateIdea($idea, ideaParams)
    })
  })
}

function updateIdea($idea, newParams){
  $.ajax({
    type: 'PUT',
    url: '/api/v1/ideas/' + $idea.attr('data-id'),
    data: newParams
  })
}
