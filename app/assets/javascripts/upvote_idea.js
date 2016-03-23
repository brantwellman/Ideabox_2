function upVoteIdea() {
  $('#all-ideas').on('click', '#upvote-idea', function() {
    var $idea = $(this).closest('.idea')
    var quality = $idea.find("#idea-quality").html().split(" ")[2]

    var params = newUpQuality(quality)
    updateUpQuality(params, $idea)

  })
}

function newUpQuality(quality) {
  var ideaParams = { quality: "genius" }
  if (quality === "swill") {
    ideaParams = { quality: "plausible" }
  } else if (quality === "plausible") {
    ideaParams = { quality: "genius" }
  }
  return ideaParams
}

function updateUpQuality(ideaParams, $idea) {
  $.ajax({
    type: 'PUT',
    url: '/api/v1/ideas/' + $idea.attr('data-id'),
    data: ideaParams
  })
}
