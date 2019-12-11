   

window.onload = function()
{
    document.getElementById("defaultOpen").click();

}



function openTab(tabName)
{
    
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



function conversionButton()
{
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

    // creating the NOT table
    var basicNot = [];
    for (var i = 0; i < 2; i++) {
        basicNot[i] = new Array(2);
    }

    for (var i = 0; i < basicNot.length; i++) {
        basicNot[i][0] = basicQ[i];

        if (basicNot[i][0] == "T") {
            basicNot[i][1] = "F";
        }
        else if (basicNot[i][0] == "F") {
            basicNot[i][1] = "T";
        }
    }

    html = "<table><tr><th>p</th><th>&not;p</th></tr><tr>";
  
    // loop through each row
    for (var i = 0; i< basicNot.length; i++) {
      for (var j = 0; j < 2; j++)
      {
          html += "<td>" + basicNot[i][j] + "</td>"
      }
        html += "</tr><tr>";

    }

    html += "</tr></table>";
  
    // input
    document.getElementById("NOTTable").innerHTML = html;


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

    // the OR table
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

    
    // the NOR table
    var basicNor = basicTruth;
    for (var i = 0; i < basicTruth.length; i++)
    {
        if ((basicTruth[i][0] == "F")&&(basicTruth[i][1] == "F"))
        {
            basicNor[i][2] = "T";
        }
        else
        {
            basicNor[i][2] = "F";
        }
    }
    
    // draw the table
    html = "<table><tr><th>p</th><th>q</th><th>&not;(p&or;q)</th></tr><tr>";
  
    // loop through each row
    for (var i = 0; i< basicNor.length; i++) {
      for (var j = 0; j < 3; j++)
      {
          html += "<td>" + basicNor[i][j] + "</td>"
      }
        html += "</tr><tr>";

    }
    html += "</tr></table>";
  
    // input
    document.getElementById("NORTable").innerHTML = html;

  }


  function dice(range)
  {
    var range = range;
    
    var result = Math.ceil(Math.random() * range);


    switch(range)
    {
        case 4:     document.getElementById("d4").innerHTML = result;
        break;
        case 6:     document.getElementById("d6").innerHTML = result;
        break;
        case 8:     document.getElementById("d8").innerHTML = result;
        break;
        case 10:     document.getElementById("d10").innerHTML = result;
        break;
        case 12:     document.getElementById("d12").innerHTML = result;
        break;
        case 20:     document.getElementById("d20").innerHTML = result;
        break;
        case 100:     document.getElementById("d100").innerHTML = result;
        break;

    }

  }

  function cleardice()
  {
    document.getElementById("d4").innerHTML = "";
    document.getElementById("d6").innerHTML = "";
    document.getElementById("d8").innerHTML = "";
    document.getElementById("d10").innerHTML = "";
    document.getElementById("d12").innerHTML = "";
    document.getElementById("d20").innerHTML = "";
    document.getElementById("d100").innerHTML = "";
  
  }