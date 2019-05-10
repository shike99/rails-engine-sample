json.array! @articles do |article|
  json.extract! article, :id, :title, :created_at, :updated_at
  json.author article.author, :id, :name, :nickname, :image
end
