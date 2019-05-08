json.extract! @article, :id, :title, :text
json.author @article.author, :id, :name, :nickname, :email, :image
