function IcebreakerResponse(email){
  this.email = email
}

icebreaker.BatchCreate = function(emails){
  //emails = ["blah"]
  return emails.map(function(email){
    retrun new IcebreakerResponse(email)
  })
}
