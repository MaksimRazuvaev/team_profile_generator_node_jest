function generateHTML(team) {
    console.log("did I get to generateHTML?");
    console.log("what inside team"+team);
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./development/css/style.css" />
        <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
        ></script>
        <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"
        ></script>
        <title>Team Generator</title>
    </head>

    <body>
        <header class="jumbotron jumbotron-fluid custom-jumbotron">
            <div class="container text-center">
            <h1>My Team</h1>
            </div>
        </header>
        <main class="container-fluid">
            <section class="col-12 col-md-8 col-lg-9">
                <div class="row" id="managerCard">
                    ${createCard(team)};
                </div>
            </section>    
        </main>
    </body>
</html>`
};


function generateManager(manager) { 
    return `
<div class="col col-12 col-sm-4 col-md3">
    <div class="card h-100 ">
        <h4 class="card-header custom-card-header">${manager.name}</h4>
        <h5 class="card-header custom-card-header">${manager.title}</h5>
        <div class="card-body">
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text"><a href="mailto:${manager.email}">Email: ${manager.email}</a></p>
            <p class="card-text">Office number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`
};

function generateEngineer(engineer) {
    return `
<div class="col col-12 col-sm-4 col-md3">
    <div class="card h-100 ">
        <h4 class="card-header custom-card-header">${engineer.name}</h4>
        <h5 class="card-header custom-card-header">${engineer.title}</h5>
        <div class="card-body">
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text"><a href="mailto:${engineer.email}">Email: ${engineer.email}</a></p>
            <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">GitHub: ${engineer.github}</a></p>
        </div>
    </div>
</div>`
};
  
function generateIntern(intern) {
    return `
<div class="col col-12 col-sm-4 col-md3">
    <div class="card h-100 ">
        <h4 class="card-header custom-card-header">${intern.name}</h4>
        <h5 class="card-header custom-card-header">${intern.title}</h5>
        <div class="card-body">
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text"> <a href="mailto:${intern.email}">Email: ${intern.email}</a></p>
            <p class="card-text">School:  ${intern.school}</a></p>
        </div>
    </div>
</div>`
};

function createCard(team) {

    const cardArray = [];

    // for(let i = 0; i < team.length; i++){
/*        for(let i = team.length - 1; i > 0; i--){
        console.log("what is team lenght?" + team.length);
        console.table(team);
        if (team[i].getRole() === "Intern") {
            console.log("what is role?" + team[i].getRole());
            cardArray.push(generateIntern(team[i]));
            // return generateIntern(team[i]);
        }
        else if (team[i].getRole() === "Engineer") {
            cardArray.push(generateEngineer(team[i]));
            // return generateEngineer(team[i]);
        }else{
            cardArray.push(generateManager(team[i]));

            // return generateManager(team[i]);
        }
    }
  */  

    cardArray.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => generateManager(manager)));

    cardArray.push(team.filter((employee) => employee.getRole() === 'Engineer').map((engineer) => generateEngineer(engineer)));

    cardArray.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => generateIntern(intern)));

    console.log("what is in array" + cardArray);
    return cardArray.join('');
};

  
  module.exports = generateHTML; 