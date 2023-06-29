Rails.application.routes.draw do
  resources :events
  resources :registrations, only: [:index, :create, :destroy]
  get "/users", to: "users#show"
  get "/users/events", to: "users#showEvents"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
end
