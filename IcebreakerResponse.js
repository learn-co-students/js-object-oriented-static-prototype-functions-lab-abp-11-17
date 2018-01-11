
function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.BatchCreate=function(arrEmails){
    return arrEmails.map(function(email){
    return new IcebreakerResponse(email);
});
}
