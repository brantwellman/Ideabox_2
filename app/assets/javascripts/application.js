// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
  getAllIdeas();
})

// Get all Ideas
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

// Create Idea
$("#create-button").on('click', function() {
  var ideaParams = {
      title: $('#title').val(),
      body: $('#body').val()
    }

  $.ajax({
    type: 'POST',
    url: '/api/v1/ideas',
    data: ideaParams,
    success: function(newIdea) {
      renderIdea(newIdea)
      clearForm()
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })

  function clearForm() {
    $("#title").val('')
    $("#body").val('')
  }
})

// Delete Idea
$('#all-ideas').delegate("#delete-idea", 'click', function() {
  var $idea = $(this).closest(".idea")

  $.ajax({
    type: 'DELETE',
    url: '/api/v1/ideas/' + $idea.attr('data-id') + ".json",
    success: function(){
      $idea.remove()
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
})
