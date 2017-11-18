function IcebreakerResponse(email){
  this.email = email
}


IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(function(input){
    return new IcebreakerResponse(input)
  })
}
