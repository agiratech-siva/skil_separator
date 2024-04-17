const input = document.getElementById("input");
const submit = document.getElementById("submit");
const container = document.getElementById("container");



submit.addEventListener("click", () => {
    const string = input.value;
    // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const array = string.match(/(?:\[.*?\])|(?:[^\s]+)/g).map(element => {
    if (element.startsWith('[') && element.endsWith(']')) {
        return JSON.parse(element);
    } else {
        return element;
    }
});

console.log(array);


    
    for(let j=0; j<array[1].length; j++){
        const yearmonth = array[2].split(".");
        let months;
        if(yearmonth.length == 1 ){
            months = 0
        }else {
            months = Math.ceil((yearmonth[1] * 12) / 10 );
        }

        const row = document.createElement("p");
        row.textContent = array[0] + ',' + array[1][j] + ',' + "primary_skill" + ',' +  yearmonth[0] + ','
        + months + ',' + (yearmonth[0] * 12 + months) + ','  + "true"

        container.appendChild(row);
        
    }
    
    for(let j=0; j<array[3].length; j++){
        const yearmonth = array[4].split(".");
        let months;
        if(yearmonth.length == 1 ){
            months = 0
        }else {
            months = Math.ceil((yearmonth[1] * 12) / 10);
        }

        const row = document.createElement("p");
        row.textContent = array[0] + ',' + array[3][j] + ',' + 'secondary_skill' + ',' + yearmonth[0] + ',' +
    months + ',' + (yearmonth[0] * 12 + months) + ',' + 'false';


        container.appendChild(row);
        
    }
    
    
    for(let j=0; j<array[5].length; j++){
        const yearmonth = array[6].split(".");
        let months;
        if(yearmonth.length == 1 ){
            months = 0
        }else {
            months = Math.ceil((yearmonth[1] * 12) / 10);
        }
        const row = document.createElement("p");
        row.textContent = array[0] + ',' + array[5][j] + ',' + "tertiary_skill" + ',' +  yearmonth[0] + ','
        + months + ',' + (yearmonth[0] * 12 + months) + ','  + "false"
        container.appendChild(row);
    }
    
    for(let j=0; j<array[7].length; j++){
        // 
        const row = document.createElement("p");
        row.textContent = array[0] + ',' + array[7][j] + ',' + "database" + ',' +  "null" + ','
        + "null" + ',' + "null" + ','  + "false"
        container.appendChild(row);
    }
    
    for(let j=0; j<array[8].length; j++){
        const row = document.createElement("p");
    
       row.textContent = array[0] + ',' + array[8][j] + ',' + "framework" + ',' +  "null" + ','
       + "null" + ',' + "null" + ','  + "false"
       container.appendChild(row);

    }
    
    if(array[10].toLowerCase() == 'yes' ){
        const yearmonth = array[12].split(".");
        let months;
        if(yearmonth.length == 1 ){
            months = 0
        }else {
            months = Math.ceil((yearmonth[1] * 12) / 10);
        }
        for(let j=0; j<array[8].length; j++){
        const row = document.createElement("p");
        
        row.textContent = array[0] + ',' + array[11][j] + ',' + "devops" + ',' +  yearmonth[0] + ','
        + months + ',' + (yearmonth[0] * 12 + months) + ','  + "false"
       container.appendChild(row);

    }
    }



})