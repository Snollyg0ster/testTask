let isNarrow = false,
  m = 0,
  userCl = true;

var ro = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    if (isExp == false && cr.width < 552) {
    } else if (cr.width < 315) {
      isNarrow = true;
      narrowIf();
    } else {
      isNarrow = false;
      narrowIf();
    }
  }
});

ro.observe(chat);

function userClick() {
  if (m % 2 == 0) userCl = false;
  else userCl = true;
  m++;
}

function narrowIf() {
  if (userCl == true && isNarrow == false) {
    if (isExp == false) expand_narr(1);
  } else {
    if (isExp == true) expand_narr(0);
  }
}
