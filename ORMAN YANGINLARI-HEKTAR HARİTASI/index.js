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

  if (rate <= 18.4015) return "rate-0";
  else if (rate > 18.4015 && rate <= 36.803) return "rate-1";
  else if (rate > 36.803 && rate <= 55.2045) return "rate-2";
  else if (rate > 55.2045 && rate <= 73.606) return "rate-3";
  else if (rate > 73.606 && rate <= 92.0075) return "rate-4";
  else if (rate > 92.0075 && rate <= 110.409) return "rate-5";
  else if (rate > 110.409 && rate <= 194.42) return "rate-6";
  else if (rate > 194.42 && rate <=262.48) return "rate-7";
  else if (rate > 262.48 && rate <= 330.55) return "rate-8";
  else if (rate > 330.55 && rate <= 398.61) return "rate-9";
  else if (rate > 398.61 && rate <= 466.67) return "rate-10";
  else if (rate > 466.67 && rate <= 1334.67) return "rate-11";
  else if (rate > 1334.67) return "rate-12";

}
