function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(arr){
  return arr.map(function(emails){
    return new IcebreakerResponse(emails)
  })
}
