Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:new, :create]
    resources :books
  end
  
  root "static_pages#root"
end

# book searches
# resources :book_searches, only: [:index] do
#   get "books_by_title", on: :collection
#   get "shelves_by_name", on: :collection
# end