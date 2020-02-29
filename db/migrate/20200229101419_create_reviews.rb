class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :movie, foreign_key: true
      t.string :user
      t.integer :stars
      t.text :review

      t.timestamps
    end
  end
end
