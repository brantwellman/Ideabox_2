function updateQuality(ideaParams, $idea) {
  $.ajax({
    type: 'PUT',
    url: 'api/v1/ideas/' + $idea.attr('data-id'),
    data: ideaParams
  })
}
