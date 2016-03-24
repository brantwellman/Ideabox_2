class Idea < ActiveRecord::Base
  enum quality: %w(swill plausible genius)

  validates :title, :body, presence: true
end
