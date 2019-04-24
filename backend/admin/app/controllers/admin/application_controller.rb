# frozen_string_literal: true

module Admin
  class ApplicationController < ActionController::API
    include Pundit

    before_action :authenticate_user!
    before_action :authorize_admin

    private

    def authorize_admin
      authorize current_user, :is_admin?
    end
  end
end
