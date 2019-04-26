require "api_admin/engine"

module ApiAdmin
  mattr_accessor :User, :Article

  def self.User
    @@User.constantize
  end

  def self.Article
    @@Article.constantize
  end
end
