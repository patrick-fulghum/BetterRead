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

user1 = User.create!(
  email: "fake_user@g.co",
  password: "starwars",
  name: "Devon Chiles"
)

user2 = User.create!(
  email: "fake_user1@g.co",
  password: "starwars",
  name: "Jessica Nash"
)

user3 = User.create!(
  email: "fake_user2@g.co",
  password: "starwars",
  name: "Nathan Scott"
)

user4 = User.create!(
  email: "fake_user3@g.co",
  password: "starwars",
  name: "Cameron Taylor"
)

user5 = User.create!(
  email: "fake_user4@g.co",
  password: "starwars",
  name: "Loki Sheehan"
)

user6 = User.create!(
  email: "fake_user5@g.co",
  password: "starwars",
  name: "Synda Conklin"
)

user7 = User.create!(
  email: "fake_user6@g.co",
  password: "starwars",
  name: "Jerome Weatherly"
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
  title: "Aurora: CV 01",
  description: "A world recovering from a devastating plague…
A brutal enemy threatening invasion…
A young man seeking to escape the shadow of his father…
A ship manned by a crew of fresh academy graduates…
A top-secret experimental propulsion system…
A questionable alliance with a mysterious green-eyed woman…

What destiny has in store for the crew of the UES Aurora, is far greater than any of them could ever imagine. And this is only the beginning… ",
  genre: "Science Fiction",
  author: "Ryk Brown",
)

file5 = File.open('app/assets/images/aurora_cover.jpeg')
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

review1 = Review.create!(
  book_id: book1.id,
  author_id: user3.id,
  body: "This book is riveting, intriguing, and horrifying.",
  rating: 5
)

review2 = Review.create!(
  book_id: book1.id,
  author_id: user1.id,
  body: "This book is scary but verbose.",
  rating: 3
)

review3 = Review.create!(
  book_id: book2.id,
  author_id: user2.id,
  body: "M-O-O-N, that spells one of the best books ever! This is King at his very best.",
  rating: 5
)

review4 = Review.create!(
  book_id: book2.id,
  author_id: user4.id,
  body: "King says that when people talk to him about The Stand they discuss the characters as if they are real people, and ask what happened to so and so as if he got letters from them. I’m one of those people that want to ask…and not only about The Stand. Good to know I’m not the only one!

There’s really not much to say about this book that hasn’t already been said many times over. It’s a great story, well written, and with a HUGE cast of wonderful characters that I like a lot.

A solid 5 stars for both the book and the audio..",
  rating: 5
)

review5 = Review.create!(
  book_id: book3.id,
  author_id: user5.id,
  body: "I originally gave this book 3 stars as harmless lightweight fun, but my opinion of it declined as time went by. Then after reading Armada I fully realized what a talentless one-trick hack that Cline really is so I changed this rating. Plus, his outraged hardcore fans kept coming on here and telling me that I missed the point since I didn't give it 5 stars so I might as well give them something to really be mad about. If you're one of those Cline fans who wants to whine about it in the comments I will just delete it and block you.",
  rating: 1
)

review6 = Review.create!(
  book_id: book3.id,
  author_id: user6.id,
  body: "I got to read an ARC of this, and it appealed to every geeky part of me.

I'll probably write a blog about it later, but for now, a brief review:

Simply said? This book was fucking awesome. ",
  rating: 5
)

review7 = Review.create!(
  book_id: book4.id,
  author_id: user7.id,
  body: "I really wanted to like this because H.P. Lovecraft is likable as a person and I know he's so influential in horror but I couldn't do it. The story is well written and original but the writing style was so dry and boring because it's a scientist recording their expedition that I had to drag myself through it. There was just so much detail about things that weren't interesting when all I wanted to know more about was the horrible shit that was happening to them.",
  rating: 3
)

review8 = Review.create!(
  book_id: book4.id,
  author_id: user1.id,
  body: "in this tale, Lovecraft proves that he can write just as badly as his gaggle of followers. It is meant to be a story of the fantastical, of the supernatural, of mystery and suspense--yet it is full of the very things that kill off any sense of wonder or the uncanny. Nothing demysticizes like familiarity, and this book is full of precise descriptions of his monstrous creatures, their histories, their habits--Lovecraft even spends a few paragraphs telling us how they like to furnish and decorate their living rooms. A tip for writers of the supernatural: if you want a being to be mysterious and unsettling, don't go off on a tangent about its commitment to feng shui.",
  rating: 2
)

review9 = Review.create!(
  book_id: book5.id,
  author_id: user1.id,
  body: "This dreck isn't remotely worthy of the stellar (no pun intended) ratings being given it, which I truly believe are from shills and sockpuppets. It's basically bad Star Trek/Stargate fanfiction written by a teenage David Weber wannabe. A missmash of science fiction tropes, zero logic or consistency, cardboard characterization, absurd coincidences, etc. etc. If you are looking to support a self-published author that can actually write, try Hugh Howey's Wool books. Alternatively, for space opera actually well done, Bujold's Vorkosigan series. But not this. Definitely not this.",
  rating: 1
)

review10 = Review.create!(
  book_id: book5.id,
  author_id: user2.id,
  body: "I’ve got mixed feelings about the book. Sci-fi wise, it’s kind of cool. A new technology can “jump” a spaceship all around the universe in the blink of an eye. The experienced crew are killed when the ship “jumps” into an unexpected space battle during what should have been a routine test, and the young newbies are forced to step up and assume command. Naturally, the guy (Nathan) with the political pedigree and “natural leadership” abilities ends up as captain.
  Cooler than Cameron, though, is Jessica! Wow! Sexual (but hetero, sigh), ambitious and KICK-ASS as a special-ops gal, she rocks as the new head of security!
  I’m hovering between 3.4-3.6 for my rating….hmmmm flipping a coin…literally!....coin toss says…..4",
  rating: 4
)

review11 = Review.create!(
  book_id: book5.id,
  author_id: user3.id,
  body: "75 EPISODES!?",
  rating: 4
)

review12 = Review.create!(
  book_id: book5.id,
  author_id: user4.id,
  body: "The characters were funny, believable, unique, and they really developed well as the book progresses. There were some parts of the book that I had to re-read, because the scenes were so touching. Like when a certain person dies. Even though you they weren't around very much, you still felt the hurt and pain that Nathan was going through.

The book reminded me a lot of Stargate Universe, but I think that Aurora: CV-01 was much better. I'm definitely going to go purchase the sequel as soon as I finish this review, and devour it as soon as possible!",
  rating: 5
)

review13 = Review.create!(
  book_id: book5.id,
  author_id: user5.id,
  body: "Fun light read. It’s so cheesy it hurts at times, but knowing that going in didn’t detract from the fast paced action and overall enjoyment. Upbeat sci-fi is always welcome. Refreshing from the dark doom/gloom I tend to see more commonly in this sub genre. The writing is a bit more on the “tell” than the “show”, which kinda hurts some of the dramatic moments. ",
  rating: 4
)

review14 = Review.create!(
  book_id: book5.id,
  author_id: user6.id,
  body: "Although I am only giving it three stars, I did really enjoy this book, and I plan on continuing with the series. Characters are pretty transparent and predictable, but enough action to make it a fast and interesting read.",
  rating: 3
)

review15 = Review.create!(
  book_id: book5.id,
  author_id: user7.id,
  body: "I like a good space opera, but the writing in this book was so poor and the plot holes so massive, I just could not finish it",
  rating: 1
)
