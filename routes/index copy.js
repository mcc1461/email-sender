const express = require('express');
const mcRouter = express.Router();

const {citiesByCountry} = require('../citiesByCountry');
const {cities} = require('../cities');

mcRouter.get('/countries', (req, res) => {
    res.send(["Turkey", "USA", "Germany", "France", "Italy", "Spain", "UK", "Greece", "Russia", "China", "Japan", "South Korea", "Brazil", "Argentina"]);
});

mcRouter.get('/cities', (req, res) => {
    res.send(cities);
}   );
mcRouter.get('/capitals', (req, res) => {
    res.send(["Ankara", "Washington D.C.", "Berlin", "Paris", "Rome", "Madrid", "London", "Athens", "Moscow", "Beijing", "Tokyo", "Seoul", "Brasilia", "Buenos Aires"]);
}
);


// mcRouter.get('/capitals/:country', (req, res) => {
//     const country = req.params.country;
//     if (country === "Turkey") {
//         res.send("Ankara");
//     } else if (country === "USA") {
//         res.send("Washington D.C.");
//     } else if (country === "Germany") {
//         res.send("Berlin");
//     } else if (country === "France") {
//         res.send("Paris");
//     } else if (country === "Italy") {
//         res.send("Rome");
//     } else if (country === "Spain") {
//         res.send("Madrid");
//     } else if (country === "UK") {
//         res.send("London");
//     } else if (country === "Greece") {
//         res.send("Athens");
//     } else if (country === "Russia") {
//         res.send("Moscow");
//     } else if (country === "China") {
//         res.send("Beijing");
//     } else if (country === "Japan") {
//         res.send("Tokyo");
//     } else if (country === "South Korea") {
//         res.send("Seoul");
//     } else if (country === "Brazil") {
//         res.send("Brasilia");
//     } else if (country === "Argentina") {
//         res.send("Buenos Aires");
//     } else {
//         res.send("No capital city found");
//     }
// }
// );

mcRouter.get("/capitals/:country", (req, res) => {
  const country = req.params.country;
  const capitals = {
    Turkey: "Ankara",
    USA: "Washington D.C.",
    Germany: "Berlin",
    France: "Paris",
    Italy: "Rome",
    Spain: "Madrid",
    UK: "London",
    Greece: "Athens",
    Russia: "Moscow",
    China: "Beijing",
    Japan: "Tokyo",
    "South Korea": "Seoul",
    Brazil: "Brasilia",
    Argentina: "Buenos Aires",
  };
  res.send(capitals[country] || "No capital city found");
});

mcRouter.get("/cities/:country", (req, res) => {
  const country = req.params.country;
  res.send(citiesByCountry[country] || []);
});



// mcRouter.get('/cities/:country', (req, res) => {
//     const country = req.params.country;
//     if (country === "Turkey") {
//         res.send(["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana", "Mersin", "Trabzon", "Samsun", "Erzurum", "Konya", "Diyarbakir", "Gaziantep", "Malatya", "Van", "Eskisehir"])
//         } else if (country === "USA") {
//                 res.send(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth"]);
//         } else if (country === "Germany") {
//             res.send(["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum"]);
//         } else if (country === "France") {
//             res.send(["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint Etienne", "Toulon", "Grenoble"]);
//         } else if (country === "Italy") {
//             res.send(["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Brescia"]);
//         } else if (country === "Spain") {
//             res.send(["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Cordoba", "Valladolid", "Vigo", "Gijon", "Hospitalet de Llobregat"]);
//         } else if (country === "UK") {
//             res.send(["London", "Birmingham", "Manchester", "Glasgow", "Newcastle", "Sheffield", "Liverpool", "Leeds", "Bristol", "Edinburgh", "Leicester", "Coventry", "Bradford", "Cardiff", "Belfast", "Nottingham"]);
//         } else if (country === "Greece") {
//             res.send(["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis", "Kavala", "Trikala", "Serres", "Lamia", "Alexandroupoli", "Katerini"]);
//         } else if (country === "Russia") {
//             res.send(["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don", "Ufa", "Volgograd", "Perm", "Krasnoyarsk", "Voronezh", "Saratov"]);
//         } else if (country === "China") {
//             res.send(["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Tianjin", "Wuhan", "Dongguan", "Chongqing", "Chengdu", "Nanjing", "Shenyang", "Hangzhou", "Xi'an", "Harbin", "Suzhou", "Dalian"]);
//         } else if (country === "Japan") {
//             res.send(["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama", "Hiroshima", "Sendai", "Chiba", "Kitakyushu", "Naha", "Okayama"]);
//         } else if (country === "South Korea") {
//             res.send(["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Seongnam", "Goyang", "Yongin", "Cheongju", "Jeonju", "Cheonan", "Asan"]);
//         } else if (country === "Brazil") {
//             res.send(["Brasilia", "Sao Paulo", "Rio de Janeiro", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre", "Goiania", "Belem", "Guarulhos", "Campinas", "Nova Iguacu", "Sao Luis"]);
//         } else if (country === "Argentina") {
//             res.send(["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "Tucuman", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan", "Resistencia", "Neuquen", "Corrientes", "Posadas", "Parana", "Bahia Blanca"]);
//         } else {
//             res.send([]);
//         }
//     }
// );


mcRouter.get("/cities/:country/capital", (req, res) => {
  const country = req.params.country;
  console.log(country);
//   const capital = req.params.capital;
//   console.log(capital);
  const capitalOfCountry = {
    Turkey: "Ankara",
    USA: "Washington D.C.",
    Germany: "Berlin",
    France: "Paris",
    Italy: "Rome",
    Spain: "Madrid",
    UK: "London",
    Greece: "Athens",
    Russia: "Moscow",
    China: "Beijing",
    Japan: "Tokyo",
    "South Korea": "Seoul",
    Brazil: "Brasilia",
    Argentina: "Buenos Aires",
  };
  const cities = citiesByCountry[country] || [];
  console.log(cities);
  if (capital === capitalOfCountry[country]) {
    res.send(cities);
  } else {
    res.send([]);
  }
});




// mcRouter.get('/cities/:country/:capital', (req, res) => {
//     const country = req.params.country;
//     const capital = req.params.capital;
//     if (country === "Turkey" && capital === "Ankara") {
//         res.send(["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana", "Mersin", "Trabzon", "Samsun", "Erzurum", "Konya", "Diyarbakir", "Gaziantep", "Malatya", "Van", "Eskisehir"]);
//     } else if (country === "USA" && capital === "Washington D.C.") {
//         res.send(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth"]);
//     } else if (country === "Germany" && capital === "Berlin") {
//         res.send(["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum"]);
//     } else if (country === "France" && capital === "Paris") {
//         res.send(["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint Etienne", "Toulon", "Grenoble"]);
//     } else if (country === "Italy" && capital === "Rome") {
//         res.send(["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Brescia"]);
//     } else if (country === "Spain" && capital === "Madrid") {
//         res.send(["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Cordoba", "Valladolid", "Vigo", "Gijon", "Hospitalet de Llobregat"]);
//     }
//     else if (country === "UK" && capital === "London") {
//         res.send(["London", "Birmingham", "Manchester", "Glasgow", "Newcastle", "Sheffield", "Liverpool", "Leeds", "Bristol", "Edinburgh", "Leicester", "Coventry", "Bradford", "Cardiff", "Belfast", "Nottingham"]);
//     } else if (country === "Greece" && capital === "Athens") {
//         res.send(["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis", "Kavala", "Trikala", "Serres", "Lamia", "Alexandroupoli", "Katerini"]);
//     } else if (country === "Russia" && capital === "Moscow") {
//         res.send(["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don", "Ufa", "Volgograd", "Perm", "Krasnoyarsk", "Voronezh", "Saratov"]);
//     } else if (country === "China" && capital === "Beijing") {
//         res.send(["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Tianjin", "Wuhan", "Dongguan", "Chongqing", "Chengdu", "Nanjing", "Shenyang", "Hangzhou", "Xi'an", "Harbin", "Suzhou", "Dalian"]);
//     } else if (country === "Japan" && capital === "Tokyo") {
//         res.send(["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama", "Hiroshima", "Sendai", "Chiba", "Kitakyushu", "Naha", "Okayama"]);
//     } else if (country === "South Korea" && capital === "Seoul") {
//         res.send(["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Seongnam", "Goyang", "Yongin", "Cheongju", "Jeonju", "Cheonan", "Asan"]);
//     } else if (country === "Brazil" && capital === "Brasilia") {
//         res.send(["Brasilia", "Sao Paulo", "Rio de Janeiro", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre", "Goiania", "Belem", "Guarulhos", "Campinas", "Nova Iguacu", "Sao Luis"]);
//     } else if (country === "Argentina" && capital === "Buenos Aires") {
//         res.send(["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "Tucuman", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan", "Resistencia", "Neuquen", "Corrientes", "Posadas", "Parana", "Bahia Blanca"]);
//     }
//     else {
//         res.send([]);
//     }
// }
// );




module.exports = mcRouter;
