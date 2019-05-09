# frozen_string_literal: true

require_dependency 'api/application_controller'

module Api
  class Auth::SessionsController < DeviseTokenAuth::SessionsController
    protect_from_forgery with: :null_session
  end
end
