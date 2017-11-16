function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(function(data) {
    return new IcebreakerResponse(data)
  })
}
