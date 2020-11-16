function kebabCase(license) {
 
  var treatedName = license.split(" ").join("%20");
  console.log(treatedName)
  return treatedName;
}




// function to generate markdown for README
function generateMarkdown(data) {
  var license = kebabCase(data.license)
  return `# ${data.name}
  ![license](https://img.shields.io/badge/license-${license}-blue)

  [Github](https://github.com/${data.username})





`;
}

module.exports = generateMarkdown;
