json.extract! @article, :id, :title, :text, :created_at, :updated_at
json.author @article.author, :id, :name, :nickname, :image
