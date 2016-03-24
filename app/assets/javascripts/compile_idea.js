function compileIdea(idea, trimmedBody) {
  return "<div class='idea' data-id=" + idea.id + " id=idea-" + idea.id + ">"
  + "<h3 class='title' id=idea-title-" + idea.id + ">" + idea.title + "</h3>"
  + "<h4 id=idea-quality>Idea Quality: " + idea.quality + "</h4>"
  + "<p class=body id=idea-body-" + idea.id + ">" + trimmedBody + "</p>"
  + "<button id=delete-idea name='button-delete' class='button btn-default btn-xs'>Delete</button>"
  + "<button id=upvote-idea name='button-upvote' class='button btn-default btn-xs'>Thumbs Up!</button>"
  + "<button id=downvote-idea name='button-downvote' class='button btn-default btn-xs'>Thumbs Down?</button>"
  + "</div>"
}
