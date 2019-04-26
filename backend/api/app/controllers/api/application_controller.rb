module Api
  class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
    protect_from_forgery with: :null_session
    before_action :skip_session

    protected

    def skip_session
      request.session_options[:skip] = true
    end
  end
end
