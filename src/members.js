var j = 0;

function expand_narr(key) {
  let b = j;
  if (key != null) b = key;
  console.log("test");
  if (b % 2 == 0) {
    $("#members").animate(
      {
        "min-width": "0px",
        "max-width": "0px",
        padding: "0px",
      },
      200
    );
  } else {
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
