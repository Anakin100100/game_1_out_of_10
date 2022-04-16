# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_15_160234) do

  create_table "games", force: :cascade do |t|
    t.integer "score_3a", default: 0
    t.integer "score_3b", default: 0
    t.integer "score_3c", default: 0
    t.integer "score_3d", default: 0
    t.integer "chances_3a", default: 3
    t.integer "chances_3b", default: 3
    t.integer "chances_3c", default: 3
    t.integer "chances_3d", default: 3
    t.integer "number_of_questions_left", default: 40
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
