# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all

book1 = Book.create!(
    :title => "Ulysses",
    :author => "James Joyce",
    :description => "Ulysses is a novel by Irish writer James Joyce. It was first serialised in parts in the American journal The Little Review from March 1918 to December 1920, and then published in its entirety by Sylvia Beach in February 1922, in Paris. It is considered to be one of the most important works of Modernist literature, and has been called 'a demonstration and summation of the entire movement'. 'Before Joyce, no writer of fiction had so foregrounded the process of thinking.' However, even proponents of Ulysses such as Anthony Burgess have described the book as 'inimitable, and also possibly mad'.",
    :cover_img => "https://images.gr-assets.com/books/1428891345l/338798.jpg"
)
book2 = Book.create!(
    :title => "The Great Gatsby",
    :author => "F. Scott Fitzgerald",
    :description => "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
    :cover_img => "https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg"
)
book3 = Book.create!(
    :title => "Lolita",
    :author => "Vladimir Nabokov",
    :description => "Awe and exhiliration--along with heartbreak and mordant wit--abound in Lolita, Nabokov's most famous and controversial novel, which tells the story of the aging Humbert Humbert's obsessive, devouring, and doomed passion for the nymphet Dolores Haze. Lolita is also the story of a hypercivilized European colliding with the cheerful barbarism of postwar America. Most of all, it is a meditation on love--love as outrage and hallucination, madness and transformation.",
    :cover_img => "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1411/9780141182537.jpg"
)
book4 = Book.create!(
    :title => "Brave New World",
    :author => "Aldous Huxley",
    :description => "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order--all at the cost of our freedom, full humanity, and perhaps also our souls. 'A genius [who] who spent his life decrying the onward march of the Machine' (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites.",
    :cover_img => "http://vividbiology.com/shop/wp-content/uploads/sites/5/2016/05/posters8.jpg"
)
book5 = Book.create!(
    :title => "The Sound and the Fury",
    :author => "William Faulkner",
    :description => "The Sound and the Fury is the tragedy of the Compson family, featuring some of the most memorable characters in literature: beautiful, rebellious Caddy; the manchild Benjy; haunted, neurotic Quentin; Jason, the brutal cynic; and Dilsey, their black servant. Their lives fragmented and harrowed by history and legacy, the character’s voices and actions mesh to create what is arguably Faulkner’s masterpiece and  one of the greatest novels of the twentieth century.",
    :cover_img => "https://c1.staticflickr.com/3/2634/3941739119_0d88aa3ffd.jpg"
)
book6 = Book.create!(
    :title => "Catch-22",
    :author => "Joseph Heller",
    :description => "At the heart of Catch-22 resides the incomparable, malingering bombardier, Yossarian, a hero endlessly inventive in his schemes to save his skin from the horrible chances of war. His problem is Colonel Cathcart, who keeps raising the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempts to excuse himself from the perilous missions that he's committed to flying, he's trapped by the Great Loyalty Oath Crusade, the bureaucratic rule from which the book takes its title: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes the necessary formal request to be relieved of such missions, the very act of making the request proves that he's sane and therefore, ineligible to be relieved.",
    :cover_img => "https://upload.wikimedia.org/wikipedia/en/9/99/Catch22.jpg"
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
    :cover_img => "https://images-na.ssl-images-amazon.com/images/I/718-Tsr7SCL.jpg"
)
book11 = Book.create!(
    :title => "Tender Is the Night",
    :author => "F. Scott Fitzgerald",
    :description => "Set on the French Riviera in the late 1920s, Tender Is the Night is the tragic romance of the young actress Rosemary Hoyt and the stylish American couple Dick and Nicole Diver. A brilliant young psychiatrist at the time of his marriage, Dick is both husband and doctor to Nicole, whose wealth goads him into a lifestyle not his own, and whose growing strength highlights Dick's harrowing demise. A profound study of the romantic concept of character, Tender Is the Night is lyrical, expansive, and hauntingly evocative.",
    :cover_img => "https://images-na.ssl-images-amazon.com/images/I/414IAO3jGZL._SX326_BO1,204,203,200_.jpg"
)
book12 = Book.create!(
    :title => "Animal Farm",
    :author => "George Orwell",
    :description => "As ferociously fresh as it was more than a half century ago, this remarkable allegory of a downtrodden society of overworked, mistreated animals, and their quest to create a paradise of progress, justice, and equality is one of the most scathing satires ever published. As we witness the rise and bloody fall of the revolutionary animals, we begin to recognize the seeds of totalitarianism in the most idealistic organization; and in our most charismatic leaders, the souls of our cruelest oppressors.",
    :cover_img => "https://i.pinimg.com/736x/92/6f/d7/926fd7c8fb5e26fea0b8a2a7663fdad4--george-orwell-farms.jpg"
)
book13 = Book.create!(
    :title => "As I Lay Dying",
    :author => "William Faulkner",
    :description => "As I Lay Dying is Faulkner's harrowing account of the Bundren family's odyssey across the Mississippi countryside to bury Addie, their wife and mother. Told in turns by each of the family members—including Addie herself—the novel ranges in mood from dark comedy to the deepest pathos.",
    :cover_img => "https://images.gr-assets.com/books/1451810782l/77013.jpg"
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
    :description => "Mr Verloc, the secret agent, keeps a shop in London's Soho where he lives with his wife Winnie, her infirm mother, and her idiot brother, Stevie. When Verloc is reluctantly involved in an anarchist plot to blow up the Greenwich Observatory things go disastrously wrong, and what appears to be "a simple tale" proves to involve politicians, policemen, foreign diplomats and London's fashionable society in the darkest and most surprising interrelations.",
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
    :cover_img => "https://static1.squarespace.com/static/586c5b786b8f5b6deb3be50d/586c5beb9f7456a21273a7ac/5875336a46c3c4eed18c34e4/1488398990995/Heart+Of+Darkness+Book+Cover.jpg?format=1000w"
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
    :cover_img => "https://images-na.ssl-images-amazon.com/images/I/51ivYXS1lmL._SX322_BO1,204,203,200_.jpg"
)
book26 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book27 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book28 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book29 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book30 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book31 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book32 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book33 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book34 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book35 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book36 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book37 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book38 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book39 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book40 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book41 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book42 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book43 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book44 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book45 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book46 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book47 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book48 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book49 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)
book50 = Book.create!(
    :title => "",
    :author => "",
    :description => "",
    :cover_img => ""
)