var myArr = []; 

function pushData(){

    var inputText= document.getElementById('text-id').value;
    myArr.push(inputText);
    var pval = "";

    for(i=0;i<myArr.length;i++){
        pval=pval+myArr[i]+ "<br/>";
        }
    document.getElementById('list-content').innerHTML = pval;
}