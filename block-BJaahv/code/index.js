// # 🎖 Object Creation Patterns

// Create a object using the following patterns given below.

// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// function projectDetail(name,id,noOfProjects){
// let project={}
// project.name=name
// project.id=id
// project.noOfProjects=noOfProjects
// project.getProjects= function(){
// return this.noOfProjects
// }
// project.changeName= function(newName){
//     this.name=newName
//     return this.name
// }
// project.incrementProject= function(value){
//     this.noOfProjects=this.noOfProjects+value
//     return this.noOfProjects
// }
// project.decrementProject= function(value){
//     this.noOfProjects=this.noOfProjects-value
//     return this.noOfProjects
// }
// return project
// }

// let user1=projectDetail(`Tom`,33,3)
// let user2=projectDetail(`Jerry`,45,5)

// Prototypal pattern

// let method = {
//     getProjects: function(){
//         return this.noOfProjects
//         },
//         changeName:function(newName){
//             this.name=newName
//             return this.name
//         },
//         incrementProject:function(value){
//             this.noOfProjects=this.noOfProjects+value
//             return this.noOfProjects
//         },
//        decrementProject:function(value){
//             this.noOfProjects=this.noOfProjects-value
//             return this.noOfProjects
//         },
// }
// function projectDetail(name,id,noOfProjects){
// let project= Object.create(method)
// project.name=name
// project.id=id
// project.noOfProjects=noOfProjects

// return project
// }

// let user1=projectDetail(`Tom`,33,3)
// let user2=projectDetail(`Jerry`,45,5)


// Pseudoclassical Way

// ProjectDetail.prototype = {
//         getProjects: function(){
//             return this.noOfProjects
//             },
//             changeName:function(newName){
//                 this.name=newName
//                 return this.name
//             },
//             incrementProject:function(value){
//                 this.noOfProjects=this.noOfProjects+value
//                 return this.noOfProjects
//             },
//            decrementProject:function(value){
//                 this.noOfProjects=this.noOfProjects-value
//                 return this.noOfProjects
//             },
//     }
//     function ProjectDetail(name,id,noOfProjects){
//     this.name=name
//     this.id=id
//     this.noOfProjects=noOfProjects
//     }
    
//     let user1= new ProjectDetail(`Tom`,33,3)
//     let user2= new ProjectDetail(`Jerry`,45,5)

// class
class ProjectDetail{
    constructor(name,id,noOfProjects){
        this.name=name
        this.id=id
        this.noOfProjects=noOfProjects
    }
    getProjects(){
        return this.noOfProjects
        }
        changeName(newName){
            this.name=newName
            return this.name
        }
        incrementProject(value){
            this.noOfProjects=this.noOfProjects+value
            return this.noOfProjects
        }
       decrementProject(value){
            this.noOfProjects=this.noOfProjects-value
            return this.noOfProjects
        }
}



let user1= new ProjectDetail(`Tom`,33,3)
let user2= new ProjectDetail(`Jerry`,45,5)

