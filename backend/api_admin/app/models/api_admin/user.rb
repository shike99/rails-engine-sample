module ApiAdmin
  class User < ApiAdmin.User
    self.table_name = 'users'

    has_many :articles, class_name: 'ApiAdmin::Article'
  end
end
