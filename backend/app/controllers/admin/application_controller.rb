# frozen_string_literal: true

class Admin::ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit

  before_action :set_auth_headers
  before_action :authenticate
  before_action :authorize_admin

  layout 'layouts/application'

  private

    def set_auth_headers
      tokens = cookies['session'] ? JSON.parse(cookies.fetch('session')).fetch('tokens') : {}
      relevant_headers = tokens.symbolize_keys.slice(*DeviseTokenAuth.headers_names.keys)

      relevant_headers.each do |k, v|
        request.headers[k] = v
      end
    end

    def authenticate
      path = request.fullpath
      redirect_to "/sign_in?redirect=#{path}" unless user_signed_in?
    end

    def authorize_admin
      authorize current_user, :is_admin?
    end
end
