var j = 0,
  isExp = true;

function expand_narr(key) {
  let b = j;
  if (key != null) b = key;
  if (b % 2 == 0) {
    console.log("narrow");
    isExp = false;
    $("#members").animate(
      {
        "min-width": "0px",
        "max-width": "0px",
        padding: "0px",
      },
      200
    );
  } else {
    console.log("expand");
    isExp = true;
    $("#members").animate(
      {
        "min-width": "237px",
        "max-width": "237px",
        padding: "15px",
      },
      200
    );
  }
  j++;
}

// let userCl = true;

// function userClick() {
//   if (m % 2 == 0) userCl = false;
//   else userCl = true;
//   m++;
// }

// function narrowIf() {
//   if (userCl == true && isNarrow == false) {
//     if (isExp == false) expand_narr(1);
//   } else {
//     if (isExp == true) expand_narr(0);
//   }
// }
