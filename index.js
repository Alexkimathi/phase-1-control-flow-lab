function scuberGreetingForFeet(somevalue){
  // Write your code here!
  let ride
  if(somevalue < 400){
    ride ='This one is on me!';
  }else if(somevalue > 2000 && somevalue <= 2500){
    ride = 'I will gladly take your thirty bucks.'
  }else if (somevalue > 2500){
    ride= 'No can do.'
  }
  return ride
}

function ternaryCheckCity(city){
  // Write your code here!

  let message;
  if(city === "NYC"){
    message = "Ok, sounds good."
  }else{
    message = 'No go.'
  }
  return message
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  let message
  switch (tip) {
    case tip ="generous":
    message ='Thank you so much.'
      
      break;
      case tip = "not as generous":
      message = 'Thank you.';
      break;
  
    default:
      message = 'Bye.'
      break;
  }
  return message
}