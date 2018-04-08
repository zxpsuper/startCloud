/**
 * Created by Super on 2017/4/4.
 */
//function cnl() {
//    var input1 = $("#p1").val();
//    var input2 = $("#p2").val();
//    var input3 = $("#p3").val();
//    var input4 = $("#p4").val();
//    var input5 = $("#p5").val();
//    var input6 = $("#p6").val();
//    var result1,result2,result3,result5,hourlypay,difference,personal;
//    if (parseInt(input1) > 3800) {
//        var gq = (3800 / 174);
//    }
//    else {
//        hourlypay = parseInt(input1) / 174;
//    }
//    result1 = hourlypay * 1.5 * parseInt(input2);
//    result2 = hourlypay * 2 * parseInt(input3);
//    result3 = hourlypay * 3 * parseInt(input4);
//    difference = parseInt(input1) + parseInt(input5) + result1 + result2 + result3 - 3500 - parseInt(input6);
//    if (0<difference<=1500) {
//        personalincometax = difference * 0.03
//    }
//    else if(1500<difference<=4500){
//        personalincometax = difference * 0.1
//    }
//    else if(4500<difference<=9000){
//        personalincometax = difference * 0.2
//    }
//    else if(9000<difference<=35000){
//        personalincometax = difference * 0.25
//    }
//    else if(35000<difference<=55000){
//        personalincometax = difference * 0.3
//    }
//    else if(55000<difference<=8000){
//        personalincometax = difference * 0.35
//    }
//    else if(difference>80000){
//        personalincometax = difference * 0.45
//    }
//    else {
//        personal= 0
//    }
//    result5 = parseInt(input1) + parseInt(input5) + result1 + result2 + result3 - parseInt(input6) - personal;
//    document.getElementById("n1").value = result1;
//    document.getElementById("n2").value = result2;
//    document.getElementById("n3").value = result3;
//    document.getElementById("n4").value = personal;
//    document.getElementById("n5").value = result5;
//}
function cnl() {
    var input1 = $("#p1").val();
    var input2 = $("#p2").val();
    var input3 = $("#p3").val();
    var input4 = $("#p4").val();
    var input5 = $("#p5").val();
    var input6 = $("#p6").val();
    var l1,l2,l3,l5;
    var gq;
    var cha;
    var gr;
    if (parseInt(input1) > 3800) {
         gq = (3800 / 174);
    }
    else {
        gq = parseInt(input1) / 174;
    }
    l1 = gq * 1.5 * parseInt(input2);
    l2 = gq * 2 * parseInt(input3);
    l3 = gq * 3 * parseInt(input4);
    cha = parseInt(input1) + parseInt(input5) + l1 + l2 + l3 - 3500 - parseInt(input6);
    if (cha > 0) {
        gr = cha * 0.03
    }
    else {
        gr = 0
    }
    l5 = parseInt(input1) + parseInt(input5) + l1 + l2 + l3 - parseInt(input6) - gr;
    $("#n1").val(l1);
    $("#n2").val(l2);
    $("#n3").val(l3);
    $("#n4").val(gr);
    $("#n5").val(l5);
    //document.getElementById("n1").value = l1;
    //document.getElementById("n2").value = l2;
    //document.getElementById("n3").value = l3;
    //document.getElementById("n4").value = gr;
    //document.getElementById("n5").value = l5;
}