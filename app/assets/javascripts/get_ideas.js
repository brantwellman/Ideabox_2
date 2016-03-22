$(document).ready(function() {
  getAllIdeas();
})

function getAllIdeas() {
  $.ajax({
    type: 'GET',
    url: 'api/v1/ideas',
    success: function(ideas) {
      $.each(ideas, function(index, idea){
        renderIdea(idea)
      })
    }
  })
}

function renderIdea(idea) {
  var trimmedBody = idea.body.substring(0, 100)
  $('#all-ideas').prepend(
    "<div class='idea'>"
    + "<h3>" + idea.title + "</h3>"
    + "<h4>Idea Quality: " + idea.quality + "</h4>"
    + "<p>" + trimmedBody + "</p>"
    + "</div>"
  )
}
