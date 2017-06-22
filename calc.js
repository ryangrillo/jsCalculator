
  $(document).ready(function() {
console.log("loaded");
    var firstNum = 0;
    var firstNumResult = "";
    var isFirstNum = true;
    var op;
    var isOp = true;
    var secondNum = 0;
    var secondNumResult = "";
    var isSecondNum = true;
    var total = 0;
    var isTotal = true;
    var isAdd = false;
    var isSubtract= false;
    var isMultiply = false;
    var isDivide = false;
    var isClear = false;

    function pickFirstNum() {
      $(".number").on("click", function() {
        if (isFirstNum) {
          firstNum = $(this).text();
          firstNumResult += firstNum;
          $('#display').html(firstNumResult);

        }
      });
    }

    function pickOperator() {
      $('.operator').on('click', function() {
        isFirstNum = false;
        op = $(this).attr('id');
        if (op === 'add') {
          $('#display').html(op);
          isAdd = true;
          pickSecNum();
        }
        if (op === 'subtract') {
          $('#display').html(op);
          isSubtract = true;
          pickSecNum();
        }
        if (op === 'multiply') {
          $('#display').html(op);
          isMultiply = true;
          pickSecNum();
        }
        if (op === 'divide') {
          $('#display').html(op);
          isDivide = true;
          pickSecNum();
        }
        // if (op === 'clear') {
        //   $('#display').html(op);
        //   isClear = true;
        // }
      });
    }

    function pickSecNum() {
      $('.number').on('click', function() {
        secondNum = $(this).text();
        secondNumResult += secondNum;
        $('#display').html(secondNumResult);
        if (isFirstNum === false) {
          if (isAdd === true) {
            total = parseInt(firstNumResult) + parseInt(secondNumResult);
            console.log(total);
          }
          if (isSubtract === true) {
            total = parseInt(firstNumResult) - parseInt(secondNumResult);
            console.log(total);
          }
          if (isMultiply === true) {
            total = parseInt(firstNumResult) * parseInt(secondNumResult);
            console.log(total);
          }
          if (isDivide === true) {
            total = (parseInt(firstNumResult)) / (parseInt(secondNumResult));
            console.log(total);
          }
          // if (isClear === true) {
          //   total = 0;
          //   firstNumResult = 0;
          //   secondNumResult = 0;
          //   pickFirstNum();
          //   console.log(total);
          // }
        }
      });
    }

    function totalResult() {
      $('#equals').on('click', function() {
        console.log("this is totals " + total);
        $('#display').html(total);
      });
    }
    pickFirstNum();
    pickOperator();
    totalResult();
  });
