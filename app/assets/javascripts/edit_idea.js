function editIdeaTitle(){
  $('#all-ideas').on('click', ".title", function() {
    var $idea = $(this).closest(".idea")
    $($idea).children('h3').attr('contentEditable', 'true')

    $(".title").bind('keydown focusout', function(e) {
      if(e.keyCode == 13) {
        $($idea).children('h3').attr('contentEditable', 'false')
      }
      var ideaParams = { title: $($idea).children('h3').text() }
      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $idea.attr('data-id'),
        data: ideaParams
      })
    })
  })
}

function editIdeaBody(){
  $('#all-ideas').on('click', ".body", function() {
    var $idea = $(this).closest(".idea")
    $($idea).children('p').attr('contentEditable', 'true')

    $(".body").bind('keydown focusout', function(e) {
      if(e.keyCode == 13) {
        $($idea).children('p').attr('contentEditable', 'false')
      }
      var ideaParams = { body: $($idea).children('p').text() }
      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $idea.attr('data-id'),
        data: ideaParams
      })
    })
  })
}

// function editIdea(){
//   var saveButton = '<button type="button" class="button" id="save-edit-button">Save</button>'
//   $('#all-ideas').on('click', "#edit-idea", function() {
//     var $idea = $(this).closest(".idea")
//     $($idea).children('h3').attr('contentEditable', 'true')
//     $($idea).children('p').attr('contentEditable', 'true')
//     $($idea).append(saveButton)
//
//     $("#save-edit-button").click(function() {
//       var ideaParams = {
//           title: $($idea).children('h3').text(),
//           body: $($idea).children('p').text()
//         }
//       $('#save-edit-button').remove()
//       $($idea).children('h3').attr('contentEditable', 'false')
//       $($idea).children('p').attr('contentEditable', 'false')
//
//       $.ajax({
//         type: 'PUT',
//         url: '/api/v1/ideas/' + $idea.attr('data-id'),
//         data: ideaParams
//       })
//     })
//   })
// }
