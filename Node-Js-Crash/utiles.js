//file that will have functions that we will use in our project

function genereateRandomNumber(){
    return Math.floor(Math.random() *100);
}
function printTheKingName(){
    return 'Nour'
}
module.exports = {
    genereateRandomNumber,
    printTheKingName

}