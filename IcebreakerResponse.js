function IcebreakerResponse(email){
  this.email = email;
}
IcebreakerResponse.BatchCreate = function (emails) {
  /*
  let responses = [];
  emails.forEach(function (el) {
    responses.push(new IcebreakerResponse(el));
  });
  return responses;
  */
  return emails.map(function (el) {
    return new IcebreakerResponse(el);
  });

}
