<template>
  <div class="table">
    <form>
      <p>Search:
        <select name="example1">
          <option v-for='state of statesArray' :key='state' :value="state">{{state}}</option>
        </select>
        <select name="example2">
          <option value="sample2">sample2</option>
        </select>
        <select name="example3">
          <option value="sample3">sample3</option>
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
    locationInfo: [],
    statesArray: [],
  }),

  created: function() {
    const locations = axios.get("/api/locations");
    locations.then((locate) => {
      locate.data.map((obj) => {
        this.statesArray.push(obj.State);
        this.statesArray = this.statesArray.filter(function(el) {
          return el !== null;
        });
      });
      this.statesArray = this.statesArray.filter(
        (v, i) => this.statesArray.indexOf(v) === i
      );
    });
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
