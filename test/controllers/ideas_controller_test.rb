require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index responds to json and returns all the ideas" do
    idea1 = Idea.create(title: "Idea1", body: "This is the body of number 1",  quality: 1)
    idea2 = Idea.create(title: "Idea2", body: "This is the body of number 2",  quality: 2)

    get :index, format: :json

    parsed_ideas = JSON.parse(response.body)
    parsed_one = parsed_ideas.first
    parsed_two = parsed_ideas.last

    assert_response 200
    assert_equal idea1.title, parsed_one["title"]
    assert_equal idea2.body, parsed_two["body"]
    assert_equal 2, parsed_ideas.count
  end

  test "#create adds a new idea to the database" do
    assert_difference 'Idea.count', 1 do
      post :create, title: "Idea1", body: "This is the body of number 1",  quality: 0, format: :json
    end

    parsed_idea = JSON.parse(response.body)

    assert_response 201
    assert_equal "Idea1", parsed_idea["title"]
  end

  test "#destroy removes the idea from the database" do
    idea = Idea.create(title: "Idea1", body: "This is the body of number 1",  quality: 1)

    delete :destroy, id: idea.id, format: :json

    assert_response 204
    assert 0, Idea.count
  end

  test "#update modifies the attributes of the idea" do
    idea = Idea.create(title: "Idea1", body: "This is the body of number 1",  quality: 1)

    get :update, id: idea.id, format: :json, title: "New_idea", body: "New_body"
    parsed_idea = JSON.parse(response.body)

    assert_response 200
    assert_equal "New_idea", parsed_idea["title"]
    assert_equal "New_body", parsed_idea["body"]
  end
end
