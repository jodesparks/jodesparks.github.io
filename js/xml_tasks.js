//Define parent element
var parentElement = document.getElementById('ochreTableBody');
//Defin API URL
var url = "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";

//First function, called on <body>
function loadXML() {
    //Chain the next function to create the XHR
    XMLRequest(url);
    console.log('loadXML -- OK')
}

function XMLRequest(link){
    //Make the API call and send the results to the next function
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function () {
        if (this.readyState ==4 && this.status ==200) {
            listTexts(this.responseXML);
        };
    };
    connect.open('GET', link, true);
    connect.send();
    console.log('XML request -- ok')
}

function listTexts(sourceXML){
    //Project Title
    document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
    document.getElementById('setTitle').innerText = sourceXML.getElementsByTagName('set')[0].children[3].children[0].innerHTML;
    document.getElementById('setDescription').innerText = sourceXML.getElementsByTagName('set')[0].children[4].innerHTML;
    var licenseText = document.getElementById('license');
    licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
    licenseText.setAttribute('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);
    

    //Select, parse, and display the data
    console.log(sourceXML);
    var textList = sourceXML.getElementsByTagName('text');
    console.log(textList);
    for (i=0; i<textList.length; i++){
        //create one row per text
        var tablerow = document.createElement('tr');
        tablerow.setAttribute('class', 'ochreTableRows');
        tablerow.setAttribute('id', 'row_'+i);
        document.getElementById('ochreTableBody').appendChild(tablerow);
        //populate cells in the row
        var tabledata = document.createElement('td');
        tabledata.setAttribute('id', 'td_name_'+i);
        tabledata.textContent = textList[i].children[0].children[0].innerHTML;
        document.getElementById('row_'+i).appendChild(tabledata);
        var tabledata2 = document.createElement('td');
        tabledata2.setAttribute('id', 'td_descr_'+i);
        tabledata2.textContent = textList[i].children[3].innerHTML;
        document.getElementById('row_'+i).appendChild(tabledata2);
    }
}