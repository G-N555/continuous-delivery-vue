<template>
  <div class="table">
    <form>
      <p>Search:
        <select name="example1">
          <option v-for='state of statesArray' :key='state' :value="state">{{state}}</option>
        </select>
        <select name="example2">
          <option v-for='city of cityArray' :key='city' :value="city">{{city}}</option>
        </select>
        <select name="example3">
          <option v-for='zip of zipArray' :key='zip' :value="zip">{{zip}}</option>        
        </select>
     </p>   
    </form>
    <form>
    <p>Truck Service :
      <input type="checkbox" name="q1" value="1"> Oil change
      <input type="checkbox" name="q1" value="2"> Light Mechanical
      <br>
      <input type="checkbox" name="q1" value="3"> TirePass
      <input type="checkbox" name="q1" value="4"> Truck Tire Care
    </p>
    </form>
    <form>
    <p>Type :
      <input type="checkbox" name="q1" value="1"> Travel Stop
      <input type="checkbox" name="q1" value="2"> Country Store
    </p>
    </form>
    <form>
    <p>Amenities :
      <input type="checkbox" name="q1" value="1"> ATM
      <input type="checkbox" name="q1" value="2"> Wifi
      <input type="checkbox" name="q1" value="2"> all other types included here
    </p>
    </form>
    <form>
    <p>Restaurants :
      <input type="checkbox" name="q1" value="1"> Arby's
      <input type="checkbox" name="q1" value="2"> Wendy's
      <input type="checkbox" name="q1" value="2"> all other types included here
    </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FilterForm",

  data: () => ({
    locateInfo: [],
    statesArray: [],
    cityArray: [],
    zipArray: [],
  }),

  created: function() {
    const locations = axios.get("/api/locations");
    locations.then((locate) => {
      locate.data.map((obj) => {
        this.locateInfo.push(obj);
      });
      //create statesArray
      this.locateInfo.map((locate) => {
        this.statesArray.push(locate.State);
        this.statesArray = this.statesArray.filter(function(el) {
          return el !== null;
        });
      });
      this.statesArray = this.statesArray.filter(
        (v, i) => this.statesArray.indexOf(v) === i
      );
      //create cityArray
      this.locateInfo.map((locate) => {
        this.cityArray.push(locate.City);
      });
      this.cityArray = this.cityArray.filter(
        (v, i) => this.cityArray.indexOf(v) === i
      );
      //create ZIP array
      this.locateInfo.map((locate) => {
        this.zipArray.push(locate.Zip);
      });
      this.zipArray = this.zipArray.filter(
        (v, i) => this.zipArray.indexOf(v) === i
      );
    });
    console.log(this.zipArray);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.table {
  margin-left: auto;
  margin-right: auto;
  border: solid 1px;
  width: 490px;
}
tbody {
  border: solid 1px;
}
td {
  padding: 20px 20px 20px 20px;
}
</style>
