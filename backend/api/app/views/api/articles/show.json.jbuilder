# frozen_string_literal: true

json.extract! @article, :id, :title, :text
json.author @article.author, :id, :name, :nickname, :email, :image
