function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email){
    //* new array based on this function
    return new IcebreakerResponse(email)
  })
}
