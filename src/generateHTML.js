// main function to form final HTML file
function generateHTML(team) {
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
            <section class="col-12 col-md-12 col-lg-12">
                <div class="row" id="managerCard">
                    ${createCard(team)}
                </div>
            </section>    
        </main>
    </body>
</html>`
};

// to generate manager's card
function generateManager(manager) { 
    return `
<div class="col col-12 col-sm-4 col-md3">
    <div class="card h-100 ">
        <h4 class="card-header custom-card-header">${manager.name}</h4>
        <h5 class="card-header custom-card-header">${manager.title}</h5>
        <div class="card-body">
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`
};

// to generate engineer's card
function generateEngineer(engineer) {
    return `
<div class="col col-12 col-sm-4 col-md3">
    <div class="card h-100 ">
        <h4 class="card-header custom-card-header">${engineer.name}</h4>
        <h5 class="card-header custom-card-header">${engineer.title}</h5>
        <div class="card-body">
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">GitHub: ${engineer.github}</a></p>
        </div>
    </div>
</div>`
};

// to generate intern's card
function generateIntern(intern) {
    return `
<div class="col col-12 col-sm-4 col-md3">
    <div class="card h-100 ">
        <h4 class="card-header custom-card-header">${intern.name}</h4>
        <h5 class="card-header custom-card-header">${intern.title}</h5>
        <div class="card-body">
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">School:  ${intern.school}</a></p>
        </div>
    </div>
</div>`
};

// to get all cards in one array to display them in main function
function createCard(team) {

    console.table(team);

    const cardArray = [];

    for(let i = 0; i < team.length; i++){
        if (team[i].getRole() === "Intern") {
            cardArray.push(generateIntern(team[i]));
        }
        else if (team[i].getRole() === "Engineer") {
            cardArray.push(generateEngineer(team[i]));
        }else{
            cardArray.push(generateManager(team[i]));
        }
    }

    // cardArray.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => generateManager(manager)));
    // cardArray.push(team.filter((employee) => employee.getRole() === 'Engineer').map((engineer) => generateEngineer(engineer)).join(''));
    // cardArray.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => generateIntern(intern)).join(''));
    // console.log("what is in array" + cardArray);
    
    return cardArray.join('');
};

  module.exports = generateHTML; 