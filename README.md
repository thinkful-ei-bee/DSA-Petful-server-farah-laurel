# Petful
Petful is an animal rescue app that allows you to adopt cats or dogs and give them a forever-home. 

Created by Farah Gustafson and Laurel Butler

## API Documentation

### GET /api/dog
Returns data for all dogs in the database with the following fields:
```
{
    imageURL: "https://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    imageDescription: "A smiling golden-brown golden retreiver listening to music.",
    name: "Tito",
    sex: "Male",
    age: 2,
    breed: "Golden Retriever",
    story: "Stray dog"
  }
```

### GET /api/cat
Returns data for all cats in the database with the following fields:
```
  {
    imageURL:"https://thedutifulcat.com/wp-content/uploads/2018/11/The-Maine-Coon-Cat-4.jpg", 
    imageDescription: "Maine Coon cat outside",
    name: "Simba",
    sex: "Male",
    age: 6,
    breed: "Maine Coon",
    story: ""
  }
```

### DELETE /api/dog
Removes the dog from the front of the line.

### DELETE /api/cat
Removes the cat from the front of the line.

## Live App: 
[Petful](https://farah-laurel-petful-app.now.sh/)

## Client:
[Click here for the Client](https://github.com/thinkful-ei-bee/DSA-Petful-Farah-Laurel-Client)

## Tech
- React
- Nodejs
- Express

## Screenshots:
### Landing Page: 
![Landing Page](src/Screenshots/homepage.png?raw=true)

### Adopt a dog:
![Adopt a cat](src/Screenshots/cat.png?raw=true)

### Adopt a cat:
![Adopt a dog](src/Screenshots/dog.png?raw=true)


### Available scripts: 

Start the application npm start

Start nodemon for the application npm run dev

Run the tests mode npm test

