# frozen_string_literal: true

module ApiAdmin
  class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
    include Pundit

    before_action :authenticate_user!
    before_action :authorize_admin

  private

    def authorize_admin
      authorize current_user, :is_admin?
    end
  end
end
