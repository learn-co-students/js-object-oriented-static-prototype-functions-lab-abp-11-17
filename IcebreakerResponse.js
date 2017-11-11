function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(responses) {
  return responses.map(function(email) {
    return new IcebreakerResponse(email)
  })
}