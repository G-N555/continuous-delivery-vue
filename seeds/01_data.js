const allData = require("../data/locations");
let locationList;
let allNeedData = [];

//create locationList{latitude, longtitude, name}
allData.map((obj) => {
  const latitude = obj.Site.Latitude;
  const longitude = obj.Site.Longitude;
  const name = obj.Site.SiteName;
  locationList = { latitude: latitude, longitude: longitude, name: name };
  const addresses = obj.Addresses[0];
  Object.assign(locationList, addresses);
  allNeedData.push(locationList);
});

exports.seed = function(knex) {
  return knex("locations")
    .del()
    .then(() => {
      return knex("locations").insert(allNeedData);
    });
};
