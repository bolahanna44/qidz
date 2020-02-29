Rails.application.routes.draw do
  root 'movies#index'

  namespace :api, defaults: { format: :json } do
    resources :movies, only: :index
  end
end
