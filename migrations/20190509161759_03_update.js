exports.up = function(knex, Promise) {
  return knex.schema.table("locations", function(t) {
    t.integer("AddressId");
    t.integer("AddressTypeId");
    t.string("City");
    t.string("Comments");
    t.string("County");
    t.string("Name");
    t.string("SpecialInstructions");
    t.string("State");
    t.string("Zip");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("locations");
};
