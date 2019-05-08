<template>
  <div class="table">
    <form>
      <p>Search:
        <select name="example1">
          <option value="sample1">samle1</option>
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
      <input type="checkbox" name="q1" value="1"> check1
      <input type="checkbox" name="q1" value="2"> check2
      <br>
      <input type="checkbox" name="q1" value="3"> check3
      <input type="checkbox" name="q1" value="4"> check4
    </p>
    </form>
    <form>
    <p>Truck Service :
      <input type="checkbox" name="q1" value="1"> check1
      <input type="checkbox" name="q1" value="2"> check2
    </p>
    </form>
    <form>
    <p>Amenities :
      <input type="checkbox" name="q1" value="1"> check1
      <input type="checkbox" name="q1" value="2"> check2
      <input type="checkbox" name="q1" value="2"> check2
    </p>
    </form>
    <form>
    <p>Restaurants :
      <input type="checkbox" name="q1" value="1"> check1
      <input type="checkbox" name="q1" value="2"> check2
      <input type="checkbox" name="q1" value="2"> check2
    </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "FilterForm",
  props: {
    msg: String,
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
