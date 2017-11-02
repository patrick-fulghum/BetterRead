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
  title: "Aurora: CV 01(Frontier Saga #1)",
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

bookshelf1 = Bookshelf.create!(
  owner_id: user1.id,
  category: "custom_shelf",
)

bookshelf_item1 = BookshelfItem.create!(
  book_id: book1.id,
  bookshelf_id: bookshelf1.id,
)
bookshelf_item2 = BookshelfItem.create!(
  book_id: book2.id,
  bookshelf_id: bookshelf1.id,
)
bookshelf_item3 = BookshelfItem.create!(
  book_id: book3.id,
  bookshelf_id: bookshelf1.id,
)
bookshelf_item4 = BookshelfItem.create!(
  book_id: book4.id,
  bookshelf_id: bookshelf1.id,
)
bookshelf_item5 = BookshelfItem.create!(
  book_id: book5.id,
  bookshelf_id: bookshelf1.id,
)

book6 = Book.new(
  title: "1984",
  description: "In George Orwell's 1984, Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia.",
  genre: "Post-Apocalyptic",
  author: "George Orwell",
)

file8 = File.open('app/assets/images/1984.jpeg')
book6.cover = file8
book6.save!

book7 = Book.new(
  title: "Harry Potter and The Chamber of Secrets(Harry Potter #2)",
  description: "The Chamber was opened during the 1942-1943 school year by a sixteen year old teenager by the name of Tom Riddle, later known as Lord Voldemort. Through Merope Gaunt, his mother, and a Witch, Riddle was the last remaining direct descendant of Slytherin, and he desired to see Muggle-borns driven from Hogwarts.",
  genre: "Young Adult",
  author: "J.K. Rowling",
)

file9 = File.open('app/assets/images/chamber_secrets.jpeg')
book7.cover = file9
book7.save!

book8 = Book.new(
  title: "Harry Potter and The Sorcerer's Stone(Harry Potter #1)",
  description: "But not everything is quiet at Hogwarts as Harry suspects someone is planning to steal the sorcerer's stone. On his eleventh birthday, Harry Potter discovers that he is no ordinary boy. Hagrid, a beetle-eyed giant, tells Harry that he is a wizard and has a place at Hogwarts School of Witchcraft and Wizardry.",
  genre: "Young Adult",
  author: "J.K. Rowling",
)

file10 = File.open('app/assets/images/sorcerers_stone.jpeg')
book8.cover = file10
book8.save!

book9 = Book.new(
  title: "Harry Potter and The Goblet of Fire(Harry Potter #4)",
  description: "But not everything is quiet at Hogwarts as Harry suspects someone is planning to steal the sorcerer's stone. On his eleventh birthday, Harry Potter discovers that he is no ordinary boy. Hagrid, a beetle-eyed giant, tells Harry that he is a wizard and has a place at Hogwarts School of Witchcraft and Wizardry.",
  genre: "Young Adult",
  author: "J.K. Rowling",
)

file11 = File.open('app/assets/images/goblet_of_fire.jpeg')
book9.cover = file11
book9.save!

book10 = Book.new(
  title: "The Art of War",
  description: "The Art of War is an ancient Chinese military treatise dating from the Spring and Autumn period in 5th century BC. The work, which is attributed to the ancient Chinese military strategist Sun Tzu ('Master Sun', also spelled Sunzi), is composed of 13 chapters.",
  genre: "War",
  author: "Sun Tzu",
)

file12 = File.open('app/assets/images/the_art_of_war.jpeg')
book10.cover = file12
book10.save!

book11 = Book.new(
  title: "Game of Thrones(Song of Ice and Fire #1)",
  description: "Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; a child is lost in the twilight between life and death; and a determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones.",
  genre: "Fantasy",
  author: "George R.R. Martin",
)

file13 = File.open('app/assets/images/game_of_thrones.jpeg')
book11.cover = file13
book11.save!

book12 = Book.new(
  title: "Clash of Kings(Song of Ice and Fire #2)",
  description: "A determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones.",
  genre: "Fantasy",
  author: "George R.R. Martin",
)

file14 = File.open('app/assets/images/clash_of_kings.jpeg')
book12.cover = file14
book12.save!

book13 = Book.new(
  title: "Clash of Kings(Song of Ice and Fire #3)",
  description: "Of the five contenders for power, one is dead, another in disfavor, and still the wars rage, as alliances are made and broken. Joffrey sits on the Iron Throne, the uneasy ruler of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, victim of the sorceress who holds him in her thrall. Young Robb still rules the North from the fortress of Riverrun. Meanwhile, making her way across a blood-drenched continent is the exiled queen, Daenerys, mistress of the only three dragons left in the world. And as opposing forces maneuver for the final showdown, an army of barbaric wildlings arrives from the outermost limits of civilization, accompanied by a horde of mythical Others—a supernatural army of the living dead whose animated corpses are unstoppable. As the future of the land hangs in the balance, no one will rest until the Seven Kingdoms have exploded in a veritable storm of swords.",
  genre: "Fantasy",
  author: "George R.R. Martin",
)

file15 = File.open('app/assets/images/storm_of_swords.jpeg')
book13.cover = file15
book13.save!

book14 = Book.new(
  title: "Feast for Crows(Song of Ice and Fire #4)",
  description: "It seems too good to be true. After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce. Or so it appears. . . . With the death of the monstrous King Joffrey, Cersei is ruling as regent in King's Landing. Robb Stark's demise has broken the back of the Northern rebels, and his siblings are scattered throughout the kingdom like seeds on barren soil. Few legitimate claims to the once desperately sought Iron Throne still exist-or they are held in hands too weak or too distant to wield them effectively. The war, which raged out of control for so long, has burned itself out.",
  genre: "Fantasy",
  author: "George R.R. Martin",
)

file16 = File.open('app/assets/images/feast_for_crows.jpeg')
book14.cover = file16
book14.save!

book15 = Book.new(
  title: "A Dance with Dragons(Song of Ice and Fire #5)",
  description: "To the north lies the mammoth Wall of ice and stone - a structure only as strong as those guarding it. There, Jon Snow, 998th Lord Commander of the Nights Watch, will face his greatest challenge yet. For he has powerful foes not only within the Watch but also beyond, in the land of the creatures of ice.
  And from all corners, bitter conflicts soon reignite, intimate betrayals are perpetrated, and a grand cast of outlaws and priests, soldiers and skinchangers, nobles and slaves, will face seemingly insurmountable obstacles. Some will fail, others will grow in the strength of darkness. But in a time of rising restlessness, the tides of destiny and politics will lead inevitably to the greatest dance of all.",
  genre: "Fantasy",
  author: "George R.R. Martin",
)

file17 = File.open('app/assets/images/dance_of_dragons.jpeg')
book15.cover = file17
book15.save!

book16 = Book.new(
  title: "The Dead Zone",
  description: "Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future.",
  genre: "Horror",
  author: "Stephen King",
)

file18 = File.open('app/assets/images/dead_zone.jpeg')
book16.cover = file18
book16.save!

book17 = Book.new(
  title: "To Kill a Mockingbird",
  description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father - a crusading local lawyer - risks everything to defend a black man unjustly accused of a terrible crime.",
  genre: "Classics",
  author: "Harper Lee",
)

file19 = File.open('app/assets/images/to_kill_a_mockingbird.jpeg')
book17.cover = file19
book17.save!

book18 = Book.new(
  title: "Harry Potter and The Deathly Hallows(Harry Potter #7)",
  description: "The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy....",
  genre: "Young Adult",
  author: "J.K. Rowling",
)

file20 = File.open('app/assets/images/deathly_hallows.jpeg')
book18.cover = file20
book18.save!

book19 = Book.new(
  title: "Escalation(Frontier Sage #2)",
  description: "A cease-fire that has lasted seven years. Worlds half-destroyed that have been rebuilt anew. Friends and crewmates scattered light-years apart. New leaders that would be kings. The Jung threat has been renewed, in ways not imagined. It will take a new savior to inspire the masses, and once again lead those willing to fight against oppression. But who will the new savior be?",
  genre: "Science Fiction",
  author: "Ryk Brown",
)

file21 = File.open('app/assets/images/CV-02.jpeg')
book19.cover = file21
book19.save!

book20 = Book.new(
  title: "The Legend of Corinair(Frontier Sage #3)",
  description: "A captain coming into his own. A handful of refugees stranded on board. A possible traitor in their midst. A voyage into the territory of the very enemy that pursues them. Sometimes legends become realities in unexpected ways. It seems that fate has the crew of the Aurora firmly in its clutches.",
  genre: "Science Fiction",
  author: "Ryk Brown",
)

file22 = File.open('app/assets/images/CV-03.jpeg')
book20.cover = file22
book20.save!

book21 = Book.new(
  title: "Freedom's Dawn(Frontier Sage #4)",
  description: "A ship under siege. A world on the brink of civil war. A distraught people seeking a new beginning. A battle weary crew that can barely hold it together.
Even a legend can use a little help from time to time.
The crew of the Aurora, the Karuzari, and the Corinairans must find a way to work together, or else they may all perish.",
  genre: "Science Fiction",
  author: "Ryk Brown",
)

file24 = File.open('app/assets/images/CV-04.jpeg')
book21.cover = file24
book21.save!
