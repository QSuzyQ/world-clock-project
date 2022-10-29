//Istanbul
let istanbulElement = document.querySelector("#istanbul");
let istanbulDateElement = istanbulElement.querySelector(".date");
let istanbulTimeElement = istanbulElement.querySelector(".time");
let istanbulTime = moment().tz("Asia/Istanbul");
istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do, YYYY");
istanbulTimeElement.innerHTML = istanbulTime.format(
  "h:mm:ss [<span>]A[</span>]"
);
