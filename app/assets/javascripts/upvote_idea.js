function upVoteIdea() {
  $('#all-ideas').on('click', '#upvote-idea', function() {
    var $idea = $(this).closest('.idea')
    var quality = $idea.find("#idea-quality").html().split(" ")[2]

    var params = newUpQuality(quality)
    updateQuality(params, $idea)
    renderNewQuality(params, $idea)
  })
}

function newUpQuality(quality) {
  var ideaParams = { quality: "genius" }
  if (quality == "swill") {
    ideaParams = { quality: "plausible" }
  } else if (quality == "plausible") {
    ideaParams = { quality: "genius" }
  }
  return ideaParams
}
