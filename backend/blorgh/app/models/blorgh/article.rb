module Blorgh
  class Article < ApplicationRecord
    has_many :comments
    belongs_to :author, class_name: Blorgh.author_class.to_s

    attr_accessor :author_name

    before_validation :set_author

    private

    def set_author
      self.author = Blorgh.author_class.find_or_create_by(name: author_name)
    end
  end
end
