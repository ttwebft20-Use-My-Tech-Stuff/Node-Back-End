
exports.seed = function(knex) {
  return knex("users").del()
    .then(function () {
      return knex("users").insert([
        {
          username: "itsmejen",
          first_name: "Jennifer",
          last_name: "Kramer",
          email: "jen@jen.com",
          zipcode: 12345,
          password: "pass1234",
          role: "owner"
        }
      ]);
    });
};