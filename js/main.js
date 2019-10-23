(function($) {



    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            email: {
                email: true
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
    });
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        stepsOrientation: "vertical",
        titleTemplate: '<div class="title"><span class="step-number">#index#</span><span class="step-text">#title#</span></div>',
        labels: {
            previous: 'Previous',
            next: 'Next',
            finish: 'Finish',
            current: ''
        },
        onStepChanging: function(event, currentIndex, newIndex) {
            if (currentIndex === 0) {
                form.parent().parent().parent().append('<div class="footer footer-' + currentIndex + '"></div>');
            }
            if (currentIndex === 1) {
                form.parent().parent().parent().find('.footer').removeClass('footer-0').addClass('footer-' + currentIndex + '');
            }
            if (currentIndex === 2) {
                form.parent().parent().parent().find('.footer').removeClass('footer-1').addClass('footer-' + currentIndex + '');
            }
            if (currentIndex === 3) {
                form.parent().parent().parent().find('.footer').removeClass('footer-2').addClass('footer-' + currentIndex + '');
            }
            // if(currentIndex === 4) {
            //     form.parent().parent().parent().append('<div class="footer" style="height:752px;"></div>');
            // }
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function(event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function(event, currentIndex) {
          { $("#signup-form").submit(); }
          //   $.ajax({
          //   type: "POST",
          //   url: "post.php",
          // })
          //   .done(function( msg ) {
          //     alert( "Data Saved: " + msg );
          //     });

             alert('tiredddddd');
        },
        onStepChanged: function(event, currentIndex, priorIndex) {

            return true;
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });

    $.dobPicker({
        daySelector: '#birth_date',
        monthSelector: '#birth_month',
        yearSelector: '#birth_year',
        dayDefault: '',
        monthDefault: '',
        yearDefault: '',
        minimumAge: 0,
        maximumAge: 120
    });
    var marginSlider = document.getElementById('slider-margin');
    if (marginSlider != undefined) {
        noUiSlider.create(marginSlider, {
              start: [1100],
              step: 100,
              connect: [true, false],
              tooltips: [true],
              range: {
                  'min': 100,
                  'max': 2000
              },
              pips: {
                    mode: 'values',
                    values: [100, 2000],
                    density: 4
                    },
                format: wNumb({
                    decimals: 0,
                    thousand: '',
                    prefix: '$ ',
                })
        });
        var marginMin = document.getElementById('value-lower'),
	    marginMax = document.getElementById('value-upper');

        marginSlider.noUiSlider.on('update', function ( values, handle ) {
            if ( handle ) {
                marginMax.innerHTML = values[handle];
            } else {
                marginMin.innerHTML = values[handle];
            }
        });
    }
})(jQuery);


//
// $('#element').donetyping(callback[, timeout=1000])
// Fires callback when a user has finished typing. This is determined by the time elapsed
// since the last keystroke and timeout parameter or the blur event--whichever comes first.
//   @callback: function to be called when even triggers
//   @timeout:  (default=1000) timeout, in ms, to to wait before triggering event if not
//              caused by blur.
// Requires jQuery 1.7+
//
;(function($){
    $.fn.extend({
        donetyping: function(callback,timeout){
            timeout = timeout || 1e3; // 1 second default timeout
            var timeoutReference,
                doneTyping = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);
                // Chrome Fix (Use keyup over keypress to detect backspace)
                // thank you @palerdot
                $el.is(':input') && $el.on('keyup keypress paste',function(e){
                    // This catches the backspace button in chrome, but also prevents
                    // the event from triggering too preemptively. Without this line,
                    // using tab/shift+tab will make the focused element fire the callback.
                    if (e.type=='keyup' && e.keyCode!=8) return;
                    
                    // Check if timeout has been set. If it has, "reset" the clock and
                    // start over again.
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){
                        // if we made it here, our timeout has elapsed. Fire the
                        // callback
                        doneTyping(el);
                    }, timeout);
                }).on('blur',function(){
                    // If we can, fire the event since we're leaving the field
                    doneTyping(el);
                });
            });
        }
    });
})(jQuery);

// this function fills in the value between HOME page and DL page
function myFunction_dl0(x) {
   document.getElementsByName("firstDL")[0].value=x;
};

function myFunction_dl1(x1) {
   document.getElementsByName("secondDL")[0].value=x1;
};

function myFunction_dl2(x2) {
   document.getElementsByName("thirdDL")[0].value=x2;
};

function myFunction_dl3(x3) {
   document.getElementsByName("forthDL")[0].value=x3;
};


function myFunction_dl4(x4) {
   document.getElementsByName("fifthDL")[0].value=x4;
};

function myFunction_dl5(x5) {
   document.getElementsByName("sixthDL")[0].value=x5;
};

function myFunction_dl6(x6) {
   document.getElementsByName("sevDL")[0].value=x6;
};

function myFunction_dl7(x7) {
   document.getElementsByName("eightDL")[0].value=x7;
};

function myFunction_dl8(x8) {
   document.getElementsByName("ninthDL")[0].value=x8;
};

function myFunction_dl9(x9) {
   document.getElementsByName("tenthDL")[0].value=x9;
};

function myFunction_dl10(x10) {
   document.getElementsByName("11DL")[0].value=x10;
};

function myFunction_dl11(x11) {
   document.getElementsByName("12DL")[0].value=x11;
};

// BVAL function

function myFunction_bvl0(y0) {
   document.getElementsByName("0BV")[0].value=y0;
};

function myFunction_bvl1(y1) {
   document.getElementsByName("1BV")[0].value=y1;
};

function myFunction_bvl2(y2) {
   document.getElementsByName("2BV")[0].value=y2;
};

function myFunction_bvl3(y3) {
   document.getElementsByName("3BV")[0].value=y3;
};

function myFunction_bvl4(y4) {
   document.getElementsByName("4BV")[0].value=y4;
};

function myFunction_bvl5(y5) {
   document.getElementsByName("5BV")[0].value=y5;
};

function myFunction_bvl6(y6) {
   document.getElementsByName("6BV")[0].value=y6;
};

function myFunction_bvl7(y7) {
   document.getElementsByName("7BV")[0].value=y7;
};

function myFunction_bvl8(y8) {
   document.getElementsByName("8BV")[0].value=y8;
};

function myFunction_bvl9(y9) {
   document.getElementsByName("9BV")[0].value=y9;
};

function myFunction_bvl10(y10) {
   document.getElementsByName("10BV")[0].value=y10;
};

function myFunction_bvl11(y11) {
   document.getElementsByName("11BV")[0].value=y11;
};

// real time function
function myFunction_rt0(r0) {
   document.getElementsByName("0rt")[0].value=r0;
};

function myFunction_rt1(r1) {
   document.getElementsByName("1rt")[0].value=r1;
};


function myFunction_rt2(r2) {
   document.getElementsByName("2rt")[0].value=r2;
};


function myFunction_rt3(r3) {
   document.getElementsByName("3rt")[0].value=r3;
};


function myFunction_rt4(r4) {
   document.getElementsByName("4rt")[0].value=r4;
};

function myFunction_rt5(r5) {
   document.getElementsByName("5rt")[0].value=r5;
};

function myFunction_rt6(r6) {
   document.getElementsByName("6rt")[0].value=r6;
};

function myFunction_rt7(r7) {
   document.getElementsByName("7rt")[0].value=r7;
};

// DL INPUT
$("#input_dl0").donetyping(function(){
  $("#div0").text(" " + $("#input_dl0").val());
  index=$("#input_dl0").val();
  $("#div0").addClass("fa fa-cloud");
  $("#div0").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl0(index);
});


$("#input_dl1").donetyping(function(){
  $("#div1").text(" " + $("#input_dl1").val());
  index1 = $("#input_dl1").val();
  $("#div1").addClass("fa fa-cloud");
  $("#div1").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl1(index1);
});

$("#input_dl2").donetyping(function(){
  $("#div2").text(" " + $("#input_dl2").val());
  index2 = $("#input_dl2").val();
  $("#div2").addClass("fa fa-cloud");
  $("#div2").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl2(index2);
});

$("#input_dl3").donetyping(function(){
  $("#div3").text(" " + $("#input_dl3").val());
  index3 = $("#input_dl3").val();
  $("#div3").addClass("fa fa-cloud");
  $("#div3").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl3(index3);
});

$("#input_dl4").donetyping(function(){
  $("#div4").text(" " + $("#input_dl4").val());
  index4 = $("#input_dl4").val();
  $("#div4").addClass("fa fa-cloud");
  $("#div4").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl4(index4);
});



$("#input_dl5").donetyping(function(){
  $("#div5").text(" " + $("#input_dl5").val());
  index5 = $("#input_dl5").val();
  $("#div5").addClass("fa fa-cloud");
  $("#div5").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl5(index5);
});

$("#input_dl6").donetyping(function(){
  $("#div6").text(" " + $("#input_dl6").val());
  index6 = $("#input_dl6").val();
  $("#div6").addClass("fa fa-cloud");
  $("#div6").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl6(index6);
});

$("#input_dl7").donetyping(function(){
  $("#div7").text(" " + $("#input_dl7").val());
  index7 = $("#input_dl7").val();
  $("#div7").addClass("fa fa-cloud");
  $("#div7").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl7(index7);
});

$("#input_dl8").donetyping(function(){
  $("#div8").text(" " + $("#input_dl8").val());
  index8 = $("#input_dl8").val();
  $("#div8").addClass("fa fa-cloud");
  $("#div8").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl8(index8);
});


$("#input_dl9").donetyping(function(){
  $("#div9").text(" " + $("#input_dl9").val());
  index9 = $("#input_dl9").val();
  $("#div9").addClass("fa fa-cloud");
  $("#div9").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl9(index9);
});


$("#input_dl10").donetyping(function(){
  $("#div10").text(" " + $("#input_dl10").val());
  index10 = $("#input_dl10").val();
  $("#div10").addClass("fa fa-cloud");
  $("#div10").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl10(index10);
});

$("#input_dl11").donetyping(function(){
  $("#div11").text(" " + $("#input_dl11").val());
  index11 = $("#input_dl11").val();
  $("#div11").addClass("fa fa-cloud");
  $("#div11").css({"font-size":"18px", "color": "#5499C7"});
  myFunction_dl11(index11);
});


// BVAL INPUT
$("#input_bv0").donetyping(function(){
  $("#bval0").text(" " + $("#input_bv0").val());
  index_b0  = $("#input_bv0").val();
  $("#bval0").addClass("fas fa-laptop");
  $("#bval0").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl0(index_b0);
});

$("#input_bv1").donetyping(function(){
  $("#bval1").text(" " + $("#input_bv1").val());
  index_b1  = $("#input_bv1").val();
  $("#bval1").addClass("fas fa-laptop");
  $("#bval1").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl1(index_b1);
});

$("#input_bv2").donetyping(function(){
  $("#bval2").text(" " + $("#input_bv2").val());
  index_b2  = $("#input_bv2").val();
  $("#bval2").addClass("fas fa-laptop");
  $("#bval2").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl2(index_b2);
});

$("#input_bv3").donetyping(function(){
  $("#bval3").text(" " + $("#input_bv3").val());
  index_b3  = $("#input_bv3").val();
  $("#bval3").addClass("fas fa-laptop");
  $("#bval3").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl3(index_b3);
});

$("#input_bv4").donetyping(function(){
  $("#bval4").text(" " + $("#input_bv4").val());
  index_b4  = $("#input_bv4").val();
  $("#bval4").addClass("fas fa-laptop");
  $("#bval4").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl4(index_b4);
});

$("#input_bv5").donetyping(function(){
  $("#bval5").text(" " + $("#input_bv5").val());
  index_b5  = $("#input_bv5").val();
  $("#bval5").addClass("fas fa-laptop");
  $("#bval5").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl5(index_b5);
});

$("#input_bv6").donetyping(function(){
  $("#bval6").text(" " + $("#input_bv6").val());
  index_b6  = $("#input_bv6").val();
  $("#bval6").addClass("fas fa-laptop");
  $("#bval6").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl6(index_b6);
});

$("#input_bv7").donetyping(function(){
  $("#bval7").text(" " + $("#input_bv7").val());
  index_b7  = $("#input_bv7").val();
  $("#bval7").addClass("fas fa-laptop");
  $("#bval7").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl7(index_b7);
});

$("#input_bv8").donetyping(function(){
  $("#bval8").text(" " + $("#input_bv8").val());
  index_b8  = $("#input_bv8").val();
  $("#bval8").addClass("fas fa-laptop");
  $("#bval8").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl8(index_b8);
});

$("#input_bv9").donetyping(function(){
  $("#bval9").text(" " + $("#input_bv9").val());
  index_b9  = $("#input_bv9").val();
  $("#bval9").addClass("fas fa-laptop");
  $("#bval9").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl9(index_b9);
});

$("#input_bv10").donetyping(function(){
  $("#bval10").text(" " + $("#input_bv10").val());
  index_b10  = $("#input_bv10").val();
  $("#bval10").addClass("fas fa-laptop");
  $("#bval10").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl10(index_b10);
});

$("#input_bv11").donetyping(function(){
  $("#bval11").text(" " + $("#input_bv11").val());
  index_b11  = $("#input_bv11").val();
  $("#bval11").addClass("fas fa-laptop");
  $("#bval11").css({"font-size":"18px", "color": "#52BE80"});
  myFunction_bvl11(index_b11);
});



// RT INPUT
$('#input_rt0').donetyping(function(){
  $('#rtime0').text(" " + $('#input_rt0').val());
  index_r0 = $("#input_rt0").val();
  $('#rtime0').addClass("far fa-bell");
  $("#rtime0").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt0(index_r0);
});


$('#input_rt1').donetyping(function(){
  $('#rtime1').text(" " + $('#input_rt1').val());
  index_r1 = $("#input_rt1").val();
  $('#rtime1').addClass("far fa-bell");
  $("#rtime1").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt1(index_r1);
});

$('#input_rt2').donetyping(function(){
  $('#rtime2').text(" " + $('#input_rt2').val());
  index_r2 = $("#input_rt2").val();
  $('#rtime2').addClass("far fa-bell");
  $("#rtime2").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt2(index_r2);
});

$('#input_rt3').donetyping(function(){
  $('#rtime3').text(" " + $('#input_rt3').val());
  index_r3 = $("#input_rt3").val();
  $('#rtime3').addClass("far fa-bell");
  $("#rtime3").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt3(index_r3);
});

$('#input_rt4').donetyping(function(){
  $('#rtime4').text(" " + $('#input_rt4').val());
  index_r4 = $("#input_rt4").val();
  $('#rtime4').addClass("far fa-bell");
  $("#rtime4").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt4(index_r4);
});

$('#input_rt5').donetyping(function(){
  $('#rtime5').text(" " + $('#input_rt5').val());
  index_r5 = $("#input_rt5").val();
  $('#rtime5').addClass("far fa-bell");
  $("#rtime5").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt5(index_r5);
});

$('#input_rt6').donetyping(function(){
  $('#rtime6').text(" " + $('#input_rt6').val());
  index_r6 = $("#input_rt6").val();
  $('#rtime6').addClass("far fa-bell");
  $("#rtime6").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt6(index_r6);
});

$('#input_rt7').donetyping(function(){
  $('#rtime7').text(" " + $('#input_rt7').val());
  index_r7 = $("#input_rt7").val();
  $('#rtime7').addClass("far fa-bell");
  $("#rtime7").css({"font-size":"18px", "color": "#C0392B"});
  myFunction_rt7(index_r7);
});

// expand the table

// AUTO CALCULATE REVENUE
// DL Revenue
function calc_dl() {
  var one = Number(document.getElementById("dl_revenue_dl8").value);
  var two = Number(document.getElementById("dl_revenue_dl9").value); 
  var three = Number(document.getElementById("dl_revenue_dl10").value);
  var four = Number(document.getElementById("dl_revenue_dl11").value); 
  

  document.getElementById("dl_revenue").value = one + two + three + four;
};

// BVAL revenue
function calc_bval_cash() {
  var one = Number(document.getElementById("bv_revenue_bv0").value);
  var two = Number(document.getElementById("bv_revenue_bv1").value); 
  var three = Number(document.getElementById("bv_revenue_bv2").value);
  var four = Number(document.getElementById("bv_revenue_bv3").value); 
  
  document.getElementById("bval_cash_revenue").value = one + two + three + four;
};

// BVAL OTC
function calc_bval_otc() {
  var one = Number(document.getElementById("bv_revenue_bv4").value);
  var two = Number(document.getElementById("bv_revenue_bv5").value); 
  var three = Number(document.getElementById("bv_revenue_bv6").value);
  var four = Number(document.getElementById("bv_revenue_bv7").value); 
  
  document.getElementById("bval_otc_revenue").value = one + two + three + four;
};

// BVAL PRICING
function calc_bval_pricing() {
  var one = Number(document.getElementById("bv_revenue_bv8").value);
  var two = Number(document.getElementById("bv_revenue_bv9").value); 
  var three = Number(document.getElementById("bv_revenue_bv10").value);
  var four = Number(document.getElementById("bv_revenue_bv11").value); 
  
  document.getElementById("bval_pricing_revenue").value = one + two + three + four;
};

// SAPI
function calc_sapi() {
  var one = Number(document.getElementById("rt_revenue_rt0").value);
  var two = Number(document.getElementById("rt_revenue_rt1").value); 
  var three = Number(document.getElementById("rt_revenue_rt2").value);
  var four = Number(document.getElementById("rt_revenue_rt3").value); 
  
  document.getElementById("realtime_sapi_revenue").value = one + two + three + four;
};

// BPIPE
function calc_bpipe() {
  var one = Number(document.getElementById("rt_revenue_rt4").value);
  var two = Number(document.getElementById("rt_revenue_rt5").value); 
  var three = Number(document.getElementById("rt_revenue_rt6").value);
  var four = Number(document.getElementById("rt_revenue_rt7").value); 
  
  document.getElementById("realtime_bpipe_revenue").value = one + two + three + four;
};


// END

$(document).ready(function() {
  $('[data-toggle="toggle"]').change(function(){
    $(this).parents().next('.hide').toggle();
  });
});


// FOR CUSTOM SELECT
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);