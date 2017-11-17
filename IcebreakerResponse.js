function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(userEmails){
    return new IcebreakerResponse(userEmails)
  })
}
