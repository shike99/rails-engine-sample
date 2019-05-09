# frozen_string_literal: true

module Api
  class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
    before_action :skip_session

    protected

      def skip_session
        request.session_options[:skip] = true
      end
  end
end
