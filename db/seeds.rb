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
  title: "The H.P. Lovecraft Collection: Classic Tales of Cosmic Horror",
  description: "This collection of H. P. Lovecraft's work contains
  71 stories by the master of weird fantasy and strange horror fiction. ",
  genre: "Horror",
  author: hp,
)

book2 = Book.new(
  title: "The Stand",
  description: "This is the way the world ends: with a nanosecond of computer error in a Defense Department laboratory and a million casual contacts that form the links in a chain letter of death.
  And here is the bleak new world of the day after: a world stripped of its institutions and emptied of 99 percent of its people.",
  genre: "Apocalyptic",
  author: "Stephen King",
)

file2 = File.open('app/assets/images/the_stand_cover.jpeg')
book2.cover = file2
book2.save!

book3 = Book.new(
  title: "Ready Player One",
  description: "In the year 2044, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he's jacked into the virtual utopia known as the  OASIS.
  When Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade's going to survive, he'll have to win.",
  genre: "Science Fiction",
  author: "Ernest Cline",
)

file3 = File.open('app/assets/images/Ready_Player_One_cover.jpg')
book3.cover = file3
book3.save!

book4 = Book.new(
  title: "At The Mountains of Madness",
  description: "The undisputed master of strange fiction, H.P. Lovecraft, delivers his greatest tale.
  Dr. William Dyer details the events of a disastrous expedition to the Antarctic continent in September 1930.",
  genre: "Horror",
  author: hp,
);

file4 = File.open('app/assets/images/mad_mountains_cover.jpeg')
book4.cover = file4
book4.save!

book5 = Book.new(
  title: "Aurora",
  description: "A major new novel from one of science fiction's most powerful voices, AURORA tells the incredible story of our first voyage beyond the solar system.

Brilliantly imagined and beautifully told, it is the work of a writer at the height of his powers.

Our voyage from Earth began generations ago.

Now, we approach our new home.

AURORA.",
  genre: "Science Fiction",
  author: "Kim Stanley Robinson",
)

file5 = File.open('app/assets/images/aurora_cover.jpg')
book5.cover = file5
book5.save!

quote1 = Quote.new(
  author: "Oscar Wilde",
  content: "I can resist anything but temptation.",
  category: "funny"
)

file6 = File.open('app/assets/images/oscar_wilde_portrait.jpg')
quote1.portrait = file6
quote1.save!

quote2 = Quote.new(
  author: "Marcus Tullius Cicero",
  content: "A room without books is like a body without a soul.",
  category: "life",
)

file7 = File.open('app/assets/images/cicero_portrait.jpg')
quote2.portrait = file7
quote2.save!

quote3 = Quote.new(
  author: hp,
  content: "That is not dead which can eternal lie, and with strange aeons even death may die.",
  category: "life"
)

file8 = File.open('app/assets/images/lovecraft_portrait.jpeg')
quote3.portrait = file8
quote3.save!
