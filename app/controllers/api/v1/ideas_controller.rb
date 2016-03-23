class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    idea = Idea.create(idea_params)
    respond_with :api, :v1, idea
  end

  def destroy
    idea = Idea.destroy(params[:id])
    respond_with :api, :v1, idea
  end

  def update
    idea = Idea.find(params[:id])
    idea.update(idea_params)
    respond_with :api, :v1, idea
  end

  private

    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end

end
