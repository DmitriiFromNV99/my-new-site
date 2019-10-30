calc.onclick = function() {
  var counter = 0,  
      myForm = this.form,
      ind1 = myform('a1'),
      ind2 = myform('a2'),
      ind3 = myform('a3'),
      ind4 = myform('a4'),
      ind5 = myform('a5'),
      ind6 = myform('a6'),
      ind7 = myform('a7'),
      ind8 = myform('a8'),
    ind9 = myform('a9'),
      ind10 = myform('a10');
    for (var i=0; i < ind1.length;i++) {
        if (ind1[i].checked&&(ind1[i].value === 2)) counter+=1;
    }
    myForm.result.value = 0;
}