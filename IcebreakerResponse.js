function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(array) {
  return array.map(function(users){
    return new IcebreakerResponse(users)
  })
}
