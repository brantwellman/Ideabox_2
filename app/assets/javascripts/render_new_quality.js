function renderNewQuality(ideaQuality, idea) {
  var updatedQuality = ideaQuality["quality"]
  $(idea).find('#idea-quality').replaceWith("<h4 id=idea-quality>Idea Quality: " + updatedQuality + "</h4>")
}
