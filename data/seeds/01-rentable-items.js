
exports.seed = function(knex) {
  return knex("rentable-items").del()
    .then(function () {
      return knex("rentable-items").insert([
        {
          item_name: "Kodak PixPro Astro Zoom Digital Camera (AZ421)",
          category: "camera",
          description: "With an optically stabilized 42x zoom lens you can capture subjects near and far with the black PIXPRO AZ421 Digital Camera from Kodak.",
          rentable: false,
          price: "$40/day",
          owner_username: "jk1234"
        },
        {
          item_name: "Hisense 55-Inch Class H9 Quantum Series Android 4K ULED Smart TV with Hand-Free Voice Control (55H9G, 2020 Model)",
          category: "television",
          description: "Unlock the power of over a billion colors perfectly expressed with Hisense H9G Quantum Series ULED Smart 4K TV, which combine incredible, ultra-bright 4K detail with android TV for quick access to entertainment and apps.",
          rentable: false,
          price: "$32/day",
          owner_username: "jk1234"
        },
        {
          item_name: "Fog Machine GECKO Smoke Machine Hood Portable LED Light With Wired and Wireless Remote Control",
          category: "party-equipment",
          description: "Fog Machine Control Mode:GECKO fog machine is equipped with Wired and wireless remote control. The effective distance of the wired is 3 meters, for the wireless is 50 meters. Control the machine freely.",
          rentable: false,
          price: "$22/day",
          owner_username: "jk1234"
        }
      ]);
    });
};
