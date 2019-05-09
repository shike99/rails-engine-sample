Rails.application.routes.draw do
  root to: 'home#index'

  namespace :admin do
    get '/', to: 'home#index'
    resources :users, only: :index
  end

  namespace :api, defaults: { format: :json } do
    mount Api::Engine, at: '/'
    mount ApiAdmin::Engine, at: '/admin'
  end

  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
