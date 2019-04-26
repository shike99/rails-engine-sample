require "api/engine"

module Api
  mattr_accessor :User

  def self.User
    @@User.constantize
  end
end
