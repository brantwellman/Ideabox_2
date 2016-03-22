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
    + "<h3>" + idea.title + "</h3>"
    + "<h4>Idea Quality: " + idea.quality + "</h4>"
    + "<p>" + trimmedBody + "</p>"
    + "<button id=delete-idea" + " name='button-delete' class='button btn-default btn-xs'>Delete</button>"
    + "</div>"
  )
}

function truncateBody(string) {
  return string.substring(0, 100)
}
