var st = 1;
function myFunction2(){
    let sb2 = document.getElementById('sidebar2');
    sb2.style.display= 'none';
}
function myFunction3(){
    let sb2 = document.getElementById('sidebar2');
    sb2.style.display= 'block';
}
function myFunction(){
    st += 1;
    if(st%2 != 0){
        let sb = document.getElementById('sidebar');
        let tm1 = document.getElementById('text-slt-menu1');
        let tm2 = document.getElementById('text-slt-menu2');
        let tm3 = document.getElementById('text-slt-menu3');
        let tm4 = document.getElementById('text-slt-menu4');
        let tm5 = document.getElementById('text-slt-menu5');
        let tm6 = document.getElementById('text-slt-menu6');
        let tm7 = document.getElementById('text-slt-menu7');
        tm1.style.visibility= 'visible';
        tm2.style.visibility= 'visible';
        tm3.style.visibility= 'visible';
        tm4.style.visibility= 'visible';
        tm5.style.visibility= 'visible';
        tm6.style.visibility= 'visible';
        tm7.style.visibility= 'visible';
        sb.style.width= '';
        sb.style.transition= '500ms';
    }
    if(st%2 == 0){
        let sb = document.getElementById('sidebar');
        let tm1 = document.getElementById('text-slt-menu1');
        let tm2 = document.getElementById('text-slt-menu2');
        let tm3 = document.getElementById('text-slt-menu3');
        let tm4 = document.getElementById('text-slt-menu4');
        let tm5 = document.getElementById('text-slt-menu5');
        let tm6 = document.getElementById('text-slt-menu6');
        let tm7 = document.getElementById('text-slt-menu7');
        tm1.style.visibility= 'hidden';
        tm2.style.visibility= 'hidden';
        tm3.style.visibility= 'hidden';
        tm4.style.visibility= 'hidden';
        tm5.style.visibility= 'hidden';
        tm6.style.visibility= 'hidden';  
        tm7.style.visibility= 'hidden'; 
        sb.style.width= '70px';
        sb.style.transition= '500ms';
    }
};