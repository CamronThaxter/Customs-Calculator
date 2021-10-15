let price = $("#price");
let freight = $("#freight");
let duty = $("#duty");
let gct = $("#gct");
let custom = $("#customsprice");
let insurance = $("#insurance");
let exchange = $("#exchange");
let CalcDuty = $(".CalcDuty");
let noDuty = $(".noDuty");

CalcDuty.click(function() {
  const fullPrice = parseFloat(price.val()) + parseFloat(freight.val());
  
  const dutyPrice = fullPrice * parseFloat(duty.val())/100;
  
  const beforeGct = fullPrice + dutyPrice;
  
  const gctPrice = beforeGct * parseFloat(gct.val())/100;
  
  const subTotal = gctPrice + dutyPrice + parseFloat(freight.val()) + parseFloat(insurance.val());
  
  const total = subTotal + parseFloat(custom.val());
  
  const exchanged = total * parseFloat(exchange.val());
  
  alert(exchanged);
});


noDuty.click(function() {
  const fullPrice = parseFloat(price.val()) + parseFloat(freight.val());
  
  const GCT = fullPrice * parseFloat(gct.val())/100;
  
  const INS = parseFloat(insurance.val());
  
  const Cus = parseFloat(custom.val());
  
  const left = GCT + INS + Cus;
  
  const Exc = parseFloat(exchange.val());
  
  const total = left * Exc;
  
  alert(total);
});