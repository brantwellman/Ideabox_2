function downVoteIdea() {
  $('#all-ideas').on('click', '#downvote-idea', function(){
    var $idea = $(this).closest('.idea')
    var quality = $idea.find('#idea-quality').html().split(" ")[2]

    var params = newDownQuality(quality)
    updateDownQuality(params, $idea)
    renderNewQuality(params, $idea)
  })
}

function newDownQuality(quality) {
  var params = { quality: 'swill' }
  if (quality == 'genius') {
    params = { quality: 'plausible' }
  } else if (quality == 'plausible') {
    params = { quality: 'swill' }
  }
  return params
}

function updateDownQuality(ideaParams, $idea) {
  $.ajax({
    type: 'PUT',
    url: 'api/v1/ideas/' + $idea.attr('data-id'),
    data: ideaParams
  })
}
