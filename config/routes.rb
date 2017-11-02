Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(index)
    resource :session, only: %i(create destroy show)
    resources :books, only: %i(create show update index) do
      resources :reviews, only: %i(create update index destroy)
    end
    resources :quotes, only: %i(index show)
    resource :user, only: %i(create)

  end
end
