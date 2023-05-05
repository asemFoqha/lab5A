function calcTip() {
  let subtotal = document.getElementById("subtotal");
  let tip = document.getElementById("tip");
  let total = +subtotal.value + subtotal.value * (tip.value / 100);
  document.getElementById("total").innerHTML = "$" + total;
}
