
const generateHTML = ({ teamManager, id, email, officeNumber }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<title>Document</title>
</head>
<body>
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
<div class="card-header">Team Manager: ${teamManager}</div>
<div class="card-body">
  <h5 class="card-title">employee ID: ${id}</h5>
  <h5 class="card-title">Email: ${email}</h5>
  <p class="card-text">Office#: ${officeNumber}</p>
  
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;


module.exports = generateHTML;