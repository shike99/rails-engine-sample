# frozen_string_literal: true

Rails.application.routes.draw do
  mount ApiAdmin::Engine => '/api_admin'
end
