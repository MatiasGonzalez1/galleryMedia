# PhotoMe

- Este proyecto tiene como finalidad crear una plataforma web para la subida de imágenes del taller de fotografía de la escuela Adultos 31 de la ciudad de Posadas.

- El mismo está creado con el stack MERN (MongoDb, Express, React y Node.js) utilizando JavasCript tanto como lenguaje de Front cómo de Back.

## To run the back end of this project 

1. Clone the repository

```
https://github.com/MatiasGonzalez1/galleryMedia.git
```

2. Enter the back end project directory:

```
cd back
```

3. Install the dependencies:
```
npm install
```

4. Create a Project and cluster in [MongoDb](https://cloud.mongodb.com/) to connect

5. Create a account in [Cloudinary](https://cloudinary.com/)

6. Create a .env file in the root directory with the next info:

```
MONGODB_NAME='your mongo db name'

MONGODB_PASS='your mongo db pass'

MONGODB_CLUSTER='your cluster name'

CLOUD_NAME='your cloudinary name'

CLOUD_KEY='your cloudinary key'

CLOUD_SECRET='your cloudinary secret'
```

 7. Run the project:

```
npm run dev
```

## To run the front end of this project 

1. While the back end is run

2. Enter the front end project directory:
```
cd front
```

3. Install the dependencies:
```
npm install
```

5. Run react aplication:
```
npm start
```