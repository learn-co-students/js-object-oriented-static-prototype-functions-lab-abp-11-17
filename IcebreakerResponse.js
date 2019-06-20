function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(email => new IcebreakerResponse(email))
}
