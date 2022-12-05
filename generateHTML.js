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
            <div class="row">
                ${createCard(team)};
            </div>
        </main>
        <script src="./development/js/script.js"></script>
    </body>
</html>`
};


function generateManager(manager) { 
    return `
<section class="col-12 col-md-8 col-lg-9">
    <div class="row" id="managerCard">
        <div class="col">
            <div class="card h-100 ">
                <h4 class="card-header custom-card-header">${manager.name}</h4>
                <h5 class="card-header custom-card-header">Mahager</h5>
                <div class="card-body">
                    <p class="card-text">ID: ${manager.id}</p>
                    <p class="card-text">Email: ${manager.email}</p>
                    <p class="card-text">Office number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
    </div>    
</section>`
}

function generateEngineer(engineer) {
    retutn `
<section class="col-12 col-md-8 col-lg-9">
    <div class="row" id="today-forecast">
        <div class="col">
            <div class="card h-100 ">
                <h4 class="card-header custom-card-header">${engineer.name}</h4>
                <h5 class="card-header custom-card-header">Mahager</h5>
                <div class="card-body">
                    <p class="card-text">ID: ${engineer.id}</p>
                    <p class="card-text">Email: ${engineer.email}</p>
                    <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}"</a></p>
                </div>
            </div>
        </div>
    </div>    
</section>`
}
  
function generateIntern(intern) {
    return `
<section class="col-12 col-md-8 col-lg-9">
    <div class="row" id="today-forecast">
        <div class="col">
            <div class="card h-100 ">
                <h4 class="card-header custom-card-header">${intern.name}</h4>
                <h5 class="card-header custom-card-header">Mahager</h5>
                <div class="card-body">
                    <p class="card-text">ID: ${intern.id}</p>
                    <p class="card-text">Email: ${intern.email}</p>
                    <p class="card-text">School:  ${intern.school}</a></p>
                </div>
            </div>
        </div>
    </div>    
</section>`
}

function createCard(team) {

    for(let i = 0; i < team.length; i++){
        if (team[i].getRole() === "Manager") {
            return generateManager((team[i].getRole()));
        }
        else if (team[i].getRole() === "Engineer") {
            return generateEngineer((team[i].getRole()));
        }else{
            return generateIntern((team[i].getRole()));
        }



        // if (team.filter((team) => employee.getRole() === "Manager") => generateManager(manager)) {
        //     return generateManager(team);
        // }
        // else if (team.filter((team) => employee.getRole() === "Employee")) {
        //     return generateEngineer(engineer);
        // }else{
        //     return generateIntern(intern);
        // }
    
    
    }
}

  
  module.exports = generateHTML; 