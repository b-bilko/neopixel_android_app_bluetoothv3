
var v=document.getElementById("v");
var ctx_v=v.getContext("2d");
ctx_v.rect(0,0,47,47);
ctx_v.fillStyle="rgb(148,00,211)"; //#9400D3
ctx_v.fill();

var i=document.getElementById("i");
var ctx_i=i.getContext("2d");
ctx_i.rect(0,0,47,47);
ctx_i.fillStyle="rgb(75,0,130)"; //#4B0082
ctx_i.fill();

var b=document.getElementById("b");
var ctx_b=b.getContext("2d");
ctx_b.rect(0,0,150,100);
ctx_b.fillStyle="rgb(0,0,255)";
ctx_b.fill();

var g=document.getElementById("g");
var ctx_g=g.getContext("2d");
ctx_g.rect(0,0,150,100);
ctx_g.fillStyle="rgb(0,255,0)";
ctx_g.fill();

var y=document.getElementById("y");
var ctx_y=y.getContext("2d");
ctx_y.rect(0,0,150,100);
ctx_y.fillStyle="rgb(255,255,0)";
ctx_y.fill();

var o=document.getElementById("o");
var ctx_o=o.getContext("2d");
ctx_o.rect(0,0,150,100);
ctx_o.fillStyle="rgb(255,127,0)"; //#FF7F00
ctx_o.fill();

var r=document.getElementById("r");
var ctx_r=r.getContext("2d");
ctx_r.rect(0,0,150,100);
ctx_r.fillStyle="rgb(255,0,0)";
ctx_r.fill();

/*
$(document).ready(function() {
    $('#ex1').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });


});
*/
var canvas_inner_circle = document.getElementById("inner_circle");
var context_inner_circle = canvas_inner_circle.getContext("2d");
context_inner_circle.arc(180, 125, 80, 0, Math.PI * 2, false);
context_inner_circle.fillStyle="white";
context_inner_circle.fill();

var canvas_outer_circle = document.getElementById("outer_circle");
var context_outer_circle = canvas_outer_circle.getContext("2d");
context_outer_circle.arc(180, 125, 110, 0, Math.PI * 2, false);
context_outer_circle.fillStyle="darkgrey";
context_outer_circle.fill();

var canvas_circle_1 = document.getElementById("circle_1");
var context_circle_1 = canvas_circle_1.getContext("2d");
context_circle_1.arc(180, 220, 10, 0, Math.PI * 2, false);
context_circle_1.fillStyle="grey";
context_circle_1.fill();

var canvas_circle_2 = document.getElementById("circle_2");
var context_circle_2 = canvas_circle_2.getContext("2d");
context_circle_2.arc(180, 30, 10, 0, Math.PI * 2, false);
context_circle_2.fillStyle="grey";
context_circle_2.fill()

var canvas_circle_3 = document.getElementById("circle_3");
var context_circle_3 = canvas_circle_3.getContext("2d");
context_circle_3.arc(275, 125, 10, 0, Math.PI * 2, false);
context_circle_3.fillStyle="grey";
context_circle_3.fill();

var canvas_circle_4 = document.getElementById("circle_4");
var context_circle_4 = canvas_circle_4.getContext("2d");
context_circle_4.arc(85, 125, 10, 0, Math.PI * 2, false);
context_circle_4.fillStyle="grey";
context_circle_4.fill();

var canvas_circle_5 = document.getElementById("circle_5");
var context_circle_5 = canvas_circle_5.getContext("2d");
context_circle_5.arc(222.5, 210, 10, 0, Math.PI * 2, false);
context_circle_5.fillStyle="grey";
context_circle_5.fill();

var canvas_circle_6 = document.getElementById("circle_6");
var context_circle_6 = canvas_circle_6.getContext("2d");
context_circle_6.arc(265, 167.5, 10, 0, Math.PI * 2, false);
context_circle_6.fillStyle="grey";
context_circle_6.fill();

var canvas_circle_7 = document.getElementById("circle_7");
var context_circle_7 = canvas_circle_7.getContext("2d");
context_circle_7.arc(137.5, 40, 10, 0, Math.PI * 2, false);
context_circle_7.fillStyle="grey";
context_circle_7.fill();

var canvas_circle_8 = document.getElementById("circle_8");
var context_circle_8 = canvas_circle_8.getContext("2d");
context_circle_8.arc(95, 82.5, 10, 0, Math.PI * 2, false);
context_circle_8.fillStyle="grey";
context_circle_8.fill();

var canvas_circle_9 = document.getElementById("circle_9");
var context_circle_9 = canvas_circle_9.getContext("2d");
context_circle_9.arc(222.5, 40, 10, 0, Math.PI * 2, false);
context_circle_9.fillStyle="grey";
context_circle_9.fill();

var canvas_circle_10 = document.getElementById("circle_10");
var context_circle_10 = canvas_circle_10.getContext("2d");
context_circle_10.arc(265, 82.5, 10, 0, Math.PI * 2, false);
context_circle_10.fillStyle="grey";
context_circle_10.fill();

var canvas_circle_11 = document.getElementById("circle_11");
var context_circle_11 = canvas_circle_11.getContext("2d");
context_circle_11.arc(137.5, 210, 10, 0, Math.PI * 2, false);
context_circle_11.fillStyle="grey";
context_circle_11.fill();

var canvas_circle_12 = document.getElementById("circle_12");
var context_circle_12 = canvas_circle_12.getContext("2d");
context_circle_12.arc(95, 167.5, 10, 0, Math.PI * 2, false);
context_circle_12.fillStyle="grey";
context_circle_12.fill();

//---------------------------------------------

//Pallete 1
$( "#p1" ).click(function() {
    alert( "Pallete1" );
});

//Pallete 2
$( "#p2" ).click(function() {
    alert( "Pallete2" );
});

//Pallete 3
$( "#p3" ).click(function() {
    alert( "Pallete3" );
});

//Pallete 4
$( "#p4" ).click(function() {
    alert( "Pallete4" );
});

//Pallete 5
$( "#p5" ).click(function() {
    alert( "Pallete5" );
});


//---------------------------------------------

var DELAY = 400, clicks = 0, timer = null;

//violet
$(function(){

    $("#v").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                alert("violet Single Click");  //perform single-click action
                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {


            clearTimeout(timer);    //prevent single-click action
            alert("violet Double Click");  //perform double-click action

            r1=148; r2=75; g1=0; g2=0; b1=211; b2=120;

            r_increment=(r1-r2)/6;
            g_increment=(g1-g2)/6;
            b_increment=(b1-b2)/6;


            ctx_v.rect(0,0,47,47);
            ctx_v.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#9400D3
            ctx_v.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_i.rect(0,0,47,47);
            ctx_i.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#4B0082
            ctx_i.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_b.rect(0,0,150,100);
            ctx_b.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_b.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_g.rect(0,0,150,100);
            ctx_g.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_g.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_y.rect(0,0,150,100);
            ctx_y.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_y.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_o.rect(0,0,150,100);
            ctx_o.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#FF7F00
            ctx_o.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_r.rect(0,0,150,100);
            ctx_r.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_r.fill();

            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function(e){
            e.preventDefault();  //cancel system double-click event
        });

});

//indigo
$(function(){

    $("#i").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                alert("indigo Single Click");  //perform single-click action
                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            alert("indigo Double Click");  //perform double-click action

            r1=75; r2=0; g1=0; g2=0; b1=130; b2=255;

            r_increment=(r1-r2)/6;
            g_increment=(g1-g2)/6;
            b_increment=(b1-b2)/6;



            ctx_v.rect(0,0,47,47);
            ctx_v.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#9400D3
            ctx_v.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_i.rect(0,0,47,47);
            ctx_i.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#4B0082
            ctx_i.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_b.rect(0,0,150,100);
            ctx_b.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_b.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_g.rect(0,0,150,100);
            ctx_g.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_g.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_y.rect(0,0,150,100);
            ctx_y.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_y.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_o.rect(0,0,150,100);
            ctx_o.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#FF7F00
            ctx_o.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_r.rect(0,0,150,100);
            ctx_r.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_r.fill();


            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function(e){
            e.preventDefault();  //cancel system double-click event
        });

});

//blue
$(function(){

    $("#b").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                alert("blue Single Click");  //perform single-click action
                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            alert("blue Double Click");  //perform double-click action

            r1=0; r2=0; g1=0; g2=255; b1=255; b2=0;

            r_increment=(r1-r2)/6;
            g_increment=(g1-g2)/6;
            b_increment=(b1-b2)/6;

            ctx_v.rect(0,0,47,47);
            ctx_v.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#9400D3
            ctx_v.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_i.rect(0,0,47,47);
            ctx_i.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#4B0082
            ctx_i.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_b.rect(0,0,150,100);
            ctx_b.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_b.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_g.rect(0,0,150,100);
            ctx_g.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_g.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_y.rect(0,0,150,100);
            ctx_y.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_y.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_o.rect(0,0,150,100);
            ctx_o.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#FF7F00
            ctx_o.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_r.rect(0,0,150,100);
            ctx_r.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_r.fill();


            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function(e){
            e.preventDefault();  //cancel system double-click event
        });

});

//green
$(function(){

    $("#g").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                alert("green Single Click");  //perform single-click action
                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            alert("green Double Click");  //perform double-click action


            r1=0; r2=255; g1=255; g2=255; b1=0; b2=0;

            r_increment=(r1-r2)/6;
            g_increment=(g1-g2)/6;
            b_increment=(b1-b2)/6;

            ctx_v.rect(0,0,47,47);
            ctx_v.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#9400D3
            ctx_v.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_i.rect(0,0,47,47);
            ctx_i.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#4B0082
            ctx_i.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_b.rect(0,0,150,100);
            ctx_b.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_b.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_g.rect(0,0,150,100);
            ctx_g.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_g.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_y.rect(0,0,150,100);
            ctx_y.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_y.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_o.rect(0,0,150,100);
            ctx_o.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#FF7F00
            ctx_o.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_r.rect(0,0,150,100);
            ctx_r.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_r.fill();

            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function(e){
            e.preventDefault();  //cancel system double-click event
        });

});

//yellow
$(function(){

    $("#y").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                alert("yellow Single Click");  //perform single-click action
                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            alert("yellowDouble Click");  //perform double-click action


            r1=255; r2=255; g1=255; g2=127; b1=0; b2=0;

            r_increment=(r1-r2)/6;
            g_increment=(g1-g2)/6;
            b_increment=(b1-b2)/6;


            ctx_v.rect(0,0,47,47);
            ctx_v.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#9400D3
            ctx_v.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_i.rect(0,0,47,47);
            ctx_i.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#4B0082
            ctx_i.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_b.rect(0,0,150,100);
            ctx_b.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_b.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_g.rect(0,0,150,100);
            ctx_g.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_g.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_y.rect(0,0,150,100);
            ctx_y.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_y.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_o.rect(0,0,150,100);
            ctx_o.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#FF7F00
            ctx_o.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_r.rect(0,0,150,100);
            ctx_r.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_r.fill();


            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function(e){
            e.preventDefault();  //cancel system double-click event
        });

});

//orange
$(function(){

    $("#o").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                alert("orange Single Click");  //perform single-click action
                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            alert("orangeDouble Click");  //perform double-click action


            r1=255; r2=255; g1=127; g2=0; b1=0; b2=0;

            r_increment=(r1-r2)/6;
            g_increment=(g1-g2)/6;
            b_increment=(b1-b2)/6;

            ctx_v.rect(0,0,47,47);
            ctx_v.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#9400D3
            ctx_v.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_i.rect(0,0,47,47);
            ctx_i.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#4B0082
            ctx_i.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_b.rect(0,0,150,100);
            ctx_b.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_b.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_g.rect(0,0,150,100);
            ctx_g.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_g.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_y.rect(0,0,150,100);
            ctx_y.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_y.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_o.rect(0,0,150,100);
            ctx_o.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#FF7F00
            ctx_o.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_r.rect(0,0,150,100);
            ctx_r.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_r.fill();

            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function(e){
            e.preventDefault();  //cancel system double-click event
        });

});

//red
$(function(){

    $("#r").on("click", function(e){

        clicks++;  //count clicks

        if(clicks === 1) {

            timer = setTimeout(function() {

                alert("red Single Click");  //perform single-click action


                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            alert("red Double Click");  //perform double-click action


            r1=148; r2=75; g1=0; g2=0; b1=211; b2=120;

            r_increment=(r1-r2)/6;
            g_increment=(g1-g2)/6;
            b_increment=(b1-b2)/6;

            ctx_v.rect(0,0,47,47);
            ctx_v.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#9400D3
            ctx_v.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_i.rect(0,0,47,47);
            ctx_i.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#4B0082
            ctx_i.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_b.rect(0,0,150,100);
            ctx_b.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_b.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_g.rect(0,0,150,100);
            ctx_g.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_g.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_y.rect(0,0,150,100);
            ctx_y.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_y.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_o.rect(0,0,150,100);
            ctx_o.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")"; //#FF7F00
            ctx_o.fill();

            r1 = r1 - r_increment;
            r1 = Math.round(r1);
            g1 = g1 - g_increment;
            g1 = Math.round(g1);
            b1 = b1 - b_increment;
            b1 = Math.round(b1);

            ctx_r.rect(0,0,150,100);
            ctx_r.fillStyle="rgb(" + r1 + "," + g1 + "," + b1 + ")";
            ctx_r.fill();

            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function(e){
            e.preventDefault();  //cancel system double-click event
        });

});


/*
 #include <iostream>

 int main() {

 int r1=148, r2=75, g1=0, g2=0, b1=211, b2=120;
 int r, g, b;
 r=(r1-r2)/6;
 g=(g1-g2)/6;
 b=(b1-b2)/6;

 std::cout << r << "\t" << g << "\t" << b << "\n \n";

 for(int i=0;i <7; i++)
 {
 std::cout << r1 << "\t" << g1 << "\t" << b1<<"\n";

 r1 = r1 - r;
 g1 = g1 - g;
 b1 = b1 - b;
 }
 }
 */