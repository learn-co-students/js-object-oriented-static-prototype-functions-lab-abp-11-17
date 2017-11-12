function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(userEmail){
    return new IcebreakerResponse(userEmail)
  })
}
