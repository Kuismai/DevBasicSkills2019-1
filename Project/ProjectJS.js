// general page functionality   

window.onload = function()
{
    document.getElementById("defaultOpen").click();

}

function openTab(tabName)
{
    
    var i, tabcontent, tablinks;
      
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++)
    {
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

// Conversion functions

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
    
    var validate = CONVERT(inputN, sys1, sys1);

    if (validate == inputN)
    {
        var result = CONVERT(inputN, sys1, sys2);

        document.getElementById("convertResult").innerHTML = result;
    }

    else
    {
        alert("Not a valid input.")
    }
}

function CONVERT(inputN, sys1, sys2)
{ 
    var numberified = parseInt(inputN, sys1);
    var result = numberified.toString(sys2);
    return result;
}

// Number Output functions

function outputTable()
{
    var basicTable = [];

    //generate values
    for (var i = 0; i < 51; i++)
    {
        basicTable[i] = new Array(4);
        basicTable[i][0] = i;
        basicTable[i][1] = CONVERT(i, 10, 2);
        basicTable[i][2] = CONVERT(i, 10, 8);
        basicTable[i][3] = CONVERT(i, 10, 16);
    }

    //actual table
    html = "<table><tr><th>DEC</th><th>BIN</th><th>OCT</th><th>HEX</th></tr><tr>";
  
    // loop through each row
    for (var i = 0; i< basicTable.length; i++)
    {
      for (var j = 0; j < 4; j++)
      {
          html += "<td>" + basicTable[i][j] + "</td>"
      }
        html += "</tr><tr>";
    }

    html += "</tr></table>";
  
    // output
    document.getElementById("outputTable").innerHTML = html;



}

function clearTable()
{
    document.getElementById("outputTable").innerHTML = "";
}

// Combinatorics functions

function disableP()
{
    var combo = document.getElementById("CorP");
    var perm = document.getElementsByName("permutation");

    if (combo.value == "permNo")
    {
        perm[0].setAttribute("disabled", "true");
        perm[1].setAttribute("disabled", "true");
    }

    if (combo.value == "permYes")
    {
        perm[0].removeAttribute("disabled");
        perm[1].removeAttribute("disabled");
    }
}

function comboButton()
{
    var permForm = document.getElementById("permChecked");
    var range = document.getElementById("comboRange").value;
    var sample = document.getElementById("comboSample").value;
    var choice = document.getElementById("CorP");
    var result = 1;

    if (choice.value == "permYes")
    {
        if (permForm.elements.permutation.value == "repeat")
            {
                for (i = 0; i < sample; i ++)
                    {
                        result *= range;
                    }
            }
        
        else
        {
           var diff = range - sample;

           if (diff < 0)
           {
               alert("Sample larger than range");
           }

           else
           {
               var m = factorial(range);
               var n = factorial(diff);
               result = m / n;
           }
        }
        
        
    }

    if (choice.value == "permNo")
    {
        var diff = range - sample;
        var m = factorial(range);
        var n = factorial(sample);
        var d = factorial(diff);

        result = m / (n * d);
    }

    document.getElementById("comboResult").innerHTML = result;

}

function factorial(num)
{
    if (num < 0)
    {
        return -1;
    }

    else if (num == 0 || num == 1)
    {
        return 1;
    }

    else
    {
        for (var i = num - 1; i >= 1; i --)
        {
            num = num * i;
        }
        return num;
    }

}

// Truth Table functions

function dothetruth()
{
    var basicP = ["T", "T", "F", "F"];
    var basicQ = ["T", "F", "T", "F"];

    var basicTruth = [];

    for (var i = 0; i < 4; i++)
    { 
        basicTruth[i] = new Array(3); 
    } 

    for (var i = 0; i < basicP.length; i++)
    {
        basicTruth[i][0] = basicP[i];
        basicTruth[i][1] = basicQ[i];
    }

    // creating the NOT table
    var basicNot = [];

    for (var i = 0; i < 2; i++)
    {
        basicNot[i] = new Array(2);
    }

    for (var i = 0; i < basicNot.length; i++)
    {
        basicNot[i][0] = basicQ[i];

        if (basicNot[i][0] == "T")
        {
            basicNot[i][1] = "F";
        }
    
        else if (basicNot[i][0] == "F")
        {
            basicNot[i][1] = "T";
        }
    }

    html = "<table><tr><th>p</th><th>&not;p</th></tr><tr>";
  
    // loop through each row
    for (var i = 0; i< basicNot.length; i++)
    {
        for (var j = 0; j < 2; j++)
        {
            html += "<td>" + basicNot[i][j] + "</td>"
        }
        
        html += "</tr><tr>";
    }

    html += "</tr></table>";
  
    // output
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
    for (var i = 0; i< basicAnd.length; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            html += "<td>" + basicAnd[i][j] + "</td>"
        }

        html += "</tr><tr>";
    }

    html += "</tr></table>";
  
    // output
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
    for (var i = 0; i< basicOr.length; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            html += "<td>" + basicOr[i][j] + "</td>"
        }

        html += "</tr><tr>";

    }
    html += "</tr></table>";
  
    // output
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
    for (var i = 0; i< basicNor.length; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            html += "<td>" + basicNor[i][j] + "</td>"
        }

        html += "</tr><tr>";

    }

    html += "</tr></table>";
  
    // output
    document.getElementById("NORTable").innerHTML = html;


     // the XOR table
     var basicXor = basicTruth;

    for (var i = 0; i < basicTruth.length; i++)
    {
        if (basicTruth[i][0] == basicTruth[i][1])
        {
            basicXor[i][2] = "F";
        }

        else
        {
             basicXor[i][2] = "T";
        }
    }
     
     // draw the table
     html = "<table><tr><th>p</th><th>q</th><th>p&#8891;q</th></tr><tr>";
   
     // loop through each row
    for (var i = 0; i < basicXor.length; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            html += "<td>" + basicXor[i][j] + "</td>"
        }

        html += "</tr><tr>";
    }
     html += "</tr></table>";
   
     // input
     document.getElementById("XORTable").innerHTML = html;

}

  // Random Values functions

function randomize ()
{
    var range = document.getElementById("randomRange").value;
    var sample = document.getElementById("randomSample").value;
    var results = [];

    for (var i = 0; i < sample; i++)
    {
        results[i] = Math.ceil(Math.random() * range);
    }

    //create a range axis
    var xvalues = [];

    for (var i = 0; i < range; i++)
    {
        xvalues[i] = i + 1;
    }

    // generate values
    var yvalues = [];

    for (var i = 0; i < range; i++)
    {
        var z = 0;

        for (var j = 0; j < results.length; j++)
        {
            if (results[j] == i)
            {
                z++;
            }
        }
    
        yvalues[i] = z;
    }


    var data = [
          {
           x:  xvalues,
           y: yvalues,
           type: 'bar'
          }
    ];
           
    Plotly.newPlot('randomResult', data, {staticPlot: true});

}

  // Custom function

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