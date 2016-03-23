function filterIdeas() {
  $('#idea_filter').keyup(function() {
    var $ideas = $('.idea')
    $ideas.each(function (index, idea) {
      var searchContent = $('#idea_filter').val().toLowerCase()
      $idea = $(idea)
      var ideaTitle = $idea.children('.title').html().toLowerCase()
      var ideaBody = $idea.children('.body').html().toLowerCase()
      if (ideaTitle.includes(searchContent) || ideaBody.includes(searchContent)) {
        $idea.show()
      } else {
        $idea.hide()
      }
    })
  })
}
