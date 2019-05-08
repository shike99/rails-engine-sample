Api::Engine.routes.draw do
  resources :articles, only: [:index, :show]

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'api/auth/registrations',
    sessions: 'api/auth/sessions'
  }
end
