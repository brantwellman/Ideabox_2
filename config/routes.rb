Rails.application.routes.draw do
  root 'root#index'
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :show, :destroy, :update]
    end
  end
end
