# EXPRESS ROUTERS

$ npm init -y //package.json file

$ npm i express
$ npm i --save-dev nodemon
$ code .
$ touch index.js

res.send(capitals[country] || "No capital city found"...)

rmcRouter.get("/capitals/:country", ...
  res.send(capitals[country] || "No capital city found")...)

mcRouter.get("/cities/:country", ...
  res.send(citiesByCountry[country] || [])...)

mcRouter.get("/cities/:country/info", ...
  const cities = citiesByCountry[country] || []
  if (capitals[country]) {...})
  