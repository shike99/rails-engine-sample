# frozen_string_literal: true

class Admin::ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit

  before_action do
    tokens = cookies['session'] ? JSON.parse(cookies.fetch('session')).fetch('tokens') : {}
    relevant_headers = tokens.symbolize_keys.slice(*DeviseTokenAuth.headers_names.keys)

    relevant_headers.each do |k, v|
      request.headers[k] = v
    end
  end
  before_action :authenticate_user!
  before_action :authorize_admin

  private

    def authorize_admin
      authorize current_user, :is_admin?
    end
end
