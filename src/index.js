function updateTime() {
  //Istanbul
  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Asia/Istanbul");
  istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do, YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format(
    "h:mm:ss [<span>]A[</span>]"
  );

  //Vienna
  let viennaElement = document.querySelector("#vienna");
  let viennaDateElement = viennaElement.querySelector(".date");
  let viennaTimeElement = viennaElement.querySelector(".time");
  let viennaTime = moment().tz("Europe/Vienna");
  viennaDateElement.innerHTML = viennaTime.format("MMMM Do, YYYY");
  viennaTimeElement.innerHTML = viennaTime.format("h:mm:ss [<span>]A[</span>]");
}

updateTime();
setInterval(updateTime, 1000);
