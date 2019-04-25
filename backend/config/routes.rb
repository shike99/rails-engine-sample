Rails.application.routes.draw do
  # root to: ''

  namespace :admin do
    resources :users, only: :index
  end

  mount Admin::Engine, at: '/api/admin'

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'api/auth/registrations',
    omniauth_callbacks: 'users/omniauth_callbacks'
  }
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
