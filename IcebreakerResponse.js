function IcebreakerResponse(email){
  this.email = email
}

/*take in an array which we call emailArray
and them map it to get new array, in which we
get each email in the array and send it to
the IcebreakerResponse function*/
IcebreakerResponse.BatchCreate = function(emailArray) {
  return emailArray.map(function (emails) {
    return new IcebreakerResponse(emails);
  });
}
