const mongoose = require("mongoose");
const Movie = require("../models/movies");
const data2000 = require("./data/2000.js")

mongoose.connect("mongodb://localhost/topalove");

// const movies = [
//   {
//     title: "Gladiator",
//     category: "Action",
//     cover:
//       "https://media.senscritique.com/media/000016961568/source_big/La_Planete_des_singes_Suprematie.jpg",
//     decade: 2000
//   },
//   {
//     title: "La planète des Singes: Suprématie",
//     category: "Action",
//     cover: "http://fr.web.img4.acsta.net/pictures/17/04/28/09/41/203328.jpg",
//     decade: 2000
//   },
//   {
//     title: "Die Hard",
//     category: "Action",
//     cover:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_.jpg",
//     decade: 80
//   },
//   {
//     title: "The Thing",
//     category: "Horror",
//     cover: "http://www.critikat.com/wp-content/uploads/2008/05/artoff1944.jpg",
//     decade: 80
//   },
//   {
//     title: "Full Metal Jacket",
//     category: "Drama",
//     cover:
//       "http://fr.web.img5.acsta.net/medias/nmedia/18/65/57/12/19254508.jpg",
//     decade: 80
//   },
//   {
//     title: "Retour Vers Le Futur",
//     category: "Sci-Fi",
//     cover:
//       "http://www.monsieurvintage.com/photos/2015/03/retour_vers_le_futur.jpg",
//     decade: 80
//   },
//   {
//     title: "Predator",
//     category: "Action",
//     cover: "http://www.cinemasterpieces.com/92010a/predaug10.jpg",
//     decade: 80
//   },
//   {
//     title: "E.T",
//     category: "Drama",
//     cover:
//       "http://img.moviepostershop.com/et--the-extra-terrestrial-movie-poster-1982-1020141470.jpg",
//     decade: 80
//   },
//   {
//     title: "Shining",
//     category: "Drama",
//     cover:
//       "http://fr.web.img6.acsta.net/medias/nmedia/18/64/98/65/18816792.jpg",
//     decade: 80
//   },
//   {
//     title: "Le Nom De La Rose",
//     category: "Drama",
//     cover:
//       "http://lelookmag.com/wp-content/uploads/2016/10/le-nom-de-la-rose-sean-connery-film-medieval-thelookworld-thelookmag.jpg",
//     decade: 80
//   },
//   {
//     title: "Evil Dead",
//     category: "Horror",
//     cover:
//       "http://2.bp.blogspot.com/-8__cjDWQI3U/T1H5UKKI6tI/AAAAAAAAAD0/2mV92V8N_z8/s1600/Evil-Dead.jpg",
//     decade: 80
//   }
// ];

Movie.remove({}, function(err) {
  if (err) {
    console.log("Error Movie.collection.insert: ", err);
  } else {
    console.log('collection removed');
    
    Movie.collection.insert(data2000, (err, movies) => {
      if (err) {
        console.log("Error Movie.collection.insert: ", err);
      } else {
        console.log('All your movies were successfully stored.', movies.length);
      }
      mongoose.connection.close();
    });
  }
});
