function generateHTML(answer) {
    const fileString = `${answer.license == 'None' ? `# ${answer.title}` : `${renderLicenseBadge(answer.license)} 
  # ${answer.title}`}
  
  ${renderLicenseLink(answer.license)}
  
  ## Description
  
  This description is provided by user: ${answer.description}
  
  ## Installation
  
  Here is instalation instruction provided by user: ${answer.installation}
    
  ## Usage
  
  This is brief usage guide: ${answer.usage}
        
  ## Contributing
  
  You can contribute by doing next: ${answer.contributing}
    
  ## Tests
  
  Let's test this way: ${answer.tests}
  ${renderLicenseSection(answer.license)}
  ## Questions
  
  This is my GitHub user name: ${answer.username}
  You can send your question to my email address: ${answer.email}`;
    return fileString;
  };
  
  
  module.exports = generateHTML; 