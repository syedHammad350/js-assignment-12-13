// question 1

var first_user_num=+prompt("enter a  first number")
var second_user_num=+prompt("enter a second number")
if(first_user_num==second_user_num){
    alert("Both are equal")

}else if(first_user_num>second_user_num){
    alert("first user num is large")
}else if(first_user_num<second_user_num){
    alert("second user num is large")
}
//  QUESTION 2

var user_num=+prompt("Enter a number")
 if(user_num==0){
    alert("this number is zero")
 }else if(user_num<0){
    alert("this number is negative")
 }else if(user_num>0){
    alert("this number is positive")
 }

//QUESTION 3

var my_pass="hammad12"
var user_pass=prompt("Enter a password")
 if(my_pass==user_pass){
    alert("correct password")
}else{
    alert("incorrect password")
}

// QUESTION 4

var hour=+prompt("enter a hour")
if(hour<18){
    alert("good day")
}else{
    alert("good evening")

}

// QUESTION 5

var time=+prompt("enter a time")
if (time>=0 & time<1200){
    alert('Good morning')
}else if (time>=1200 & time<1700){
    alert('Good Afternoon')
}else if (time>=1700 & time<2100){
    alert('Good Evening')
}else if (time>=2100 & time<2359){
    alert('Good night')
}