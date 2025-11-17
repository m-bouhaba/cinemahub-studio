const moviesData = [
  // ===================== ACTION =====================
  {
    id: 1,
    title: "Mad Max: Fury Road",
    year: 2015,
    category: "Action",
    rating: 8.1,
    image: "img/action1.jpg",
    video: "https://www.youtube.com/embed/hEJnMQG9ev8",
    description: "A woman rebels against a tyrannical ruler in a post-apocalyptic desert."
  },
  {
    id: 2,
    title: "John Wick",
    year: 2014,
    category: "Action",
    rating: 7.4,
    image: "img/action2.jpg",
    video: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
    description: "A retired hitman seeks vengeance for the killing of his dog."
  },
  {
    id: 3,
    title: "Gladiator",
    year: 2000,
    category: "Action",
    rating: 8.5,
    image: "img/action3.jpg",
    video: "https://www.youtube.com/embed/P5ieIbInFpg",
    description: "A betrayed Roman general seeks justice against the corrupt emperor."
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    category: "Action",
    rating: 9.0,
    image: "img/action4.jpg",
    video: "https://www.youtube.com/embed/EXeTwQWrcwY",
    description: "Batman faces the Joker, a criminal mastermind."
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    category: "Action",
    rating: 8.8,
    image: "img/action5.jpg",
    video: "https://www.youtube.com/embed/YoHD9XEInc0",
    description: "A thief enters people's dreams to steal information."
  },
  {
    id: 6,
    title: "Avatar",
    year: 2009,
    category: "Action",
    rating: 7.8,
    image: "img/action6.jpg",
    video: "https://www.youtube.com/embed/5PSNL1qE6VY",
    description: "A marine on an alien planet becomes part of its native tribe."
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    category: "Action",
    rating: 8.7,
    image: "img/action7.jpg",
    video: "https://www.youtube.com/embed/vKQi3bBA1y8",
    description: "A hacker discovers the true nature of his reality."
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    year: 2019,
    category: "Action",
    rating: 8.4,
    image: "img/action8.jpg",
    video: "https://www.youtube.com/embed/TcMBFSGVi1c",
    description: "The Avengers assemble to undo Thanos' destruction."
  },
  {
    id: 9,
    title: "Mission Impossible: Fallout",
    year: 2018,
    category: "Action",
    rating: 7.8,
    image: "img/action9.jpg",
    video: "https://www.youtube.com/embed/wb49-oV0F78",
    description: "Ethan Hunt is tested after a mission goes wrong."
  },
  {
    id: 10,
    title: "Fast & Furious 7",
    year: 2015,
    category: "Action",
    rating: 7.1,
    image: "img/action10.jpg",
    video: "https://www.youtube.com/embed/Skpu5HaVkOc",
    description: "The crew faces a new threatening enemy."
  },

  // ===================== COMEDY =====================
  {
    id: 11,
    title: "The Mask",
    year: 1994,
    category: "Comedy",
    rating: 6.9,
    image: "img/comedy1.jpg",
    video: "https://www.youtube.com/embed/LZl69yk5lEY",
    description: "A shy clerk becomes a wild superhero when he wears a magical mask."
  },
  {
    id: 12,
    title: "Home Alone",
    year: 1990,
    category: "Comedy",
    rating: 7.6,
    image: "img/comedy2.jpg",
    video: "https://www.youtube.com/embed/jEDaVHmw7r4",
    description: "A boy defends his home from burglars during Christmas."
  },
  {
    id: 13,
    title: "Johnny English",
    year: 2003,
    category: "Comedy",
    rating: 6.2,
    image: "img/comedy3.jpg",
    video: "https://www.youtube.com/embed/-oD2q3F6ybc",
    description: "A clumsy secret agent tries to stop a dangerous criminal."
  },
  {
    id: 14,
    title: "The Hangover",
    year: 2009,
    category: "Comedy",
    rating: 7.7,
    image: "img/comedy4.jpg",
    video: "https://www.youtube.com/embed/tcdUhdOlz9M",
    description: "A bachelor party in Las Vegas goes terribly wrong."
  },
  {
    id: 15,
    title: "Deadpool",
    year: 2016,
    category: "Comedy",
    rating: 8.0,
    image: "img/comedy5.jpg",
    video: "https://www.youtube.com/embed/ONHBaC-pfsk",
    description: "A mercenary gains superpowers and seeks revenge."
  },
  {
    id: 16,
    title: "Jumanji",
    year: 2017,
    category: "Comedy",
    rating: 6.9,
    image: "img/comedy6.jpg",
    video: "https://www.youtube.com/embed/2QKg5SZ_35I",
    description: "Four teens get trapped inside a magical video game."
  },
  {
    id: 17,
    title: "Central Intelligence",
    year: 2016,
    category: "Comedy",
    rating: 6.3,
    image: "img/comedy7.jpg",
    video: "https://www.youtube.com/embed/MxEw3elSJ8M",
    description: "A former geek turned CIA agent drags his old friend into danger."
  },
  {
    id: 18,
    title: "Rush Hour",
    year: 1998,
    category: "Comedy",
    rating: 7.0,
    image: "img/comedy8.jpg",
    video: "https://www.youtube.com/embed/JMiFsFQcFLE",
    description: "A Hong Kong detective teams up with a loudmouthed LAPD officer."
  },
  {
    id: 19,
    title: "Mr. Bean’s Holiday",
    year: 2007,
    category: "Comedy",
    rating: 6.4,
    image: "img/comedy9.jpg",
    video: "https://www.youtube.com/embed/9zzhbYV4xvM",
    description: "Mr. Bean accidentally travels to France and causes chaos."
  },
  {
    id: 20,
    title: "Yes Man",
    year: 2008,
    category: "Comedy",
    rating: 6.8,
    image: "img/comedy10.jpg",
    video: "https://www.youtube.com/embed/OHcFSmKmT74",
    description: "A man decides to say yes to everything for a year."
  },

  // ===================== DRAMA =====================
  {
    id: 21,
    title: "Forrest Gump",
    year: 1994,
    category: "Drama",
    rating: 8.8,
    image: "img/drama1.jpg",
    video: "https://www.youtube.com/embed/bLvqoHBptjg",
    description: "A simple man witnesses major historical events."
  },
  {
    id: 22,
    title: "The Shawshank Redemption",
    year: 1994,
    category: "Drama",
    rating: 9.3,
    image: "img/drama2.jpg",
    video: "https://www.youtube.com/embed/PLl99DlL6b4",
    description: "A man wrongly imprisoned forms a bond with another inmate."
  },
  {
    id: 23,
    title: "Titanic",
    year: 1997,
    category: "Drama",
    rating: 7.9,
    image: "img/drama3.jpg",
    video: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    description: "A love story unfolds aboard the doomed Titanic."
  },
  {
    id: 24,
    title: "The Green Mile",
    year: 1999,
    category: "Drama",
    rating: 8.6,
    image: "img/drama4.jpg",
    video: "https://www.youtube.com/embed/Ki4haFrqSrw",
    description: "A prison guard discovers a prisoner with a mysterious gift."
  },
  {
    id: 25,
    title: "The Pursuit of Happyness",
    year: 2006,
    category: "Drama",
    rating: 8.0,
    image: "img/drama5.jpg",
    video: "https://www.youtube.com/embed/DMOBlEcRuw8",
    description: "A struggling salesman fights for a better future."
  },
  {
    id: 26,
    title: "A Star Is Born",
    year: 2018,
    category: "Drama",
    rating: 7.6,
    image: "img/drama6.jpg",
    video: "https://www.youtube.com/embed/nSbzyEJ8X9E",
    description: "A musician helps a young singer find fame."
  },
  {
    id: 27,
    title: "Joker",
    year: 2019,
    category: "Drama",
    rating: 8.4,
    image: "img/drama7.jpg",
    video: "https://www.youtube.com/embed/zAGVQLHvwOY",
    description: "A mentally struggling man becomes the infamous Joker."
  },
  {
    id: 28,
    title: "La La Land",
    year: 2016,
    category: "Drama",
    rating: 8.0,
    image: "img/drama8.jpg",
    video: "https://www.youtube.com/embed/0pdqf4P9MB8",
    description: "An actress and a pianist try to succeed in Los Angeles."
  },
  {
    id: 29,
    title: "Requiem for a Dream",
    year: 2000,
    category: "Drama",
    rating: 8.3,
    image: "img/drama9.jpg",
    video: "https://www.youtube.com/embed/lgo3Hb5vWLE",
    description: "Four people fall into drug addiction with tragic consequences."
  },
  {
    id: 30,
    title: "The Wolf of Wall Street",
    year: 2013,
    category: "Drama",
    rating: 8.2,
    image: "img/drama10.jpg",
    video: "https://www.youtube.com/embed/iszwuX1AK6A",
    description: "A stockbroker rises and falls in the world of finance."
  },

  // ===================== FAMILY =====================
  {
    id: 31,
    title: "Frozen",
    year: 2013,
    category: "Family",
    rating: 7.5,
    image: "img/family1.jpg",
    video: "https://www.youtube.com/embed/TbQm5doF_Uc",
    description: "Two sisters navigate magic, love, and adventure."
  },
  {
    id: 32,
    title: "Toy Story",
    year: 1995,
    category: "Family",
    rating: 8.3,
    image: "img/family2.jpg",
    video: "https://www.youtube.com/embed/v-PjgYDrg70",
    description: "A cowboy doll feels threatened by a new spaceman toy."
  },
  {
    id: 33,
    title: "Finding Nemo",
    year: 2003,
    category: "Family",
    rating: 8.1,
    image: "img/family3.jpg",
    video: "https://www.youtube.com/embed/wZdpNglLbt8",
    description: "A clownfish searches the ocean for his lost son."
  },
  {
    id: 34,
    title: "Shrek",
    year: 2001,
    category: "Family",
    rating: 7.9,
    image: "img/family4.jpg",
    video: "https://www.youtube.com/embed/CwXOrWvPBPk",
    description: "An ogre goes on a mission to rescue a princess."
  },
  {
    id: 35,
    title: "The Lion King",
    year: 1994,
    category: "Family",
    rating: 8.5,
    image: "img/family5.jpg",
    video: "https://www.youtube.com/embed/4sj1MT05lAA",
    description: "A lion cub grows into a king after tragedy."
  },
  {
    id: 36,
    title: "Zootopia",
    year: 2016,
    category: "Family",
    rating: 8.0,
    image: "img/family6.jpg",
    video: "https://www.youtube.com/embed/jWM0ct-OLsM",
    description: "A rabbit police officer teams up with a fox to solve a case."
  },
  {
    id: 37,
    title: "Moana",
    year: 2016,
    category: "Family",
    rating: 7.6,
    image: "img/family7.jpg",
    video: "https://www.youtube.com/embed/LKFuXETZUsI",
    description: "A girl sets sail to save her island."
  },
  {
    id: 38,
    title: "Coco",
    year: 2017,
    category: "Family",
    rating: 8.4,
    image: "img/family8.jpg",
    video: "https://www.youtube.com/embed/Rvr68u6k5sI",
    description: "A boy enters the land of the dead to learn about his family."
  },
  {
    id: 39,
    title: "Up",
    year: 2009,
    category: "Family",
    rating: 8.3,
    image: "img/family9.jpg",
    video: "https://www.youtube.com/embed/HWEW_qTLSEE",
    description: "A man goes on an adventure in a floating house with a young boy."
  },
  {
    id: 40,
    title: "Despicable Me",
    year: 2010,
    category: "Family",
    rating: 7.6,
    image: "img/family10.jpg",
    video: "https://www.youtube.com/embed/tVN9tYj1Ydw",
    description: "A villain adopts three girls who change his life."
  }
];

export default moviesData;