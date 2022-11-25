const svgTurkeyMap = document
  .getElementById("svg-turkey-map")
  .getElementsByTagName("path");
const cityName = document.getElementById("city-name");

for (cityIndex = 0; cityIndex < svgTurkeyMap.length; cityIndex++) {
  bindTooltip(cityIndex);
  unbindTooltip(cityIndex);
  setColorByRate(cityIndex);
}

//mouse şehir üzerine geldiğinde üzerinde çıkan şehir ismi yazdırılıyor
function bindTooltip(cityIndex) {
  svgTurkeyMap[cityIndex].addEventListener("mousemove", function (event) {
    cityName.classList.add("show-city-name--active");
    cityName.style.left = event.clientX + 20 + "px";
    cityName.style.top = event.clientY + 20 + "px";
    cityName.innerHTML = event.target.getAttribute("title");
  });
}

//mouse şehir üzerinden gittiğinde üzerinde çıkan şehir ismini burada siliyor
function unbindTooltip(cityIndex) {
  svgTurkeyMap[cityIndex].addEventListener("mouseleave", function () {
    cityName.classList.remove("show-city-name--active");
  });
}

//renklendirme
function setColorByRate(cityIndex) {
  const cityId = svgTurkeyMap[cityIndex].getAttribute("id");

  const cityFireRate = FIRE_RATES.find((rateData) => rateData.id == cityId);

  if (cityFireRate) {
    const cssName = getCssNameByFireRate(cityFireRate.rate);

    svgTurkeyMap[cityIndex].classList.add(cssName);
  }
}

function getCssNameByFireRate(rate_) {
  const rate = parseFloat(rate_);

  if (rate <= 11.167) return "rate-0";
  else if (rate > 11.167 && rate <= 22.333) return "rate-1";
  else if (rate > 22.333 && rate <= 33.5) return "rate-2";
  else if (rate > 33.5 && rate <= 67) return "rate-3";
  else if (rate > 67 && rate <= 100.5) return "rate-4";
  else if (rate > 100.5 && rate <= 134) return "rate-5";
  else if (rate > 134 && rate <= 167.5) return "rate-6";
  else if (rate > 167.5) return "rate-7";
}
