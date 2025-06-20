function createMultiplicationTable()
{
    var maxcol=45;
    var maxrow=24;
    var table = '<table border="1">';
    table+='<tr><th></th>';
    for (var col=1; col<=maxcol; col++)
    {
        table += `<th id="colh${col}">${col}</th>`;
    }
    table += '</tr>';
    for (var row=1; row<=maxrow; row++ )
    {
        table += `<tr><th id="rowh${row}">${row}</th>`;
        for (var col=1; col<=maxcol; col++)
        {
            var val=row*col;
            table += `<td id="cell${row}-${col}" 
                    onmouseover="highlightCell(${row},${col})" 
                    onmouseout="unhighlightCell(${row},${col})"
                    onclick="showExercise(${row},${col})">
                    ${val}</td>`;
        }
         table += `<tr>`
    }
    table += '</table>';
    document.getElementById("multiTable").innerHTML = table;
}
window.onload = createMultiplicationTable;

function highlightCell(row, col) {
    document.getElementById(`cell${row}-${col}`).classList.add('highlight');
    document.getElementById(`rowh${row}`).classList.add('highlight-header');
    document.getElementById(`colh${col}`).classList.add('highlight-header');
}
function unhighlightCell(row, col) {
    document.getElementById(`cell${row}-${col}`).classList.remove('highlight');
    document.getElementById(`rowh${row}`).classList.remove('highlight-header');
    document.getElementById(`colh${col}`).classList.remove('highlight-header');
}
function showExercise(row, col) {
    var val = row * col;
    document.getElementById("exercise").innerText = `${row} × ${col} = ${val}`;
}