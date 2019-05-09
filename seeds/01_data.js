const allData = require("../data/locations");
// const longitude = allData[0].Site.Longitude;
// const latitude = allData[0].Site.Latitude;
// const siteName = allData[0].Site.SiteName;
// const location = {Latitude: latitude, Longitude: longitude, name: siteName}
// locationList.push(location);
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
  console.log(allNeedData);
});

// //create addressList
// allData.map((obj) => {
//   addressList.push(obj.Addresses[0]);
// });

// //combine 2datas
// const allNeedData = Object.assign(addressList, locationList);

exports.seed = function(knex) {
  return knex("locations")
    .del()
    .then(() => {
      return knex("locations").insert(allNeedData);
    });
};
