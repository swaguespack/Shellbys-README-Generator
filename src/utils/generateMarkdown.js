// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None"){
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let renderLicenseLink;

  switch(license){
    case "Apache":
      renderLicenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html.org/";
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

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None"){
    licenseSection += "## License\n"
    licenseSection += "See " + renderLicenseLink(license) + " for more information on this license\n"
  }
  return licenseSection;
}

// function to generate markdown for README
function generateMarkdown(data) {
  const sections = ['Description','Installation','Usage','License','Contributing','Tests','Questions'];

  let tableContents = "## Table of Contents\n";
  for (let i=0; i<sections.length;i++){
    if (! (sections[i] === "License" && data.license === "None")) {
    tableContents += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
  }
}

  return `# ${data.title} 
  \n
  ## ${sections[0]}
  \n
  ${data.description}
 \n
  ${renderLicenseBadge(data.license)}
  \n
  ${tableContents}
  \n
  ## ${sections[1]}
  \n
  ${data.installation}
  \n
  ## ${sections[2]}
  \n
  ${data.usage} 
  \n
  ${data.license}
  \n
  ${renderLicenseSection(data.license)}
  \n
  ## ${sections[4]}
  \n
  ${data.contributing}
  \n
  ## ${sections[5]}
  \n
  ${data.tests}
  \n
  ## ${sections[6]}
  \n
  You can find me at https://github.com/${data.username} on Github.
  \n
  Please email me at ${data.email} if you have questions.
  \n


`;
}
module.exports = generateMarkdown;
