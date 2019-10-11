        //  prompt with conditional


var userAge = prompt('Enter your Birth-Year!');
var drinkList = ['vodka ', 'wisky ', 'beer '];
var nonAl = ['tea ', 'coffee ', '& ', 'orange juice'];

if( userAge<=1999){

  alert('Yeah, Congrates!! You can drink!');
  alert('Here is is drink menu! ' + drinkList);
  var yeah = prompt('So what would you like to drink ?');
  document.write('Here is your ' + yeah );
}
else{
  
  alert("Sorry! you can not drink alchahol!");
  prompt('Would you like to see non-alcohol list?');
  alert('here is drinks ' + nonAl);
  var softDrink = prompt('So What would you like to have ?');
  document.write('Here is your ' + softDrink + ' have a enjoy!');
}

  


