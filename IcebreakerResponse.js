function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails) {
// emails = ["1@temp.co", '2@yourmom.com']

  return emails.map(function(email){
    return new IcebreakerResponse(email)
    // so it's really just that I had a second argument here whoops
  })
}
