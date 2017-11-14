function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(email){return new IcebreakerResponse(email)})
}


//dont forget to include first return
