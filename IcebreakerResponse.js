function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(function (emailData) {
    return new IcebreakerResponse(emailData);
  })

}
