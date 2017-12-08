//Function to get input
function sortArray(){
  txt = document.getElementById('elem1').value;
  if(txt!=="undefined" || txt!==null){
  //  document.write(txt);
    checkAndSplitString(txt)
  }else{
    alert('Enter number in text Field');
  }
}

//
function checkAndSplitString(str){
  //  numArr = new Array();
  var arrNum=str.split(',');

  //alert('in 2nd function')
  var  elemList="";
  var  elemList1="";

  for(i=0; i<=arrNum.length-1; i++)
  {
    elemList = elemList + '<button id="arr'+i+'" type="button" class="btn btn-outline-secondary">'+arrNum[i]+'</button>';
  }
  document.getElementById("content").innerHTML= elemList;
  //document.write(elemList);
  for(i=0; i<=arrNum.length-1; i++)
  {
    var id = 'arr'+i;
    document.getElementById(id).setAttribute("class", "btn btn-outline-primary");
  //  sleep(1000);
  setTimeout('foo()',1000);
      for(j=i+1; j<=arrNum.length-1; j++)
      {
        //alert('in for loop '+ arrNum[i]+' '+arrNum[j])
        //use parseInt to convert string to x
        if(parseInt(arrNum[i]) > parseInt(arrNum[j])){
          temp = arrNum[i];
          arrNum[i]=arrNum[j];
          arrNum[j]=temp;
        }
      }

    document.getElementById(id).setAttribute("class", "btn btn-outline-secondary");
  }
  for(i=0; i<=arrNum.length-1; i++)
  {
    elemList1 = elemList1 + '<button type="button" class="btn btn-outline-secondary">'+arrNum[i]+'</button>';
  }
  document.getElementById("contentSort").innerHTML= elemList1;
}

//sleep function
function foo() {
  var r = 1;
}
