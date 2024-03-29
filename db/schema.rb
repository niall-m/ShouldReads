# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180201231451) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "title", null: false
    t.string "author", null: false
    t.text "description", null: false
    t.string "cover_img", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_books_on_title", unique: true
  end

  create_table "bookshelves", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "shelf_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "default_shelf", default: false
    t.index ["user_id"], name: "index_bookshelves_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "book_id", null: false
    t.integer "user_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rating", null: false
    t.index ["book_id"], name: "index_reviews_on_book_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "shelvings", force: :cascade do |t|
    t.integer "book_id", null: false
    t.integer "shelf_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_shelvings_on_book_id"
    t.index ["shelf_id"], name: "index_shelvings_on_shelf_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
