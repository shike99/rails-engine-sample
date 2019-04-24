# frozen_string_literal: true

require "admin/engine"

module Admin
  mattr_accessor :User, :Article

  def self.User
    @@User.constantize
  end

  def self.Article
    @@Article.constantize
  end
end
