# frozen_string_literal: true

ApiAdmin::Engine.routes.draw do
  resources :users
  resources :articles
end
