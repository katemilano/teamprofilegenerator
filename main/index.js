const fs = require("fs");
const inquirer = require("inquirer");


const addPerson = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: "type",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"],
        }
    ]).then (response => {

        if(response.type === "Engineer"){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the engineer\'s name?',
                    name: "engineer"
                },
                {
                    type: 'input',
                    message: 'What is the engineer\'s id?',
                    name: "engineerId"
                },
                {
                    type: 'input',
                    message: 'What is the engineer\'s email?',
                    name: "engineerEmail"
                }, 
                {
                    type: 'input',
                    message: 'What is the engineer\'s Github username?',
                    name: "engineerUser"
                    
                },
            ]).then (response =>{
                contentE = `
                    <div class="justify-content-center">
                        <div class="card shadow border-light" style="max-width: 15rem;">
                            <div class="card-header bg-primary">
                                <h4>${response.engineer}</h4>
                                <h4> 
                                <i class="fa fa-gear"></i>
                                Engineer 
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="card" style="width: 12rem;">
                                    <ul class="list-group list-group-light">
                                    <li class="list-group-item">ID: ${response.engineerId} </li>
                                    <li class="list-group-item">Email: 
                                        <a href= "mailto:${response.engineerEmail}">${response.engineerEmail}</a>
                                    </li>
                                    <li class="list-group-item">Github: 
                                        <a href="https://github.com/${response.engineerUser}">${response.engineerUser}</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                fs.appendFile("team.html", contentE, err => {
                    if(err) console.log(err);
                    else console.log("success!");
                });
                addPerson();
            })
        }else if(response.type === "Intern"){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the Intern\'s name?',
                    name: "intern"
                },
                {
                    type: 'input',
                    message: 'What is the Intern\'s id?',
                    name: "internID"
                },
                {
                    type: 'input',
                    message: 'What is the Intern\'s email?',
                    name: "internEmail"
                }, 
                {
                    type: 'input',
                    message: 'What school does the Intern attend?',
                    name: "internSchool"
                    
                }
            ]).then (response =>{
                contentI = `
                    <div class="justify-content-center">
                        <div class="card shadow border-light" style="max-width: 15rem;">
                            <div class="card-header bg-primary">
                                <h4>${response.intern}</h4>
                                <h4><i class='fa fa-graduation-cap'></i>Intern </h4>
                            </div>
                            <div class="card-body">
                                <div class="card" style="width: 12rem;">
                                    <ul class="list-group list-group-light">
                                    <li class="list-group-item">ID: ${response.internID} </li>
                                    <li class="list-group-item">Email: 
                                        <a href= "mailto:${response.internEmail}">${response.internEmail}</a>
                                    </li>
                                    <li class="list-group-item">School: ${response.internSchool}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                addPerson();
                fs.appendFile("team.html", contentI, err => {
                    if(err) console.log(err);
                    else console.log("success!");
                });
                
            })
        }else {
                contentL = `
                </section>
            
        </body>
        </html>
                `
                fs.appendFile("team.html", contentL, err => {
                    if(err) console.log(err);
                    else console.log("success!");
                });
                
            }
    });
};

inquirer.prompt([
{
    type: 'input',
    message: 'What is the team manager\'s name?',
    name: "manager"
},
{
    type: 'input',
    message: 'What is the team manager\'s id number?',
    name: "managerId"
},
{
    type: 'input',
    message: 'What is the team manager\'s email?',
    name: "managerEmail"
},
{
    type: 'input',
    message: 'What is the team manager\'s office number?',
    name: "managerNumber"
}
]).then (response => {
    const contentHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">    </head>
      </head>
      <body>
          <header>
            <h1>My Team</h1>
          </header>
           
                <div class="justify-content-center">
                    <div class="card shadow border-light" style="max-width: 15rem;">
                        <div class="card-header bg-primary">
                            <h4>${response.manager}</h4>
                            <h4> <i class="fa fa-coffee"></i> Manager </h4>
                        </div>
                        <div class="card-body">
                            <div class="card" style="width: 12rem;">
                                <ul class="list-group list-group-light">
                                  <li class="list-group-item">ID: ${response.managerId} </li>
                                  <li class="list-group-item">Email: 
                                      <a href= "mailto:${response.managerEmail}">${response.managerEmail}</a>
                                  </li>
                                  <li class="list-group-item">Office Number: ${response.managerNumber}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    `;

    const contentCSS = `
    h1{
        color: white;
        margin-left: 40%;
        padding: 50px;
        font-size: 35px;
    }
    
    header{
        background: rgb(121, 173, 241);  
    }
    
    .whole{
    margin-left: 50px;
    margin-right: 50px;
    }
    
    .shadow{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 20px;
        margin-right: 20px;
        padding: 0;
    }
    
    h4{
        color: white;
    
    }
    
    p{
        font-size: 15px;
    }
    
    ul{
        font-size: 12px;
    }
    
    .shadow:first-child {
        float: left;
        margin-left: 80px;
    }
    
    .shadow:nth-child(4n) {
        float: right;
        margin-right: 80px;
    }
        
    .shadow:nth-child(4n+1) {
        float: left;
        margin-left: 80px;
    }    
    `;

    fs.writeFile("team.html", contentHTML, err => {
        if(err) console.log(err);
    });

    fs.writeFile("style.css", contentCSS, err => {
        if(err) console.log(err);
         
    });

    addPerson ();
       

});
