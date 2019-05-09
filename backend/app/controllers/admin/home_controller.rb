class Admin::HomeController < ApplicationController
  include Pundit

  before_action :authenticate_user!
  before_action :authorize_admin

  def index
  end

  private

  def authorize_admin
    authorize current_user, :is_admin?
  end
end
