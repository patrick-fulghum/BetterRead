# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
hp = "Howard Phillips Lovecraft"
User.destroy_all
Book.destroy_all
Quote.destroy_all

guest = User.create!(
  email: "BetterReadGuest",
  password: "password",
  name: "Guest"
)

book1 = Book.create!(
  title: "The H.P. Lovecraft Collection",
  subtitle: "Classic Tales of Cosmic Horror",
  description: "This collection of H. P. Lovecraft's work contains
  71 stories by the master of weird fantasy and strange horror fiction. ",
  genre: "Horror",
  author: hp,
  cover: "HP_cover_art_cropped"
)


quote1 = Quote.create!(
  author: "Oscar Wilde",
  content: "I can resist anything but temptation.",
  category: "funny",
  portrait: "window.oscar"
)

quote2 = Quote.create!(
  author: "Marcus Tullius Cicero",
  content: "A room without books is like a body without a soul",
  category: "life",
  portrait: "cicero_portrait"
)

quote3 = Quote.create!(
  author: hp,
  content: "That is not dead which can eternal lie, and with strange aeons even death may die.",
  category: "life",
  portrait: "lovecraft_portrait"
)

# book1 = Book.create!(
#   author: hp,
#   title: "At The Mouth of Madness",
#   description: "An expedition to Antarctica goes horribly wrong.",
#   genre: "horror",
#   cover: "",
# )
