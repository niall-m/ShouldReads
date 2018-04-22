Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :books, only: [:index, :show]
    resources :bookshelves, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resource :shelvings, only: [:create, :destroy]
    resources :book_searches, only: [:index] do
      get "books_by_title", on: :collection
      # get "books_by_author", on: :collection
    end
  end
  
  root "static_pages#root"
end