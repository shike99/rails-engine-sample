module ApiAdmin
  class Article < ApplicationRecord
    self.table_name = 'articles'

    belongs_to :author, class_name: 'ApiAdmin::User', foreign_key: 'author_id'
  end
end
