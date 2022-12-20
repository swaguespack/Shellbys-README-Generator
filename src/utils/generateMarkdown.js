// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None"){
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let renderLicenseLink;

  switch(license){
    case "Apache":
      renderLicenseLink = "https://mit-https://www.apache.org/licenses/LICENSE-2.0.html.org/";
      break;
    case "PostgreSQL":
      renderLicenseLink = "https://opensource.org/licenses/PostgreSQL";
      break;
    case "MIT":
      renderLicenseLink = "https://mit-license.org/";
      break;
    case "Mozilla":
      renderLicenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "GPL":
      renderLicenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    default:
      renderLicenseLink = "";
      break;
  }
  return renderLicenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None"){
    licenseSection += "## License\n"
    licenseSection += "See " + renderLicenseLink(license) + "for more information on this license\n"
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  
  ##Description
  ${data.description}

  ${renderLicenseBadge}


  ##Table of Contents


  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.licenses}
  ${renderLicenseSection}


  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions


`;
}

module.exports = generateMarkdown;
