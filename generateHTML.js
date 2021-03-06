const generateLastProperty = (employee) => {
    if (employee.getRole() == "Manager") {
      return ` <div class="card-header bg-primary text-white">Office number: ${employee.officeNumber}</div>`;
    } else if (employee.getRole() == "Engineer") {
      return ` <a href="${employee.github}" class="card-header p-2 flex-shrink-1 bg-primary text-white">${employee.github}</a>`;
    } else if (employee.getRole() == "Intern") {
      return ` <div class="card-header bg-primary text-white">School: ${employee.school}</div>`;
    }
}

const generateHTML = (teamArray) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Our Team</h1>
    </div>
  </div>
  <div class="d-flex flex-row ">

  ${teamArray.map((employee) => {
    return `

      <div class="card border-primary mb-3" style="width: 18rem;">
        <div class="card-body text-primary">
          <div class="card-header bg-primary text-white"> ${employee.getName()}</div>
          <div class="card-header bg-primary text-white"> ${employee.getRole()}</div>
          <div class="card-header bg-primary text-white">ID: ${employee.getId()}</div>
          <a href=mailto:"${employee.getEmail()}" class="card-link text-primary">Email: ${employee.getEmail()}</a>
         ${generateLastProperty(employee)}
        </div>
      </div>
    
      `;
  })}

  </div>
  

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>`;

module.exports = generateHTML;
