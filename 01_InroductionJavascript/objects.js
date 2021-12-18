let writer = {
    firstName: 'Paulo',
    lastName: 'Cohleo',
    notableWork: 'The Alchemist',
    knowEnglish:true,
    country: 'Brazil',
    language: 'Portuguese',
    birthYear: 1947,
    bookList: ['The Pilgrimage', 'The Alchemist', 'The Valkire', 'The Fifth Mountain', 'The Archer'],
    sayHi: function() {
        console.log('Hello ' + this.firstName);
        
    }
}
writer.origin = 'Rio de Janeiro'; //TODO to add key value pair
delete writer.origin; //TODO to delete key values
writer.knowEnglish = false;
// writer.sayHi();
// console.log(writer.bookList[0]);
console.log(writer.knowEnglish);


//LOOP -> for-in
for (let key in writer) {
    console.log("key:-" + key + "\nValue:-" + writer[key]);
}
//convert the iterator in string