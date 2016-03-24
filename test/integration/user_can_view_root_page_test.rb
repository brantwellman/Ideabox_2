require 'test_helper'

class UserCanViewHeadersOnRootPageTest < ActionDispatch::IntegrationTest
  test "it views headers on root page" do
    visit "/"

    assert page.has_content?("The IdeaBox")
    assert page.has_content?("Add a New Idea")
    assert page.has_button?("Save")
  end
end
