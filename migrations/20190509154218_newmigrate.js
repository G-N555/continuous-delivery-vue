exports.up = function(knex) {
  return knex.schema.table("locations", function(t) {
    t.text("Address1");
  });
};
exports.down = function(knex, Promise) {};
