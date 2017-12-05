function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(arr) {
  return arr.map(function(emailEach) {
    return new IcebreakerResponse(emailEach);
  })
}
