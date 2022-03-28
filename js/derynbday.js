



function birthday(){
    fetch("json/small.txt")
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        document.getElementById('date_time_div').innerText =text;
    });
    //.then(jsondata => document.getElementById('date_time_div').innerText = typeof jsondata);
    }
