const typeName =  (prompt ('What is your name?' ));
const typeSurname =  (prompt ('What is your surnmame?'));
const typeColor =  (prompt ('What is your favorite color?'));

let infoTogether = typeName + typeSurname + typeColor ;

document.getElementById ('output') .innerHTML = 'La tua password é:' + infoTogether + 21