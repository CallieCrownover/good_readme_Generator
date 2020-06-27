const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `
# ${data.title.toUpperCase()}
![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/github/languages/top/calliecrownover/good_readme_Generator)
_Repo by ${data.name.toUpperCase()}_
__Table of contents:__
- [Installation](#installation)
- [Description](#usage)
- [Licence](#checkbox)
- [Tests](#test)
__Installation:__
${data.inst}
__Description:__
${data.use}
__licence:__
${data.cb}
__Tests:__
${data.test}
__Questions:__
${data.qs}
`
}

module.exports = generateMarkdown