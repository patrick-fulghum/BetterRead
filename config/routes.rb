Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: %i(create destroy show)
    resource :book, only: %i(create show)
    resource :quote, only: %i(show index)
  end
end
