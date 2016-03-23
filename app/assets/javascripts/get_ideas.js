function getAllIdeas(callback) {
  return $.get('api/v1/ideas')
}

function renderIdeas(ideas) {
  ideas.forEach(renderIdea);
}

function renderIdea(idea) {
  console.log(idea);
  var trimmedBody = idea.body.substring(0, 100)
  $('#all-ideas').prepend(
    "<div class='idea' data-id=" + idea.id + " id=idea-" + idea.id + ">"
    + "<h3 class='title' id=idea-title-" + idea.id + ">" + idea.title + "</h3>"
    + "<h4 id=idea-quality>Idea Quality: " + idea.quality + "</h4>"
    + "<p class=body id=idea-body-" + idea.id + ">" + trimmedBody + "</p>"
    + "<button id=delete-idea name='button-delete' class='button btn-default btn-xs'>Delete</button>"
    + "<button id=upvote-idea name='button-upvote' class='button btn-default btn-xs'>Up Vote!</button>"
    + "<button id=downvote-idea name='button-downvote' class='button btn-default btn-xs'>Down Vote?</button>"
    + "</div>"
  )
}

function truncateBody(string) {
  return string.substring(0, 100)
}
