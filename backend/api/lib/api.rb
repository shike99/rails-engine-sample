# frozen_string_literal: true

require 'api/engine'

module Api
  mattr_accessor :User, :Article

  def self.User
    @@User.constantize
  end

  def self.Article
    @@Article.constantize
  end
end
