class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :text
      t.references :author, foreign_key: { to_table: :users }, type: :integer

      t.timestamps
    end
  end
end
