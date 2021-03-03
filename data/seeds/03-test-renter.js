
exports.seed = function(knex) {
  return knex("users").insert([
    {
      username: "itsmejen2",
      first_name: "Jennifer",
      last_name: "Kramer",
      email: "jen2@jen2.com",
      zipcode: 12345,
      password: "pass1234",
      role: "renter"
    }
  ]);
};