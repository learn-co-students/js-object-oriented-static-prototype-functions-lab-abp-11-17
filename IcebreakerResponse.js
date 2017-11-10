function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emailList){
  return emailList.map(function(email){
    return new IcebreakerResponse(email);
  })
}
