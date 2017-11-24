Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:new, :create]
    resources :books
  end
  
  root "static_pages#root"
end
