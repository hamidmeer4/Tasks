

// 1)

// var arr = [1,42,12,66,33,13,42,42,4232,323]
// function thirdEle(){
//    return  arr.slice(3,4)
// }
// var b = thirdEle();
// console.log(b)





// 2)	Write a program that returns prime numbers from an array

// let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let result = [];
// function isPrime(num) {
//   if(num < 2)
//   return false;

//   for (let i = 2; i < num; i++){
//     if(num % i == 0){
//       return false;
//     }
//   }
//   return true;
// }
// num.forEach(function (element) {
//   const item = isPrime(element);
//   if (item) {
//     result.push(element);
//   }
// });
// console.log(result);  





// 5)	Write a program that returns non-repeating elements eg arr = [ ‘atal’, ‘hamza’, ‘Atal’, ‘Imad’, ‘Umer’, ‘UmeR’, ‘saqib’, ‘Hamza’] expected output = [‘atal’, ‘hamza’, ‘imad’, ‘umer’, ‘saqib’]

// let arr = ['atal','hamza','atal','Imad','Umer','Umer','saqib','hamza','hamza','atal','Imad']
// let Unique = [...new  Set(arr)]
// define set 

// console.log(Unique)









// 7)

// let arr =[12, 44, 23, 55, 65, 77, 99, 88, 102] ;

// let highest = -0;
// let secndLargest = -0;

// for(let i = 0 ; i < arr.length ; i++){
//   if(arr[i] > highest){
//     secndLargest = highest;
//     highest = arr[i];

//   }
// }
// console.log(secndLargest)



// 3)

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 3, 4];


// const result = array1.filter((x) => {
//   return !array2.includes(x);
// });


// console.log(result); 





                            // Object
// 1)

// function isEmpty(obj){
//   for(let key in obj){
//     return false;
//   }
//   return true ;
// }
// console.log(isEmpty())




// 4)

// let x = {

//   name: 'Hamza',

//  lastName: 'Akbar',

//   id: 22,
  
//  fullName: function () {
//   return this.name + this.lastName;
//   // esmy jab hum function varibale assign karengy tu phir ye function kaam nhi karta 

// }};

// for (let key in x) {
//   if (typeof x[key] === 'function') {
//     console.log(x[key]());
//   } else {
//     console.log(x[key]);
//   }
// }



// let x = {
//     name : "Atal",
//     num : undefined,
// }
// function checkProp () {
//     if(x.name == "Atal" && x.num == undefined){
//         return true;
//     }
//     else{
//         return false;

//     }
  
// }
// const a = checkProp();
// console.log(a);




// let x = {
//         name : "Atal",
//         id : 22,
//     }
//     function totalProp() { 

//     const result = Object.keys(x).length;
//     console.log(result)
//     }
//     totalProp();

    
    




// // Array Object


var  bookArray = [
    {
    Name: "History of Pakistan",
    Rating : 3,
    Price: 200,
    },
    {
        Name: "islamiyat",
        Rating :5,
        Price: 2000,
        },
    {
            Name: "english",
            Rating : 6,
            Price: 205,
              }, 
              
              {
                Name: "biology",
                Rating : 2 ,
                Price: 200,
                },

                {
                    Name: "chemistry",
                    Rating : 7,
                    Price: 2070,
                    },
                    {
                        Name: "science",
                        Rating : 1,
                        Price: 2060,
                        },

                ]
    
                for(var i = 0 ; i < bookArray.length ; i++){

                    // console.log(bookArray[i].Rating);
                    
                  if(bookArray[i].Rating >= 3 ){
                        console.log(bookArray[i].Name)  
                    }
        }
