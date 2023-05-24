import { initDb } from "./utils/db";
import Heroes from "./models/super_hero";

const superHeroes = [
  {
    nickname: "Superman",
    real_name: "Clark Kent",
    origin_description: "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    superpowers: [
      "solar energy absorption and healing factor",
      "solar flare and heat vision",
      "solar invulnerability",
      "flight"
    ],
    catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg",
      "https://people.com/thmb/oiI9Lq1zfpuGXyc3GCcVeM9UEko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x59:736x61)/henry-cavill-superman-102722-1-1151ea6febc649eebbcdabf9ef7570f1.jpg",
      "https://www.estadao.com.br/resizer/H27Z1M94TLnBdzhYLkePK76LtAU=/1200x1200/filters:format(jpg):quality(80):focal(544x144:554x154)/cloudfront-us-east-1.images.arcpublishing.com/estadao/3L7MOZOSPFKHJIJCLI52X5YNYA.jpg"
    ]
  },
  {
    nickname: "Spider-Man",
    real_name: "Peter Parker",
    origin_description: "After being bitten by a radioactive spider, Peter Parker gains spider-like abilities and becomes the crime-fighting superhero known as Spider-Man.",
    superpowers: [
      "superhuman strength",
      "agility",
      "web-slinging",
      "spider-sense"
    ],
    catch_phrase: "With great power comes great responsibility.",
    images: [
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww&w=1000&q=80",
      "https://wallpapers.com/images/featured/ph3fw6k03ddbmbmh.jpg",
      "https://www.themarysue.com/wp-content/uploads/2021/09/Spider-Man-3.jpeg?resize=1200%2C600"
    ]
  },
  {
    nickname: "Batman",
    real_name: "Bruce Wayne",
    origin_description: "Witnessing the murder of his parents as a child, Bruce Wayne dedicates his life to fighting crime in Gotham City as the masked vigilante known as Batman.",
    superpowers: [
      "intelligence",
      "wealth",
      "combat skills",
      "advanced gadgets"
    ],
    catch_phrase: "I'm Batman.",
    images: [
      "https://www.digitaltrends.com/wp-content/uploads/2019/01/justice-league-batman.jpg?fit=720%2C480&p=1",
      "https://www.hollywoodinsider.com/wp-content/uploads/2022/11/The-Hollywood-Insider-Batman-2-News.jpg",
      "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/02/16/gizmodo-19.png?quality=80&resize=1280,720"
    ]
  },
  {
    nickname: "Wonder Woman",
    real_name: "Diana Prince",
    origin_description: "Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny.",
    superpowers: [
      "superhuman strength",
      "speed",
      "durability",
      "immortality"
    ],
    catch_phrase: "I will fight for those who cannot fight for themselves.",
    images: [
      "https://people.com/thmb/O4au7o8qtmbV9qC2SMQfPm7rg6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(675x379:677x381)/gal-gadot-2000-f893bc7afe9b44be91663eb17cc17750.jpg",
      "https://cdn.vox-cdn.com/thumbor/Ia_Cyth1PDyN8nLltrMSFv85rwY=/0x0:1280x640/1200x800/filters:focal(467x58:671x262)/cdn.vox-cdn.com/uploads/chorus_image/image/55115281/wonderwoman2.0.jpg",
      "https://pyxis.nymag.com/v1/imgs/00a/f55/ac98cd4a59542bd608c377c6fe53c9a17c-01-wonder-woman.2x.rsocial.w600.jpg"
    ]
  },
  {
    nickname: "Captain America",
    real_name: "Steve Rogers",
    origin_description: "Steve Rogers, a frail young man, volunteers for an experiment that transforms him into the super soldier known as Captain America. He fights against evil forces during World War II and continues to protect the world in the present day.",
    superpowers: [
      "enhanced strength",
      "agility",
      "healing",
      "indestructible shield"
    ],
    catch_phrase: "I can do this all day.",
    images: [
      "https://www.denofgeek.com/wp-content/uploads/2021/01/webstory-captain-america-cover03.jpg",
      "https://i.ytimg.com/vi/yXbjCMtkeqo/maxresdefault.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNC9l2HHJfundbKe16RKxkoEa26BxUfDu2w&usqp=CAU"
    ]
  },
  {
    nickname: "Hulk",
    real_name: "Bruce Banner",
    origin_description: "Dr. Bruce Banner becomes the Hulk, a green-skinned creature with incredible strength, whenever he gets angry or emotionally stressed.",
    superpowers: [
      "superhuman strength",
      "regenerative healing",
      "increased durability",
      "unlimited rage"
    ],
    catch_phrase: "Hulk smash!",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHkn-DFnRhGZxVhm9aZmPlvqW9vbtIoURfggRxiFkVNA0-7mXWk1FfMTszSmA8FR3PFE&usqp=CAU",
      "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/30/Pictures/_19298b80-a255-11ea-b043-295af9ca78f2.jpg",
      "https://www.hollywoodinsider.com/wp-content/uploads/2022/09/The-Hollywood-Insider-The-Hulk-Movie.png"
    ]
  },
  {
    nickname: "Thor",
    real_name: "Thor Odinson",
    origin_description: "Thor, the Norse god of thunder, wields his mighty hammer Mjolnir to protect Earth and the realms of Asgard from various threats.",
    superpowers: [
      "superhuman strength",
      "weather manipulation",
      "flight",
      "longevity"
    ],
    catch_phrase: "I am Thor, son of Odin!",
    images: [
      "https://www.wearemoviegeeks.com/wp-content/uploads/thor-movie-poster-10205564481.jpg",
      "https://comics2film.com/images/1056/594/1/thor-the-dark-world-chris-hemsworth-marvel-studios-wallpaper.jpg",
      "https://www.hollywoodreporter.com/wp-content/uploads/2022/04/MCDTHRA_EC110.jpg"
    ]
  },
  {
    nickname: "Black Widow",
    real_name: "Natasha Romanoff",
    origin_description: "Natasha Romanoff, also known as Black Widow, is a highly skilled spy and assassin. She fights alongside the Avengers to save the world from various threats.",
    superpowers: [
      "expert martial artist",
      "espionage",
      "weapons proficiency"
    ],
    catch_phrase: "I'm always picking up after you boys.",
    images: [
      "https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810",
      "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/10/31/Pictures/_fce23e18-9f2e-11e6-93ed-ab826829dd0b.jpg",
      "https://cdn.mos.cms.futurecdn.net/4L75tkWVDgKtGe7kfoEGP6.jpg"
    ]
  },
  {
    nickname: "Iron Man",
    real_name: "Tony Stark",
    origin_description: "Tony Stark, a genius billionaire, creates a powered suit of armor to save his own life and becomes the superhero known as Iron Man.",
    superpowers: [
      "high-tech suit",
      "genius-level intellect",
      "flight",
      "repulsor beams"
    ],
    catch_phrase: "I am Iron Man.",
    images: [
      "https://resizing.flixster.com/jTU4RAjnwcZAconup5QZkH2Emb8=/206x305/v2/https://flxt.tmsimg.com/assets/p170620_p_v8_az.jpg",
      "https://cdn.marvel.com/content/1x/is_ironman_udh_l178_3840x2160_zxx_v1_110520.png",
      "https://www.hollywoodreporter.com/wp-content/uploads/2016/02/iron_man_2_2010_rr007.jpg?w=1296"
    ]
  },
  {
    nickname: "Captain Marvel",
    real_name: "Carol Danvers",
    origin_description: "Carol Danvers gains superhuman powers after an alien device explodes near her. She becomes Captain Marvel and uses her new abilities to protect Earth and the galaxy.",
    superpowers: [
      "superhuman strength",
      "energy projection",
      "flight",
      "enhanced durability"
    ],
    catch_phrase: "Higher, further, faster.",
    images: [
      "https://media.vogue.fr/photos/5c7ed01e08858f0dc0e2d287/2:3/w_2560%2Cc_limit/capmarvel.jpg",
      "https://images.moviesanywhere.com/f6254a2654d750658f8df42332a5ce24/a30837cb-1bac-4a04-8603-f224fab8f480.jpg",
      "https://c.ndtvimg.com/2019-03/t615884g_captain-marvel-facebook-_625x300_07_March_19.jpg"
    ]
  },
  {
    nickname: "Wolverine",
    real_name: "Logan",
    origin_description: "Wolverine, also known as Logan, is a mutant with retractable claws and a regenerative healing ability. He fights alongside the X-Men to protect mutants and humans alike.",
    superpowers: [
      "adamantium claws",
      "regenerative healing",
      "enhanced senses",
      "superhuman strength"
    ],
    catch_phrase: "I'm the best there is at what I do.",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Wolverine_AKA_James_%22Logan%22_Howlett.png/220px-Wolverine_AKA_James_%22Logan%22_Howlett.png",
      "https://i.ytimg.com/vi/u1VCP3O8wG0/maxresdefault.jpg",
      "https://assetsio.reedpopcdn.com/319879966_1219712415559369_2430883062931850206_n.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    ]
  },
  {
    nickname: "Green Lantern",
    real_name: "Hal Jordan",
    origin_description: "Hal Jordan, a test pilot, is chosen by the Green Lantern Corps to be the protector of Sector 2814. He uses his power ring to create energy constructs and fight against evil.",
    superpowers: [
      "power ring",
      "flight",
      "energy constructs",
      "space travel"
    ],
    catch_phrase: "In brightest day, in blackest night, no evil shall escape my sight!",
    images: [
      "https://i0.wp.com/thatsitguys.com/wp-content/uploads/2011/06/green_lantern_poster1.jpg?ssl=1",
      "https://static01.nyt.com/images/2011/06/17/movies/17lantern-span/17lantern-span-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      "https://www.hollywoodreporter.com/wp-content/uploads/2016/03/green_lantern_still.jpg"
    ]
  },
  {
    nickname: "Flash",
    real_name: "Barry Allen",
    origin_description: "Barry Allen gains superhuman speed after being struck by lightning and doused in chemicals. He becomes the superhero known as the Flash, using his speed to fight crime and save lives.",
    superpowers: [
      "superhuman speed",
      "time travel",
      "speed force",
      "accelerated healing"
    ],
    catch_phrase: "I'm the fastest man alive.",
    images: [
      "https://cdn.mos.cms.futurecdn.net/E9iHUbK9Lq4YdxG8EsDQ87.jpg",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/flash-movie-ezra-miller-hype-good.jpg",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/ezra-miller-as-barry-allen-looking-up-in-the-flash-movie.jpg"
    ]
  },
  {
    nickname: "Aquaman",
    real_name: "Arthur Curry",
    origin_description: "Arthur Curry, also known as Aquaman, is the half-human, half-Atlantean king of Atlantis. He possesses superhuman strength and the ability to communicate with marine life.",
    superpowers: [
      "superhuman strength",
      "swimming at supersonic speeds",
      "control over sea life",
      "ability to breathe underwater"
    ],
    catch_phrase: "I am the protector of the deep.",
    images: [
      "https://static.dc.com/dc/files/default_images/Movies-Thumb_Aquaman2018_single_5bedc81a90d565.98093378.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjE2MDg1OTg5NF5BMl5BanBnXkFtZTgwMTIwMTg0NjM@._V1_.jpg",
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2018/11/Aquaman-5.jpg"
    ]
  },
  {
    nickname: "Black Panther",
    real_name: "T'Challa",
    origin_description: "T'Challa, the king of the fictional African nation of Wakanda, dons the mantle of the Black Panther and gains enhanced abilities through the consumption of the heart-shaped herb.",
    superpowers: [
      "enhanced strength",
      "agility",
      "vibranium suit",
      "knowledge and skills of the Black Panther"
    ],
    catch_phrase: "Wakanda forever!",
    images: [
      "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/300764/black-panther_marvel_gallery_636ab4d6183f0.jpg",
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/42/1508170562-black-panther-poster.jpg",
      "https://m.media-amazon.com/images/I/A1xg6fEaPQL._AC_UF1000,1000_QL80_.jpg"
    ]
  },
  {
    nickname: "Doctor Strange",
    real_name: "Stephen Strange",
    origin_description: "Dr. Stephen Strange, a skilled neurosurgeon, loses the use of his hands in a car accident. He travels to Kamar-Taj and becomes the Sorcerer Supreme, protecting Earth from mystical threats.",
    superpowers: [
      "mastery of mystic arts",
      "time manipulation",
      "interdimensional travel",
      "energy projection"
    ],
    catch_phrase: "I've come to bargain.",
    images: [
      "https://static.onecms.io/wp-content/uploads/sites/6/2016/10/dr-strange.jpg",
      "https://catholicreview.org/wp-content/uploads/2022/05/doctor-strange-768x512.jpg",
      "https://dci832c741skk.cloudfront.net/assets/files/30235/movie-review-dr-strange-multiverse-of-madness.800x600.jpg"
    ]
  },
  {
    nickname: "Hawkeye",
    real_name: "Clint Barton",
    origin_description: "Clint Barton, a skilled archer and marksman, becomes a member of the Avengers. He uses his exceptional accuracy and combat skills to fight against threats to the world.",
    superpowers: [
      "master archer",
      "expert marksman",
      "combat skills",
      "tactical expertise"
    ],
    catch_phrase: "Just a guy with a bow.",
    images: [
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/hawkeye-movies-in-order.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3IEJvKvL4IM_L3qoEUOFVsLbOtpZDXGusQ&usqp=CAU",
      "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1528743937299-0I47N8OAZQS7SPKGLIMI/image-asset.jpeg"
    ]
  },
  {
    nickname: "Jean Grey",
    real_name: "Jean Grey",
    origin_description: "Jean Grey, a mutant with powerful telepathic and telekinetic abilities, becomes one of the most powerful members of the X-Men. She struggles to control her immense powers and the dark Phoenix force within her.",
    superpowers: [
      "telepathy",
      "telekinesis",
      "psionic energy manipulation",
      "precognition"
    ],
    catch_phrase: "I'm more than the Phoenix!",
    images: [
      "https://static.tvtropes.org/pmwiki/pub/images/20201017_132214.jpg",
      "https://pyxis.nymag.com/v1/imgs/bff/644/2df810474793f35cc2a8279b0238647c0d-23-Dark-Phoenix-XMen.2x.h473.w710.jpg",
      "https://compote.slate.com/images/947222e7-d7be-4738-a8e2-2d3ec931a38a.jpeg?crop=1560%2C1040%2Cx0%2Cy0"
    ]
  },
  {
    nickname: "Storm",
    real_name: "Ororo Munroe",
    origin_description: "Ororo Munroe, also known as Storm, is a mutant with the ability to manipulate weather. She is a member of the X-Men and uses her powers to protect both mutants and humans.",
    superpowers: [
      "weather manipulation",
      "flight",
      "atmospheric energy absorption",
      "enhanced senses"
    ],
    catch_phrase: "I am the goddess of the elements.",
    images: [
      "https://e0.pxfuel.com/wallpapers/20/1017/desktop-wallpaper-halle-berry-as-storm-i-love-her-character-halle-berry-x-men-storm-thumbnail.jpg",
      "https://www.giantfreakinrobot.com/wp-content/uploads/2021/01/storm-x-men-900x619.jpg",
      "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/uvdbsbsnf1gk1xb8pmxc.jpg"
    ]
  }
]

const syncDb = async () => {
  console.log('START');

  initDb();

  await Heroes.sync({ force: true }).catch((error) =>
    console.log(error.message));

  Promise.all(superHeroes.map((hero) => Heroes.create(hero)))
    .then(() => console.log('Success'))
    .catch((error) => console.log(error.message));

  console.log('Tables succesfully synchonized');
};

syncDb();
