function enterName() {
    var studName = prompt("Enter Your Full Name:");

    if (studName != null)
    {
        document.getElementById("stud-name").innerHTML = "Student Name:" + " " + studName;
    }
}

function getRemark() {
    var grMath = document.getElementById("gradeMath").value;
    var grSci = document.getElementById("gradeSci").value;
    var grEng = document.getElementById("gradeEng").value;
    var grFil = document.getElementById("gradeFil").value;
    var grPe = document.getElementById("gradePe").value;
   
    grMath = parseInt(grMath);
    grSci = parseInt(grSci);
    grEng = parseInt(grEng);
    grFil = parseInt(grFil);
    grPe = parseInt(grPe);
    
    
    if (grMath <= 100 && grMath >= 90)
    {
        document.querySelector("#mathema").textContent="Excellent";
    }
    else if (grMath <= 89 && grMath >= 80)
    {
        document.querySelector("#mathema").textContent="Good";
    }
    else if (grMath <= 79 && grMath >= 70)
    {
        document.querySelector("#mathema").textContent="Average";
    }
    else if (grMath <= 69 && grMath >= 60)
    {
        document.querySelector("#mathema").textContent="Poor";
    }
    else if (grMath <= 59 && grMath >= 0)
    {
        document.querySelector("#mathema").textContent="Fail";
    }
    else 
    {
        alert("Invalid")
    }

     
    if (grSci <= 100 && grSci >= 90)
    {
        document.querySelector("#scis").textContent="Excellent";
    }
    else if (grSci <= 89 && grSci >= 80)
    {
        document.querySelector("#scis").textContent="Good";
    }
    else if (grSci <= 79 && grSci >= 70)
    {
        document.querySelector("#scis").textContent="Average";
    }
    else if (grSci <= 69 && grSci >= 60)
    {
        document.querySelector("#scis").textContent="Poor";
    }
    else if (grSci <= 59 && grSci >= 0)
    {
        document.querySelector("#scis").textContent="Fail";
    }
    else 
    {
        alert("Invalid")
    }

    
    if (grEng <= 100 && grEng >= 90)
    {
        document.querySelector("#englis").textContent="Excellent";
    }
    else if (grEng <= 89 && grEng >= 80)
    {
        document.querySelector("#englis").textContent="Good";
    }
    else if (grEng <= 79 && grEng >= 70)
    {
        document.querySelector("#englis").textContent="Average";
    }
    else if (grEng <= 69 && grEng >= 60)
    {
        document.querySelector("#englis").textContent="Poor";
    }
    else if (grEng <= 59 && grEng >= 0)
    {
        document.querySelector("#englis").textContent="Fail";
    }
    else 
    {
        alert("Invalid")
    }

     
    if (grFil <= 100 && grFil >= 90)
    {
        document.querySelector("#fili").textContent="Excellent";
    }
    else if (grFil <= 89 && grFil >= 80)
    {
        document.querySelector("#fili").textContent="Good";
    }
    else if (grFil <= 79 && grFil >= 70)
    {
        document.querySelector("#fili").textContent="Average";
    }
    else if (grFil <= 69 && grFil >= 60)
    {
        document.querySelector("#fili").textContent="Poor";
    }
    else if (grFil <= 59 && grFil >= 0)
    {
        document.querySelector("#fili").textContent="Fail";
    }
    else 
    {
        alert("Invalid")
    }

    
    if (grPe <= 100 && grPe >= 90)
    {
        document.querySelector("#pep").textContent="Excellent";
    }
    else if (grPe <= 89 && grPe >= 80)
    {
        document.querySelector("#pep").textContent="Good";
    }
    else if (grPe <= 79 && grPe >= 70)
    {
        document.querySelector("#pep").textContent="Average";
    }
    else if (grPe <= 69 && grPe >= 60)
    {
        document.querySelector("#pep").textContent="Poor";
    }
    else if (grPe <= 59 && grPe >= 0)
    {
        document.querySelector("#pep").textContent="Fail";
    }
    else 
    {
        alert("Invalid")
    }

    
    if (grMath <= 100 && grMath >= 90 && grSci <= 100 && grSci >= 90 && grEng <= 100 && grEng >= 90 && grFil <= 100 && grFil >= 90 && grPe <= 100 && grPe >= 90)
    {
        document.getElementById("rank-h").textContent = "Top Honor Student"
    }
    else if (grSci <= 69 && grSci >= 0 && grPe <= 69 && grPe >= 0 && grFil <= 69 && grFil >= 0 && grMath <= 69 && grMath >= 0 && grEng <= 69 && grEng >= 0)
     {
         document.getElementById("rank-h").textContent="Repeater";
     }
    else if ((grMath <= 100 && grMath >= 90 && grSci <= 100 && grSci>= 90 && grPe <= 100 && grPe >= 90) || (grMath <= 100 && grMath >= 90 && grSci <= 100 && grSci >= 90 && grFil <= 100 && grFil >= 90) || (grMath <= 100 && grMath >= 90 && grSci <= 100 && grSci >= 90 && grEng <= 100 && grEng >= 90) || (grMath <= 100 && grMath >= 90 && grFil <= 100 && grFil >= 90 && grPe <= 100 && grPe >= 90) || (grMath <= 100 && grMath >= 90 && grEng <= 100 && grEng >= 90 && grPe <= 100 && grPe >= 90) || (grMath <= 100 && grMath >= 90 && grFil <= 100 && grFil >= 90 && grEng <= 100 && grEng >= 90) || (grFil <= 100 && grFil >= 90 && grSci <= 100 && grSci >= 90 && grPe <= 100 && grPe >= 90) || (grEng <= 100 && grEng >= 90 && grSci <= 100 && grSci >= 90 && grPe <= 100 && grPe >= 90) || (grEng <= 100 && grEng >= 90 && grSci <= 100 && grSci >= 90 && grFil <= 100 && grFil >= 90) ||(grEng <= 100 && grEng>= 90 && grFil <= 100 && grFil >= 90 && grPe <= 100 && grPe >= 90) )
    {
        document.getElementById("rank-h").textContent="Second Honor Student";
    }
    else
     {
         document.getElementById("rank-h").textContent="None";
     }
}

