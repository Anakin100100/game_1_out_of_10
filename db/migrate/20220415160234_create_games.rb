class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.integer "score_3a", default: 0
      t.integer "score_3b", default: 0
      t.integer "score_3c", default: 0
      t.integer "score_3d", default: 0
      t.integer "chances_3a", default: 3
      t.integer "chances_3b", default: 3
      t.integer "chances_3c", default: 3
      t.integer "chances_3d", default: 3
      t.integer "number_of_questions_left", default: 40
      t.timestamps
    end
  end
end
