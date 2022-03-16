
  window.onload = function(){
     document.getElementById('date').focus();
 }

function age() {  
var d1 = document.getElementById('date').value;  
    
var m1 = document.getElementById('month').value;  
var y1 = document.getElementById('year').value;  
var date = new Date();  
var d2 = date.getDate();  
var m2 = 1 + date.getMonth();  
var y2 = date.getFullYear();  
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
var d,m,y;

// if((d1 == ' ') || (m1 == ' ') || (y1 == ' ') || (0>d1>31) || (0>m1>12) || (0>y1>2022)){
//         console.log('Enter Valid data');
//     }
    if((d1>31) || (d1 < 0) || (m1 > 12) || (m1 < 0) || (y1 > y2) ||(y1 < 0)){
        document.getElementById('age').innerHTML = 'Please Enter Valid Input Details';
    }
    
    else if((d1 == "") || (m1 == "") || (y1 == "")){
        
        alert('Fields cannot be empty');
    }
    else{
    if((d1 > d2) && (0<d1<32)){  
     d2 = d2 + month[m2 - 1];  
     m2 = m2 - 1;  
    }
    
    if((m1 > m2) && (0 < m1 < 13)){  
     m2 = m2 + 12;  
     y2 = y2 - 1;  
     
    }  
    
    if((y1 <= y2) && (y1>0))
      y = y2 - y1;  
    
   m=m2-m1;
   d=d2-d1;
   document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';  
   }  
    
}


