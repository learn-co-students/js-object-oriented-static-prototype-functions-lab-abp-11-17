function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
      return emails.map(function(userData){
          return new IcebreakerResponse(userData)
      })
}

// function User(name, email){
//   this.name = name
//   this.email = email
// }
//
// User.BatchCreate = function(data){
//   return data.map(function(userData){
//     return new User(userData[0], userData[1])
//   })
// }
//
// const data = [
//   ["Avi", "avi@flatironschool.com"],
//   ["Grace", "grace@hopper.com"],
//   ["Alan", "alan@xparc.com"]
// ]
//
// let users = User.BatchCreate(data)
