   

window.onload = function()
{
    document.getElementById("defaultOpen").click();

}



function openTab(tabName) {
    
    var i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    //make sure other tabs are inactive
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++)
    {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    //make the chosen tab active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



function conversionButton() {
    var conForm = document.forms["convertForm"];
    var inputN = conForm.elements["convertSource"].value;
    var fromsys = conForm.elements["fromNum"].value;
    var tosys = conForm.elements["toNum"].value;
    
    var fromNum= new Array();
    fromNum["DEC"]=10;
    fromNum["BIN"]=2;
    fromNum["OCT"]=8;
    fromNum["HEX"]=16;

    var toNum= new Array();
    toNum["DEC"]=10;
    toNum["BIN"]=2;
    toNum["OCT"]=8;
    toNum["HEX"]=16;
    
    var sys1 = fromNum[fromsys];
    var sys2 = toNum[tosys];
    console.log(sys1);
    console.log(sys2);

    var result = CONVERT(inputN, sys1, sys2);

    document.getElementById("convertResult").innerHTML = result;
}

    function CONVERT(inputN, sys1, sys2)
   { 
    var numberified = parseInt(inputN, sys1);
    console.log(numberified);
    var result = numberified.toString(sys2);
    return result;
}



function dothetruth()
{
    var basicTable = ["p", "q", "T", "T", "T", "F", "F", "T", "F", "F"];
    var basicP = ["T", "T", "F", "F"];
    var basicQ = ["T", "F", "T", "F"];

    var basicTruth = [];

    for (var i = 0; i < 4; i++) { 
        basicTruth[i] = new Array(3); 
    } 

    for (var i = 0; i < basicP.length; i++)
    {
        basicTruth[i][0] = basicP[i];
        basicTruth[i][1] = basicQ[i];
    }

    // creating the AND table

    var basicAnd = basicTruth;
    for (var i = 0; i < basicTruth.length; i++)
    {
        if ((basicTruth[i][0] == "T")&&(basicTruth[i][1] == "T"))
        {
            basicAnd[i][2] = "T";
        }
        else
        {
            basicAnd[i][2] = "F";
        }
    }
    
    // draw the table
    html = "<table><tr><th>p</th><th>q</th><th>p&and;q</th></tr><tr>";
  
    // loop through each row
    for (var i = 0; i< basicAnd.length; i++) {
      for (var j = 0; j < 3; j++)
      {
          html += "<td>" + basicAnd[i][j] + "</td>"
      }
        html += "</tr><tr>";

    }
    html += "</tr></table>";
  
    // input
    document.getElementById("ANDTable").innerHTML = html;

    var basicOr = basicTruth;
    for (var i = 0; i < basicTruth.length; i++)
    {
        if ((basicTruth[i][0] == "T")||(basicTruth[i][1] == "T"))
        {
            basicOr[i][2] = "T";
        }
        else
        {
            basicOr[i][2] = "F";
        }
    }
    
    // draw the table
    html = "<table><tr><th>p</th><th>q</th><th>p&or;q</th></tr><tr>";
  
    // loop through each row
    for (var i = 0; i< basicOr.length; i++) {
      for (var j = 0; j < 3; j++)
      {
          html += "<td>" + basicOr[i][j] + "</td>"
      }
        html += "</tr><tr>";

    }
    html += "</tr></table>";
  
    // input
    document.getElementById("ORTable").innerHTML = html;
  }