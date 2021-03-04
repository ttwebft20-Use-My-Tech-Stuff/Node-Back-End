
exports.seed = function(knex) {
  return knex("tech_item").insert([
    {
      img_url: "https://www.google.com/search?q=Kodak+PixPro+Astro+Zoom+Digital+Camera+(AZ421)&rlz=1C1CHBF_enUS898US898&sxsrf=ALeKk0071fRvlZtapKWeGIJH97vJyUaBIA:1614886165068&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiaveLhr5fvAhXMjVkKHSMJCvMQ_AUoA3oECA8QBQ&biw=1366&bih=657#imgrc=3-QRsZyg9YamcM",
      item_name: "Kodak PixPro Astro Zoom Digital Camera (AZ421)",
      category: "camera",
      description: "With an optically stabilized 42x zoom lens you can capture subjects near and far with the black PIXPRO AZ421 Digital Camera from Kodak.",
      rented: false,
      price: 40,
      owner_username: "itsmejen"
    },
    {
      img_url: "https://www.google.com/search?q=Hisense+55-Inch+H9+Quantum+Series&tbm=isch&ved=2ahUKEwie9vHqr5fvAhXChVMKHa5kAZ8Q2-cCegQIABAA&oq=Hisense+55-Inch+H9+Quantum+Series&gs_lcp=CgNpbWcQA1CooAJYqKACYJOkAmgAcAB4AIABnAGIAZwBkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=KDVBYJ7CC8KLzgKuyYX4CQ&bih=657&biw=1366&rlz=1C1CHBF_enUS898US898#imgrc=wCRitlzPUcSumM",
      item_name: "Hisense 55-Inch H9 Quantum Series 4K ULED Smart TV",
      category: "television",
      description: "Unlock the power of over a billion colors perfectly expressed with Hisense H9G Quantum Series ULED Smart 4K TV, which combine incredible, ultra-bright 4K detail with android TV for quick access to entertainment and apps.",
      rented: false,
      price: 32,
      owner_username: "itsmejen"
    },
    {
      img_url: "https://www.google.com/search?q=GECKO+smoke+machine+portable&tbm=isch&ved=2ahUKEwi888v9r5fvAhWM2lkKHTNcBckQ2-cCegQIABAA&oq=GECKO+smoke+machine+portable&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQsQM6AggAOgYIABAIEB46BggAEAoQGFCmuwNY1PkDYMX6A2gDcAB4AIABwgGIAcIPkgEEMjkuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=TzVBYPyPGYy15wKzuJXIDA&bih=657&biw=1366&rlz=1C1CHBF_enUS898US898#imgrc=w-JYvcpAkQfBGM",
      item_name: "GECKO Smoke Machine Portable Wired / Wireless",
      category: "party-equipment",
      description: "Fog Machine Control Mode:GECKO fog machine is equipped with Wired and wireless remote control. The effective distance of the wired is 3 meters, for the wireless is 50 meters. Control the machine freely.",
      rented: false,
      price: 22,
      owner_username: "itsmejen"
    }
  ]);
};
