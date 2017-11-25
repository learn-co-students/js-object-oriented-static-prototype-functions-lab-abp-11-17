function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  return email.map(function(content){
    return new IcebreakerResponse(content);
  })
}
