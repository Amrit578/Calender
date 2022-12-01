let dt = new Date();
dt.setDate(1);
let day = dt.getDay()

let endDate = new Date(
     dt.getFullYear(),
     dt.getMonth() + 1,
     0
).getDate()

let today = new Date().getDate()


let prevDate = new Date(
     dt.getFullYear(),
     dt.getMonth(),
     0
).getDate()    


let months = ["January","February","March","April","May","June","July","August",
"September","October","November","December"];


function createSelectOption(){
     
     let d = new Date();
     console.log(d.getMonth())
     let currentMonth = d.getMonth()+1;
     let yrOptions = '<option value = "0">Select year</option>'
     let mOptions = '<option value = "0">Select Month </option>';
     for(let i = 1950;i<=2022;i++){
          yrOptions += "<option value = '"+i+"'>" +i+ "</option>"
     }

     for(let i = 0;i<=11;i++){
          mOptions += "<option value = '"+months[i]+"'>" +months[i]+ "</option>"
     }
     document.getElementById('select-month').innerHTML = mOptions
     document.getElementById('select-year').innerHTML = yrOptions 
}











let cells = "";

for(let i = day;i>0;i--){
     cells +=  '<li class ="in-active">' + " " +"</li>"
}

for(let i = 1;i<=endDate;i++){
          cells += "<li class ='list'>" + i +"</li>"
}


document.getElementsByClassName('days')[0].innerHTML = cells;

let inputVal = document.getElementById('date_picker');
let button = document.getElementById('btn');

let ul = document.getElementsByTagName('ul');
let listEle = document.querySelectorAll('li')

button.addEventListener('click',()=>{
     if(inputVal.value == " "){
          alert("Please Enter a value")
     }
     if(inputVal.value>=32){
          alert("Please enter a valid date");
          inputVal.value = " "
     }
    for(let i = 1;i<=endDate;i++){
     if(i == inputVal.value){     
          let selectEle = listEle[i+3];
          if(selectEle.style.backgroundColor == "green"){
               selectEle.style.backgroundColor = "white";
               inputVal.value = " "
          }else{
               selectEle.style.backgroundColor = 'green';
               inputVal.value = " "  
          }  
     }else{
          let selectEle = listEle[i+3];
          selectEle.style.backgroundColor = 'white'
         
     }
    }
})


