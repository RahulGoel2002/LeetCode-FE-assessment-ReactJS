const removeFormatting = (inp) => {
  let phn = "";
  for (var i = 0; i < inp.length; i++) {
    if (/^\d+$/.test(inp[i])) phn += inp[i];
  }
  return phn;
};

const checkAlienInput = (key) => {
  if (!isNaN(key)) {
    return true;
  }
  return false;
};

const formatPhone = (inp) => {
  let pre = null,
    mid = null,
    post = null;
  let phn = removeFormatting(inp);

  pre = phn.slice(0, 3);
  if (!(phn.length < 4)) {
    pre = `(${pre}) `;
    mid = phn.slice(3, 6);
  }
  if (!(phn.length < 7)) {
    mid = `${mid}-`;
    post = phn.slice(6, phn.length);
  }
  return `${pre || ""}${mid || ""}${post || ""}`;
};

export { removeFormatting, checkAlienInput, formatPhone };
