Rails.application.routes.draw do

  namespace :api do
    get 'bookshelves/index'
  end

  namespace :api do
    get 'bookshelves/show'
  end

  namespace :api do
    get 'bookshelves/create'
  end

  namespace :api do
    get 'bookshelves/update'
  end

  namespace :api do
    get 'bookshelves/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :books, only: [:index, :show]
  end
  
  root "static_pages#root"
end

# book searches
# resources :book_searches, only: [:index] do
#   get "books_by_title", on: :collection
#   get "shelves_by_name", on: :collection
# end