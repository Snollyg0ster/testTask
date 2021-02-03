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
      },
      200
    );
    $("#members_cont").animate(
      {
        opacity: "0",
        padding: "0px",
      },
      100
    );
  } else {
    console.log("expand");
    isExp = true;
    $("#members").animate(
      {
        "min-width": "237px",
        "max-width": "237px",
      },
      200
    );
    $("#members_cont").animate(
      {
        opacity: "1",
        padding: "15px",
      },
      250
    );
  }
  j++;
}
