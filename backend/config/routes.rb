Rails.application.routes.draw do
  # root to: ''

  mount Admin::Engine, at: '/admin'

  mount_devise_token_auth_for 'User', at: 'auth', controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
