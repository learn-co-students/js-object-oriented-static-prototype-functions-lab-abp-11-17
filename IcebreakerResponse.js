function IcebreakerResponse(email){
  this.email = email
}

//static IcebreakerResponse.BatchCreate = function(emails){
  //let i=0;
  //return emails.map(function(mail){
    //return new IceBreakerResponse(mail[i])
    //i++
  //})
//}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email){
    return new IcebreakerResponse(email)
  })
}
