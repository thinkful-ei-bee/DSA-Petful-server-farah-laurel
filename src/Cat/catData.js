const Queue = require('../queue');

const cats = new Queue();

cats.enqueue(
  {
    imageURL:"https://thedutifulcat.com/wp-content/uploads/2018/11/The-Maine-Coon-Cat-4.jpg", 
    imageDescription: "Maine Coon cat outside",
    name: "Simba",
    sex: "Male",
    age: 6,
    breed: "Maine Coon",
    story: ""
  }
);

cats.enqueue(
  {
    imageURL:"https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/images/snowshoe-cat-lying-on-wood-floor.jpg", 
    imageDescription: "Showshoe cat lying on floor",
    name: "Jerry",
    sex: "Male",
    age: 10,
    breed: "Showshoe",
    story: "Owner died."
  }
);

cats.enqueue(
  {
    imageURL:"https://cdn2-www.cattime.com/assets/uploads/gallery/burmese-cats-and-kittens/burmese-cats-and-kittens-1.jpg", 
    imageDescription: "Burmese cat getting her belly scratched",
    name: "Tom",
    sex: "Male",
    age: 1,
    breed: "Burmese",
    story: "Hurricane left him stranded."
  }
);

cats.enqueue(
  {
    imageURL:"https://allergytocats.net/wp-content/uploads/2018/06/Siamese-cat.jpg", 
    imageDescription: "Siamese cat lying on carpet.",
    name: "Mocha",
    sex: "Female",
    age: 2,
    breed: "Siamese",
    story: "Found as stray"
  }
);

module.exports = { cats };