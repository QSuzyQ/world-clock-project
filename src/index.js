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

  //Seattle
  let seattleElement = document.querySelector("#seattle");
  let seattleDateElement = seattleElement.querySelector(".date");
  let seattleTimeElement = seattleElement.querySelector(".time");
  let seattleTime = moment().tz("America/Los_Angeles");
  seattleDateElement.innerHTML = seattleTime.format("MMMM Do, YYYY");
  seattleTimeElement.innerHTML = seattleTime.format(
    "h:mm:ss [<span>]A[</span>]"
  );

  //Lima
  let limaElement = document.querySelector("#lima");
  let limaDateElement = limaElement.querySelector(".date");
  let limaTimeElement = limaElement.querySelector(".time");
  let limaTime = moment().tz("America/Lima");
  limaDateElement.innerHTML = limaTime.format("MMMM Do, YYYY");
  limaTimeElement.innerHTML = limaTime.format("h:mm:ss [<span>]A[</span>]");

  //Bangkok
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia/Bangkok");
  bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do, YYYY");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "h:mm:ss [<span>]A[</span>]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<span>]A[</span>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="selection">
          <div>
            <h2>${cityName}</h2>
            <h3>Turkey</h3>
          </div>
          <div class="date-time-element">
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <span>${cityTime.format("A")}</span></div>
            <div class="date">${cityTime.format("MMMM Do YYYYY")}</div>
          </div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
