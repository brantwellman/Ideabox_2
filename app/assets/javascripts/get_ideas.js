function getAllIdeas(callback) {
  return $.get('api/v1/ideas')
}

function renderIdeas(ideas) {
  ideas.forEach(renderIdea);
}

function renderIdea(idea) {
  var trimmedBody = truncateBody(idea.body)
  $('#all-ideas').prepend(
    compileIdea(idea, trimmedBody)
  )
}

function truncateBody(string) {
  if (string.length > 100) {
    var sub = string.substring(0, 100)
    return sub.split(" ").slice(0, -1).join(" ")
  } else {
    return string
  }
}
