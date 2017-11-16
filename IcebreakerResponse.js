//Goal is to output many instances of responses using the prototype style
//const emails = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"]
function IcebreakerResponse(email){
  this.email = email

}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(emails){
    return new IcebreakerResponse(emails);
  })
}

const data = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"]

let icebreakerResponses = IcebreakerResponse.BatchCreate(data)
icebreakerResponses
