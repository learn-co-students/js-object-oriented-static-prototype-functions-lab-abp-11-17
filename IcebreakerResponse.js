function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(emailAddress){
    return new IcebreakerResponse(emailAddress)
  })
}
