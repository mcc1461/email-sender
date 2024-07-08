const express = require('express');
const mcRouter = express.Router();

mcRouter.get('/countries', (req, res) => {
    res.send(["Turkey", "USA", "Germany", "France", "Italy", "Spain", "UK", "Greece", "Russia", "China", "Japan", "South Korea", "Brazil", "Argentina"]);
});

mcRouter.get('/cities', (req, res) => {
    res.send(["Istanbul", "New York", "Berlin", "Paris", "Rome", "Madrid", "London", "Athens", "Moscow", "Beijing", "Tokyo", "Seoul", "Brasilia", "Buenos Aires"]);
}   );

mcRouter.get('/cities/:country', (req, res) => {
    const country = req.params.country;
    if (country === "Turkey") {
        res.send(["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana", "Mersin", "Trabzon", "Samsun", "Erzurum", "Konya", "Diyarbakir", "Gaziantep", "Malatya", "Van", "Eskisehir"])
        } else if (country === "USA") {
                res.send(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth"]);
        } else if (country === "Germany") {
            res.send(["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum"]);
        } else if (country === "France") {
            res.send(["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint Etienne", "Toulon", "Grenoble"]);
        } else if (country === "Italy") {
            res.send(["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Brescia"]);
        } else if (country === "Spain") {
            res.send(["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Cordoba", "Valladolid", "Vigo", "Gijon", "Hospitalet de Llobregat"]);
        } else if (country === "UK") {
            res.send(["London", "Birmingham", "Manchester", "Glasgow", "Newcastle", "Sheffield", "Liverpool", "Leeds", "Bristol", "Edinburgh", "Leicester", "Coventry", "Bradford", "Cardiff", "Belfast", "Nottingham"]);
        } else if (country === "Greece") {
            res.send(["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis", "Kavala", "Trikala", "Serres", "Lamia", "Alexandroupoli", "Katerini"]);
        } else if (country === "Russia") {
            res.send(["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don", "Ufa", "Volgograd", "Perm", "Krasnoyarsk", "Voronezh", "Saratov"]);

        } else if (country === "China") {
            res.send(["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Tianjin", "Wuhan", "Dongguan", "Chongqing", "Chengdu", "Nanjing", "Shenyang", "Hangzhou", "Xi'an", "Harbin", "Suzhou", "Dalian"]);
        } else if (country === "Japan") {
            res.send(["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama", "Hiroshima", "Sendai", "Chiba", "Kitakyushu", "Naha", "Okayama"]);
        } else if (country === "South Korea") {
            res.send(["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Seongnam", "Goyang", "Yongin", "Cheongju", "Jeonju", "Cheonan", "Asan"]);
        } else if (country === "Brazil") {
            res.send(["Brasilia", "Sao Paulo", "Rio de Janeiro", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre", "Goiania", "Belem", "Guarulhos", "Campinas", "Nova Iguacu", "Sao Luis"]);
        } else if (country === "Argentina") {
            res.send(["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "Tucuman", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan", "Resistencia", "Neuquen", "Corrientes", "Posadas", "Parana", "Bahia Blanca"]);
        } else {
            res.send([]);
        }
    }
);




module.exports = mcRouter;
