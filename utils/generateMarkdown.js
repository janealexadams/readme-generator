// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseOptions = ["MIT", "Apache 2.0", "Mozilla Public License 2.0", "BSD 3"]

function renderLicenseBadge(license) {
  if (license==='MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license==='APACHE 2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license==='Mozilla Public License 2.0'){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license==='BSD 3'){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return ""
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='MIT'){
    return `[${license}](https://opensource.org/licenses/MIT)`
  } else if (license==='Apache 2.0'){
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license==='Mozilla Public License 2.0'){
    return `[${license}](https://opensource.org/licenses/Artistic-2.0)`
  } else if (license==='BSD 3'){
    return `[${license}](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ""
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }
  return `## License
This project uses the ${license} license.  
`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${(data.name)}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ## Installation
  To install necessary dependencies, run the following command: 
  ${data.installation}'
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  My Github username is: ${data.username}
  Reach out to me with questions via email here: ${data.email}`;
}

module.exports = generateMarkdown;


