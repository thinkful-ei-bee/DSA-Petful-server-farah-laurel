const Queue = require('./queue');

const dogs = new Queue();

dogs.enqueue(
  {
    imageURL: "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    imageDescription: "A smiling golden-brown golden retreiver listening to music.",
    name: "Tito",
    sex: "Male",
    age: 2,
    breed: "Golden Retriever",
    story: "Stray dog"
  }
);

dogs.enqueue(
  {
    imageURL: "https://bullymake.com/wp-content/uploads/2015/07/1-smiling-boxer-dog-happy.jpg",
    imageDescription: "A brown Boxer smiling.",
    name: "Bill The Boxer",
    sex: "Male",
    age: 6,
    breed: "Boxer",
    story: "Too hyper for owner to handle."
  }
);

dogs.enqueue(
  {
    imageURL: "http://cdn.akc.org/content/article-body-image/newfoundland_dog_pictures.jpg",
    imageDescription: "A black Newfoundland dog smiling at camera",
    name: "Hodor",
    sex: "Male",
    age: 7,
    breed: "Newfoundland",
    story: "Owner didn't want him anymore"
    }
);

dogs.enqueue(
  {
    imageURL: "http://cdn.akc.org/content/article-body-image/basset_hound_dog_pictures_.jpg",
    imageDescription: "A Basset Hound chewing on grass ",
    name: "Cuervo",
    sex: "Female",
    age: 1,
    breed: "Basset Hound",
    story: "Mother rejected her"
    }
);

dogs.enqueue(
  {
    imageURL: "http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
    imageDescription: "An adorable golden retriever puppy.",
    name: "Jambo",
    sex: "Male",
    age: 1,
    breed: "Golden Retriever",
    story: "Found in dumpster"
    }
)

dogs.enqueue(
  {
    imageURL: "http://cdn.akc.org/content/article-body-image/husky_sideways_dog_pictures_.jpg",
    imageDescription: "A goofy Alaskan Husky",
    name: "Zeus",
    sex: "Male",
    age: 2,
    breed: "Alaskan Husky",
    story: "Owner Passed away"
    }
)

console.log(dogs)

module.exports = { dogs };