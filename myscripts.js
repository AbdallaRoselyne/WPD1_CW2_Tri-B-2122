var form=document.getElementById('Roselyne')
form.addEventListener('submit', quiz_process);
function quiz_process(event){
     event.preventDefault()
     var marks = 0
        var questionone=document.getElementById('quiz2').value;
               var questiontwo = document.querySelector( 'input[name="hospone"]:checked').value;
               var questionthree = document.querySelector( 'input[name="payone"]:checked').value;
               var questionfour=document.getElementById('quiz4').value;
               var questionfive = document.querySelector( 'input[name="heone"]:checked').value;

               if(questionone=="Nairobi"){
                marks+=20;
                console.log(marks)
            }
            else{
                const correction = document.createElement("p");
                correction.innerHTML = "Nairobi";
                document.getElementById("cquiz").appendChild(correction);
             }
             if(questiontwo=="The Nairobi Hospital"){
                marks+=20;
                console.log(marks)
            }
            else{
                const correction = document.createElement("p");
                correction.innerHTML = "The Nairobi Hospital";
                document.getElementById("cquizone").appendChild(correction);
             }

             if(questionthree=="Electronic Bank Transfer"){
                marks+=20;
                console.log(marks)
            }
            else{
                const correction = document.createElement("p");
                correction.innerHTML = "Electronic Bank Transfer";
                document.getElementById("cquizthree").appendChild(correction);
             }

             if(questionfour=="Johnson & Johnson"){
                marks+=20;
                console.log(marks)
            }
            else{
                const correction = document.createElement("p");
                correction.innerHTML = "Johnson & Johnson";
                document.getElementById("cquizfour").appendChild(correction);
             }

             if(questionfive=="Nairobi West Hospital"){
                marks+=20;
                console.log(marks)
            }
            else{
                const correction = document.createElement("p");
                correction.innerHTML = "Nairobi West Hospital";
                document.getElementById("cquizfive").appendChild(correction);
             }

             total_marks=marks
             document.querySelector(".display-score").style.display="flex"
             document.querySelector(".display").textContent="Your Score is " +total_marks

             
        
}
