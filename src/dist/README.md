# test
  
  ##Description
  test

  function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None"){
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}


  ##Table of Contents


  ##Installation
  test

  ##Usage
  test

  ##License
  undefined
  function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None"){
    licenseSection += "## License\n"
    licenseSection += "See " + renderLicenseLink(license) + "for more information on this license\n"
  }
  return licenseSection;
}


  ##Contributing
  test

  ##Tests
  test

  ##Questions


