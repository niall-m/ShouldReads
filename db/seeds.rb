# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(
    username: "Apollo",
    password: "password",
    email: "Apollo"
)
user2 = User.create!(
    username: "Che",
    password: "password",
    email: "Che"
)
user3 = User.create!(
    username: "Sneaky Pete",
    password: "password",
    email: "fake"
)
user4 = User.create!(
    username: "Tronald Dump",
    password: "password",
    email: "Tronald Dump"
)
user5 = User.create!(
    username: "Mr Bigglesworth",
    password: "password",
    email: "Mr Bigglesworth"
)
user6 = User.create!(
    username: "Hugh Jass",
    password: "password",
    email: "Hugh Jass"
)
user7 = User.create!(
    username: "Amanda Hoggenkiss",
    password: "password",
    email: "Amanda Hoggenkiss"
)
user8 = User.create!(
    username: "Ima Lumberjack",
    password: "password",
    email: "Ima Lumberjack"
)
user9 = User.create!(
    username: "Yolo Pepperoni",
    password: "password",
    email: "Yolo Pepperoni"
)
user10 = User.create!(
    username: "Champ Champagne",
    password: "password",
    email: "Champ Champagne"
)
user11 = User.create!(
    username: "Tahra Dactyl",
    password: "password",
    email: "Tahra Dactyl"
)
user12 = User.create!(
    username: "Chris P. Bacon",
    password: "password",
    email: "Chris P. Bacon"
)
user13 = User.create!(
    username: "Bear Trapp",
    password: "password",
    email: "Bear Trapp"
)
user14 = User.create!(
    username: "Jed Dye",
    password: "password",
    email: "Jed Dye"
)
user15 = User.create!(
    username: "Paige Turner",
    password: "password",
    email: "Paige Turner"
)

Book.destroy_all

book1 = Book.create!(
    :title => "Ulysses",
    :author => "James Joyce",
    :description => "Ulysses is a novel by Irish writer James Joyce. It was first serialised in parts in the American journal The Little Review from March 1918 to December 1920, and then published in its entirety by Sylvia Beach in February 1922, in Paris. It is considered to be one of the most important works of Modernist literature, and has been called 'a demonstration and summation of the entire movement'. 'Before Joyce, no writer of fiction had so foregrounded the process of thinking.' However, even proponents of Ulysses such as Anthony Burgess have described the book as 'inimitable, and also possibly mad'.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/d2/2e/85/d22e85b233818348d775b2b29fc84515.jpg"
)
book2 = Book.create!(
    :title => "The Great Gatsby",
    :author => "F. Scott Fitzgerald",
    :description => "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
    :cover_img => "https://i.pinimg.com/736x/69/35/17/693517baa375d2f021ddb5ed6732dd4c--book-design-inspiration-illustration-book.jpg"
)
book3 = Book.create!(
    :title => "Where the Wild Things Are",
    :author => "Maurice Sendak",
    :description => "When Max puts on his wolf suit and makes mischief, his mother calls him 'Wild Thing' and sends him to bed without any supper. Alone in his room, Max enters a magical world and sets sail across the sea to the place where the wild things are. The wild things roar their terrible roars and gnash their terrible teeth and roll their terrible eyes and show their terrible claws... But Max tames the wild things and is made their king. Will he ever want to go home?",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/4c/bd/da/4cbddabb61bb55be0e3a5ec7701d4a4e.jpg"
)
book4 = Book.create!(
    :title => "Brave New World",
    :author => "Aldous Huxley",
    :description => "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order--all at the cost of our freedom, full humanity, and perhaps also our souls. 'A genius [who] who spent his life decrying the onward march of the Machine' (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites.",
    :cover_img => "http://vividbiology.com/shop/wp-content/uploads/sites/5/2016/05/posters8.jpg"
)
book5 = Book.create!(
    :title => "The Master and Margarita",
    :author => "Mikhail Bulgakov",
    :description => "When the devil arrives in 1930s Moscow, consorting with a retinue of odd associates—including a talking black cat, an assassin, and a beautiful naked witch—his antics wreak havoc among the literary elite of the world capital of atheism. Meanwhile, the Master, author of an unpublished novel about Jesus and Pontius Pilate, languishes in despair in a pyschiatric hospital, while his devoted lover, Margarita, decides to sell her soul to save him. As Bulgakov’s dazzlingly exuberant narrative weaves back and forth between Moscow and ancient Jerusalem, studded with scenes ranging from a giddy Satanic ball to the murder of Judas in Gethsemane, Margarita’s enduring love for the Master joins the strands of plot across space and time.",
    :cover_img => "http://molempire.com/app/uploads/2011/08/The-Master-and-Margarita-by-Mikhail-Bulgakov-Book-Cover.jpg"
)
book6 = Book.create!(
    :title => "Catch-22",
    :author => "Joseph Heller",
    :description => "At the heart of Catch-22 resides the incomparable, malingering bombardier, Yossarian, a hero endlessly inventive in his schemes to save his skin from the horrible chances of war. His problem is Colonel Cathcart, who keeps raising the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempts to excuse himself from the perilous missions that he's committed to flying, he's trapped by the Great Loyalty Oath Crusade, the bureaucratic rule from which the book takes its title: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes the necessary formal request to be relieved of such missions, the very act of making the request proves that he's sane and therefore, ineligible to be relieved.",
    :cover_img => "http://uploads.neatorama.com/images/posts/123/68/68123/1388375331-3.jpg"
)
book7 = Book.create!(
    :title => "1984",
    :author => "George Orwell",
    :description => "The year 1984 has come and gone, but George Orwell's prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of 'dystopia' - a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words. No one can deny the novel's hold on the imaginations of whole generations, or the power of its admonitions - a power that seems to grow, not lessen, with the passage of time.",
    :cover_img => "http://flavorwire.files.wordpress.com/2011/06/www-robinmalau.jpeg"
)
book8 = Book.create!(
    :title => "Fahrenheit 451",
    :author => "Ray Bradbury",
    :description => "Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television 'family.' But then he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television. When Mildred attempts suicide and Clarisse suddenly disappears, Montag begins to question everything he has ever known. He starts hiding books in his home, and when his pilfering is discovered, the fireman has to run for his life.",
    :cover_img => "https://816nyc.com/freshstart/wp-content/uploads/2015/12/tumblr_masbephBNb1qlxr40o1_1280.jpg"
)
book9 = Book.create!(
    :title => "Slaughterhouse-Five",
    :author => "Kurt Vonnegut",
    :description => "Slaughterhouse-Five, an American classic, is one of the world’s great antiwar books. Centering on the infamous firebombing of Dresden, Billy Pilgrim’s odyssey through time reflects the mythic journey of our own fractured lives as we search for meaning in what we fear most.",
    :cover_img => "http://joshualoweteacher.weebly.com/uploads/5/2/8/5/52856523/41449_orig.jpg"
)
book10 = Book.create!(
    :title => "Invisible Man",
    :author => "Ralph Ellison",
    :description => "This masterpiece of science fiction is the fascinating story of Griffin, a scientist who creates a serum to render himself invisible, and his descent into madness that follows.",
    :cover_img => "http://3.bp.blogspot.com/-KJIw1EA99rU/TdQjaZ_zCMI/AAAAAAAAAIw/nT01JMb0uj8/s1600/invisible%2Bman%2BRGB.jpg"
)
book11 = Book.create!(
    :title => "Harry Potter and the Philosopher's Stone",
    :author => "J.K. Rowling",
    :description => "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    :cover_img => "https://static.boredpanda.com/blog/wp-content/uploads/2016/10/harry-potter-book-covers-illustration-olly-moss-3.jpg"
)
book12 = Book.create!(
    :title => "Animal Farm",
    :author => "George Orwell",
    :description => "As ferociously fresh as it was more than a half century ago, this remarkable allegory of a downtrodden society of overworked, mistreated animals, and their quest to create a paradise of progress, justice, and equality is one of the most scathing satires ever published. As we witness the rise and bloody fall of the revolutionary animals, we begin to recognize the seeds of totalitarianism in the most idealistic organization; and in our most charismatic leaders, the souls of our cruelest oppressors.",
    :cover_img => "https://i.pinimg.com/736x/92/6f/d7/926fd7c8fb5e26fea0b8a2a7663fdad4--george-orwell-farms.jpg"
)
book13 = Book.create!(
    :title => "The Alchemist",
    :author => "Paulo Coelho",
    :description => "Paulo Coelho's masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life's path, and, above all, following our dreams.",
    :cover_img => "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64d0d926231819.563534b740ae2.jpg"
)
book14 = Book.create!(
    :title => "The Sun Also Rises",
    :author => "Ernest Hemingway",
    :description => "The quintessential novel of the Lost Generation, The Sun Also Rises is one of Ernest Hemingway's masterpieces and a classic example of his spare but powerful writing style. A poignant look at the disillusionment and angst of the post-World War I generation, the novel introduces two of Hemingway's most unforgettable characters: Jake Barnes and Lady Brett Ashley. The story follows the flamboyant Brett and the hapless Jake as they journey from the wild nightlife of 1920s Paris to the brutal bullfighting rings of Spain with a motley group of expatriates. It is an age of moral bankruptcy, spiritual dissolution, unrealized love, and vanishing illusions. First published in 1926, The Sun Also Rises helped to establish Hemingway as one of the greatest writers of the twentieth century.",
    :cover_img => "https://i.pinimg.com/736x/2d/84/07/2d84075495dab9fbe51b1bba2021d5ee--ernest-hemingway-the-sun-also-rises.jpg"
)
book15 = Book.create!(
    :title => "The Secret Agent",
    :author => "Joseph Conrad",
    :description => "Mr Verloc, the secret agent, keeps a shop in London's Soho where he lives with his wife Winnie, her infirm mother, and her idiot brother, Stevie. When Verloc is reluctantly involved in an anarchist plot to blow up the Greenwich Observatory things go disastrously wrong, and what appears to be 'a simple tale' proves to involve politicians, policemen, foreign diplomats and London's fashionable society in the darkest and most surprising interrelations.",
    :cover_img => "https://dailylit.com/media/images/covers/98.jpg"
)
book16 = Book.create!(
    :title => "Women in Love",
    :author => "D.H. Lawrence",
    :description => "'An analytical study of sexual depravity' and 'an epic of vice' were two of the critical expressions which greeted the publication of 'Women in Love'. Yet Lawrence regarded this novel as his best book and F. R. Leavis considered it Lawrence's supreme masterpiece. The novel tells of the relationships of two sisters, Ursula and Gudrun, who live in a Midland colliery town in the years before the First World War. Ursula falls in love with Birkin (a thinly disguised portrait of Lawrence himself) and Gudrun has an intense but tragic affair with Gerald, the son of a local colliery owner.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/f2/7e/44/f27e44689bfab99482e674fd7c533a93.jpg"
)
book17 = Book.create!(
    :title => "On the Road",
    :author => "Jack Kerouac",
    :description => "On the Road chronicles Jack Kerouac's years traveling the North American continent with his friend Neal Cassady, 'a sideburned hero of the snowy West.' As 'Sal Paradise' and 'Dean Moriarty,' the two roam the country in a quest for self-knowledge and experience. Kerouac's love of America, his compassion for humanity, and his sense of language as jazz combine to make On the Road an inspirational work of lasting importance. Kerouac's classic novel of freedom and longing defined what it meant to be 'Beat' and has inspired every generation since its initial publication.",
    :cover_img => "https://i.pinimg.com/736x/88/c2/5e/88c25eb20dd750d70384937dbf55a4d2--travel-books-classic-books.jpg"
)
book18 = Book.create!(
    :title => "A Clockwork Orange",
    :author => "Anthony Burgess",
    :description => "A vicious fifteen-year-old 'droog' is the central character of this 1963 classic, whose stark terror was captured in Stanley Kubrick's magnificent film of the same title. In Anthony Burgess's nightmare vision of the future, where criminals take over after dark, the story is told by the central character, Alex, who talks in a brutal invented slang that brilliantly renders his and his friends' social pathology. A Clockwork Orange is a frightening fable about good and evil, and the meaning of human freedom. When the state undertakes to reform Alex—to 'redeem' him—the novel asks, 'At what cost?'",
    :cover_img => "http://www.adazing.com/wp-content/uploads/2012/09/a-clockwork-orange.jpg"
)
book19 = Book.create!(
    :title => "Heart of Darkness",
    :author => "Joseph Conrad",
    :description => "Marlow, a seaman and wanderer, recounts his physical and psychological journey in search of the infamous ivory trader Kurtz. Travelling up river to the heart of the African continent, he gradually becomes obsessed by the enigmatic, wraith-like figure. Marlow's discovery of how Kurtz has gained his position of power over the local people involves him in a radical questioning, not only of his own nature and values, but those of Western civilization. A haunting and hugely influential Modernist masterpiece, Heart of Darkness (1899) explores the limits of human existence as well as the nightmarish realities of imperialism.",
    :cover_img => "https://i.pinimg.com/736x/b1/d3/e5/b1d3e59ef429e897224b6fa19d065bf1--heart-of-darkness-book-design.jpg"
)
book20 = Book.create!(
    :title => "The Call of the Wild",
    :author => "Jack London",
    :description => "Rediscover Jack London’s beloved classic in this unique hardbound edition. First published as a serial in the Saturday Evening Post in 1903, The Call of the Wild has never been out of print. Follow a dog named Buck through violence and hardship, loyalty and loss, finally finding himself and his home in the Yukon wilderness. Truly a must-have for London fans, book lovers, and adventurers.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/67/9e/b8/679eb8a06b3b4274fd77642d52cb7ce4.jpg"
)
book21 = Book.create!(
    :title => "To Kill a Mockingbird",
    :author => "Harper Lee",
    :description => "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
    :cover_img => "http://wwwcdn.printmag.com/wp-content/uploads/JollyGoodThen.jpg"
)
book22 = Book.create!(
    :title => "The Catcher in the Rye",
    :author => "J.D. Salinger",
    :description => "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days. The boy himself is at once too simple and too complex for us to make any final comment about him or his story. Perhaps the safest thing we can say about Holden is that he was born in the world not just strongly attracted to beauty but, almost, hopelessly impaled on it. There are many voices in this novel: children's voices, adult voices, underground voices-but Holden's voice is the most eloquent of all. Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure. However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself. The pleasure he gives away, or sets aside, with all his heart. It is there for the reader who can handle it to keep.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/2a/43/78/2a43787a31076ad002f36ac2141453bf.jpg"
)
book23 = Book.create!(
    :title => "Lord of the Flies",
    :author => "William Golding",
    :description => "When a plane crashes on a remote island, a small group of schoolboys are the sole survivors. From the prophetic Simon and virtuous Ralph to the lovable Piggy and brutish Jack, each of the boys attempts to establish control as the reality - and brutal savagery - of their situation sets in. The boys' struggle to find a way of existing in a community with no fixed boundaries invites readers to evaluate the concepts involved in social and political constructs and moral frameworks. Ideas of community, leadership, and the rule of law are called into question as the reader has to consider who has a right to power, why, and what the consequences of the acquisition of power may be. Often compared to Catcher in the Rye, Lord of the Flies also represents a coming-of-age story of innocence lost.",
    :cover_img => "https://78.media.tumblr.com/a8624be26357af403b8824e1e71dbea9/tumblr_oebpqmOQAQ1t4ug4io1_r2_500.png"
)
book24 = Book.create!(
    :title => "One Flew Over the Cuckoo's Nest",
    :author => "Ken Kesey",
    :description => "In this classic of the 1960s, Ken Kesey's hero is Randle Patrick McMurphy, a boisterous, brawling, fun-loving rebel who swaggers into the world of a mental hospital and takes over. A lusty, life-affirming fighter, McMurphy rallies the other patients around him by challenging the dictatorship of Nurse Ratched. He promotes gambling in the ward, smuggles in wine and women, and openly defies the rules at every turn. But this defiance, which starts as a sport, soon develops into a grim struggle, an all-out war between two relentless opponents: Nurse Ratched, back by the full power of authority, and McMurphy, who has only his own indomitable will. What happens when Nurse Ratched uses her ultimate weapon against McMurphy provides the story's shocking climax.",
    :cover_img => "http://payload64.cargocollective.com/1/7/241708/3588599/oneflew.png"
)
book25 = Book.create!(
    :title => "Atonement",
    :author => "Ian McEwan",
    :description => "On a hot summer day in 1934, thirteen-year-old Briony Tallis witnesses a moment’s flirtation between her older sister, Cecilia, and Robbie Turner, the son of a servant and Cecilia’s childhood friend. But Briony’s incomplete grasp of adult motives—together with her precocious literary gifts—brings about a crime that will change all their lives. As it follows that crime’s repercussions through the chaos and carnage of World War II and into the close of the twentieth century, Atonement engages the reader on every conceivable level, with an ease and authority that mark it as a genuine masterpiece.",
    :cover_img => "https://images.gr-assets.com/books/1319045627l/9961.jpg"
)
book26 = Book.create!(
    :title => "Don Quixote",
    :author => "Miguel De Cervantes Saavedra",
    :description => "Don Quixote has become so entranced reading tales of chivalry that he decides to turn knight errant himself. In the company of his faithful squire, Sancho Panza, these exploits blossom in all sorts of wonderful ways. While Quixote's fancy often leads him astray—he tilts at windmills, imagining them to be giants—Sancho acquires cunning and a certain sagacity. Sane madman and wise fool, they roam the world together-and together they have haunted readers' imaginations for nearly four hundred years.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/01/14/d2/0114d24f3b3d19f16a5e0d0c3692b7f1.jpg"
)
book27 = Book.create!(
    :title => "Shogun",
    :author => "James Clavell",
    :description => "A bold English adventurer. An invincible Japanese warlord. A beautiful woman torn between two ways of life, two ways of love. All brought together in an extraordinary saga of a time and a place aflame with conflict, passion, ambition, lust, and the struggle for power.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/c2/6d/46/c26d467efb9a3ce556b32793a87d3ec2.jpg"
)
book28 = Book.create!(
    :title => "A Game of Thrones",
    :author => "George R.R. Martin",
    :description => "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king’s new Hand, an appointment that threatens to sunder not only his family but the kingdom itself.",
    :cover_img => "https://orig00.deviantart.net/29c9/f/2012/252/b/d/a_game_of_thrones_book_cover_by_nateblunt-d5e6oxt.jpg"
)
book29 = Book.create!(
    :title => "The Sound and the Fury",
    :author => "William Faulkner",
    :description => "The Sound and the Fury is the tragedy of the Compson family, featuring some of the most memorable characters in literature: beautiful, rebellious Caddy; the manchild Benjy; haunted, neurotic Quentin; Jason, the brutal cynic; and Dilsey, their black servant. Their lives fragmented and harrowed by history and legacy, the character’s voices and actions mesh to create what is arguably Faulkner’s masterpiece and  one of the greatest novels of the twentieth century.",
    :cover_img => "https://c1.staticflickr.com/3/2634/3941739119_0d88aa3ffd.jpg"
)
book30 = Book.create!(
    :title => "IT",
    :author => "Stephen King",
    :description => "Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real. They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.",
    :cover_img => "https://i.pinimg.com/736x/df/fd/10/dffd10168d6a72b0eaee36bc4d028f56.jpg"
)
book31 = Book.create!(
    :title => "The Crying of Lot 49",
    :author => "Thomas Pynchon",
    :description => "Suffused with rich satire, chaotic brilliance, verbal turbulence and wild humor, The Crying of Lot 49 opens as Oedipa Maas discovers that she has been made executrix of a former lover's estate. The performance of her duties sets her on a strange trail of detection, in which bizarre characters crowd in to help or confuse her. But gradually, death, drugs, madness and marriage combine to leave Oedipa in isolation on the threshold of revelation, awaiting the Crying of Lot 49.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/21/e2/35/21e23583eb6151d57c4830369d3955df.jpg"
)
book32 = Book.create!(
    :title => "American Psycho",
    :author => "Bret Easton Ellis",
    :description => "Patrick Bateman is twenty-six and he works on Wall Street, he is handsome, sophisticated, charming and intelligent. He is also a psychopath. Taking us to head-on collision with America's greatest dream—and its worst nightmare—American Psycho is bleak, bitter, black comedy about a world we all recognise but do not wish to confront.",
    :cover_img => "http://payload.cargocollective.com/1/4/138466/1834335/psyko1.jpg"
)
book33 = Book.create!(
    :title => "Lolita",
    :author => "Vladimir Nabokov",
    :description => "Awe and exhiliration--along with heartbreak and mordant wit--abound in Lolita, Nabokov's most famous and controversial novel, which tells the story of the aging Humbert Humbert's obsessive, devouring, and doomed passion for the nymphet Dolores Haze. Lolita is also the story of a hypercivilized European colliding with the cheerful barbarism of postwar America. Most of all, it is a meditation on love--love as outrage and hallucination, madness and transformation.",
    :cover_img => "https://flashbak.com/wp-content/uploads/2014/11/Lolita-Penguin-eating-apple.jpg"
)
book34 = Book.create!(
    :title => "Death of a Salesman",
    :author => "Arthur Miller",
    :description => "Willy Loman, has spent his life following the American way, living out his belief in salesmanship as a way to reinvent himself. But somehow the riches and respect he covets have eluded him. At age 63, he searches for the moment his life took a wrong turn, the moment of betrayal that undermined his relationship with his wife and destroyed his relationship with Biff, the son in whom he invested his faith. Willy lives in a fragile world of elaborate excuses and daydreams, conflating past and present in a desperate attempt to make sense of himself and of a world that once promised so much.",
    :cover_img => "http://static1.squarespace.com/static/53698c85e4b06a0aae8f07f4/536d7b3fe4b0ea124cfd3bdf/57c22fd91b631b53bee617c7/1472344493393/death_of_a_salesman_book_cover_by_fezthepalindrome-d7evz29.jpg?format=1000w"
)
book35 = Book.create!(
    :title => "The Hobbit",
    :author => "J.R.R. Tolkien",
    :description => "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
    :cover_img => "https://pre00.deviantart.net/5fa8/th/pre/i/2015/079/f/c/the_hobbit_book_cover_by_dreams_design-d8mezqk.jpg"
)
book36 = Book.create!(
    :title => "The Brothers Karamazov",
    :author => "Fyodor Dostoyevsky",
    :description => "The Brothers Karamasov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the 'wicked and sentimental' Fyodor Pavlovich Karamazov and his three sons―the impulsive and sensual Dmitri; the coldly rational Ivan; and the healthy, red-cheeked young novice Alyosha. Through the gripping events of their story, Dostoevsky portrays the whole of Russian life, is social and spiritual striving, in what was both the golden age and a tragic turning point in Russian culture.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/97/e0/be/97e0bef1578b8969287d676361dff900.jpg"
)
book37 = Book.create!(
    :title => "The Hitchhiker's Guide to the Galaxy",
    :author => "Douglas Adams",
    :description => "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker’s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together, this dynamic pair began a journey through space aided by a galaxyful of fellow travelers: Zaphod Beeblebrox, the two-headed, three-armed, ex-hippie and totally out-to-lunch president of the galaxy; Trillian (formerly Tricia McMillan), Zaphod’s girlfriend, whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; and Veet Voojagig, a former graduate student obsessed with the disappearance of all the ballpoint pens he’s bought over the years. Where are these pens? Why are we born? Why do we die? For all the answers, stick your thumb to the stars!",
    :cover_img => "http://4.bp.blogspot.com/-EGRD62OFTOg/UA6jfesbomI/AAAAAAAAATw/73kp7l1asnE/s1600/h2g2-01+copy.png"
)
book38 = Book.create!(
    :title => "Life of Pi",
    :author => "Yann Martel",
    :description => "The son of a zookeeper, Pi Patel has an encyclopedic knowledge of animal behavior and a fervent love of stories. When Pi is sixteen, his family emigrates from India to North America aboard a Japanese cargo ship, along with their zoo animals bound for new homes. The ship sinks. Pi finds himself alone in a lifeboat, his only companions a hyena, an orangutan, a wounded zebra, and Richard Parker, a 450-pound Bengal tiger. Soon the tiger has dispatched all but Pi, whose fear, knowledge, and cunning allow him to coexist with Richard Parker for 227 days while lost at sea. When they finally reach the coast of Mexico, Richard Parker flees to the jungle, never to be seen again. The Japanese authorities who interrogate Pi refuse to believe his story and press him to tell them 'the truth.' After hours of coercion, Pi tells a second story, a story much less fantastical, much more conventional - but is it more true?",
    :cover_img => "https://mir-s3-cdn-cf.behance.net/project_modules/disp/37e32722999351.5631ba72c3110.jpg"
)
book39 = Book.create!(
    :title => "Dune",
    :author => "Frank Herbert",
    :description => "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib. He would avenge the traitorous plot against his noble family — and would bring to fruition humankind’s most ancient and unattainable dream. A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.",
    :cover_img => "https://i.pinimg.com/736x/76/3c/41/763c4112e3050873ab7b298247ef07fd--book-challenge-student-life.jpg"
)
book40 = Book.create!(
    :title => "Jurassic Park",
    :author => "Michael Crichton",
    :description => "An astonishing technique for recovering and cloning dinosaur DNA has been discovered. Now humankind’s most thrilling fantasies have come true. Creatures extinct for eons roam Jurassic Park with their awesome presence and profound mystery, and all the world can visit them—for a price. Until something goes wrong... In Jurassic Park, Michael Crichton taps all his mesmerizing talent and scientific brilliance to create his most electrifying technothriller.",
    :cover_img => "https://img00.deviantart.net/dd65/i/2015/089/2/e/jurassic_park_book_cover_re_design_by_ellyrussellart-d8nsow1.jpg"
)
book41 = Book.create!(
    :title => "In Cold Blood",
    :author => "Truman Capote",
    :description => "On November 15, 1959, in the small town of Holcomb, Kansas, four members of the Clutter family were savagely murdered by blasts from a shotgun held a few inches from their faces. There was no apparent motive for the crime, and there were almost no clues. As Truman Capote reconstructs the murder and the investigation that led to the capture, trial, and execution of the killers, he generates both mesmerizing suspense and astonishing empathy. In Cold Blood is a work that transcends its moment, yielding poignant insights into the nature of American violence.",
    :cover_img => "http://www.santiagocasares.com/wp-content/uploads/2010/10/In-Cold-Blood.jpg"
)
book42 = Book.create!(
    :title => "Blood Meridian",
    :author => "Cormac McCarthy",
    :description => "An epic novel of the violence and depravity that attended America's westward expansion, Blood Meridian brilliantly subverts the conventions of the Western novel and the mythology of the 'wild west.' Based on historical events that took place on the Texas-Mexico border in the 1850s, it traces the fortunes of the Kid, a fourteen-year-old Tennesseean who stumbles into the nightmarish world where Indians are being murdered and the market for their scalps is thriving.",
    :cover_img => "https://s-media-cache-ak0.pinimg.com/originals/7d/fb/ba/7dfbba140757210dfc301c5766997075.jpg"
)
book43 = Book.create!(
    :title => "Sherlock Holmes",
    :author => "Arthur Conan Doyle",
    :description => "Sherlock Holmes is a fictional detective of the late 19th and early 20th centuries, who first appeared in publication in 1887. He is the creation of Scottish born author and physician Sir Arthur Conan Doyle. A brilliant London-based detective, Holmes is famous for his intellectual prowess, and is renowned for his skillful use of deductive reasoning (somewhat mistakenly - see inductive reasoning) and astute observation to solve difficult cases. He is arguably the most famous fictional detective ever created, and is one of the best known and most universally recognizable literary characters in any genre.",
    :cover_img => "https://covers.openlibrary.org/b/id/7885533-L.jpg"
)
book44 = Book.create!(
    :title => "The Princess Bride",
    :author => "William Goldman",
    :description => "Anyone who lived through the 1980s may find it impossible—inconceivable, even—to equate The Princess Bride with anything other than the sweet, celluloid romance of Westley and Buttercup, but the film is only a fraction of the ingenious storytelling you'll find in these pages. Rich in character and satire, the novel is set in 1941 and framed cleverly as an 'abridged' retelling of a centuries-old tale set in the fabled country of Florin that's home to 'Beasts of all natures and descriptions. Pain. Death. Brave men. Coward men. Strongest men. Chases. Escapes. Lies. Truths. Passions.'",
    :cover_img => "http://prodimage.images-bn.com/pimages/9780544173767_p0_v2_s1200x630.jpg"
)
book45 = Book.create!(
    :title => "Fire and Fury: Inside the Trump White House",
    :author => "Michael Wolff",
    :description => "The first nine months of Donald Trump's term were stormy, outrageous—and absolutely mesmerizing. Now, thanks to his deep access to the West Wing, bestselling author Michael Wolff tells the riveting story of how Trump launched a tenure as volatile and fiery as the man himself.",
    :cover_img => "https://pbs.twimg.com/media/DS-PMEHUMAEn_31.jpg:large"
)

Review.destroy_all

review1 = Review.create!(
    book_id: book2.id,
    user_id: user3.id,
    body: "Jay Gatsby was pretty sneaky!",
    rating: 5
)
review2 = Review.create!(
    book_id: book44.id,
    user_id: user7.id,
    body: "I wish I had a man to hug and kiss, just like him!",
    rating: 5
)
review3 = Review.create!(
    book_id: book45.id,
    user_id: user4.id,
    body: "FAKE NEWS!",
    rating: 1
)
review4 = Review.create!(
    book_id: book45.id,
    user_id: user6.id,
    body: "Amazing. Yuge. Loved it.",
    rating: 5
)
review5 = Review.create!(
    book_id: book45.id,
    user_id: user8.id,
    body: "This guy clearly has my best interest at heart.",
    rating: 3
)
review6 = Review.create!(
    book_id: book3.id,
    user_id: user12.id,
    body: "OMG my favorite childhood book!",
    rating: 5
)
review7 = Review.create!(
    book_id: book40.id,
    user_id: user11.id,
    body: "Historically accurate.",
    rating: 4
)
review8 = Review.create!(
    book_id: book4.id,
    user_id: user14.id,
    body: "Now, be brave and don't look back. Don't look back.",
    rating: 5
)
review9 = Review.create!(
    book_id: book15.id,
    user_id: user3.id,
    body: "Yet another sneaky classic.",
    rating: 5
)
review10 = Review.create!(
    book_id: book26.id,
    user_id: user5.id,
    body: "Such good. Much wow. Must read right meow!",
    rating: 5
)
review11 = Review.create!(
    book_id: book20.id,
    user_id: user13.id,
    body: "Buck is such a bad ass.",
    rating: 5
)
review12 = Review.create!(
    book_id: book18.id,
    user_id: user4.id,
    body: "Hey this is a pretty horrorshow idea...",
    rating: 5
)
review13 = Review.create!(
    book_id: book10.id,
    user_id: user9.id,
    body: "This dude is my hero!",
    rating: 5
)
review14 = Review.create!(
    book_id: book13.id,
    user_id: user10.id,
    body: "This book was a real page turner!",
    rating: 5
)
review15 = Review.create!(
    book_id: book13.id,
    user_id: user15.id,
    body: "I agree!",
    rating: 5
)
review16 = Review.create!(
    book_id: book8.id,
    user_id: user12.id,
    body: "These dystopian novels aren't too far from the truth..",
    rating: 4
)
review17 = Review.create!(
    book_id: book9.id,
    user_id: user13.id,
    body: "Tralfamadorians! You can't spell slaughter without laughter.",
    rating: 5
)
review18 = Review.create!(
    book_id: book11.id,
    user_id: user15.id,
    body: "I literally read this book in one sitting",
    rating: 5
)
review19 = Review.create!(
    book_id: book17.id,
    user_id: user2.id,
    body: "This book taught me how to carpe all them diems.",
    rating: 5
)
review20 = Review.create!(
    book_id: book30.id,
    user_id: user5.id,
    body: "vewy scawy @.@",
    rating: 4
)
review21 = Review.create!(
    book_id: book23.id,
    user_id: user14.id,
    body: "Was this Anakin's idea?",
    rating: 3
)
review22 = Review.create!(
    book_id: book23.id,
    user_id: user13.id,
    body: "Should've used a bear trap.",
    rating: 1
)
review23 = Review.create!(
    book_id: book28.id,
    user_id: user10.id,
    body: "Ned Stark: the Loss of a Boss.",
    rating: 4
)
review24 = Review.create!(
    book_id: book32.id,
    user_id: user4.id,
    body: "I don't get it, why's everyone making him out to be the bad guy? He's rich!",
    rating: 1
)
review25 = Review.create!(
    book_id: book14.id,
    user_id: user1.id,
    body: "You damn right it does! *flex*",
    rating: 5
)
review26 = Review.create!(
    book_id: book34.id,
    user_id: user10.id,
    body: "I feel bad for this noob...",
    rating: 4
)
review27 = Review.create!(
    book_id: book11.id,
    user_id: user14.id,
    body: "These wizards ain't got nothing on the force!",
    rating: 2
)
review28 = Review.create!(
    book_id: book28.id,
    user_id: user15.id,
    body: "When will the Winds of Winter ever come out? MUST HAVE",
    rating: 5
)
review29 = Review.create!(
    book_id: book33.id,
    user_id: user3.id,
    body: "This book is too sneaky.. Irrefutably well-written, cuz it made me feel weird.",
    rating: 4
)
review30 = Review.create!(
    book_id: book38.id,
    user_id: user2.id,
    body: "zen master",
    rating: 5
)
