// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseOptions = ["MIT", "Apache 2.0", "Mozilla Public License 2.0", "BSD 3"]

function renderLicenseBadge(license) {
  if (license===licenseOptions[0]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[1]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license===licenseArr[2]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license===licenseArr[3]){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return ""
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseOptions[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/Artistic-2.0)`
  } else if (license===licenseArr[3]){
    return `[${licenseArr[3]}](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ""
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseOptions[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else {
    return ""
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Description
  ${description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ## Installation
  To install necessary dependencies, run the following command: 
  ${installation}'
  ## Usage
  ${usage}
  ## Credits
  ${credits}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests}
  ## Questions
  My Github username is: ${username}
  Reach out to me with questions via email here: ${email}
`;
}

module.exports = generateMarkdown;


