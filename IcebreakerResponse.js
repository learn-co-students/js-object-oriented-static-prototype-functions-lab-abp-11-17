function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(elem => new IcebreakerResponse(elem))
}
