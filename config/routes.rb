Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "game#index"
  get "/control_panel", to: "game#control_panel"
  post "/update_game_state", to: "game#update_game_state", as: 'update_game_state'
end
