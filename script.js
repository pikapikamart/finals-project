const addMilktea = document.querySelector(".js-addMilktea");
const milkteaForm = document.querySelector(".js-milkteaForm");
const milkteaOrders = document.querySelector(".js-milktea-orders");
const totalPrice = document.querySelector(".js-total-price");

const createMilkteaOrder = ( milktea, sugarPercent ) =>{
	const li = document.createElement("li");
  li.classList.add("milktea__order");
  li.innerHTML = `
  ${milktea}
  <span aria-hidden="true">/<span>
  ${parseInt(sugarPercent)? `${sugarPercent}%` : "No "}
  sugar
  `;
  
  return li;
}

const getSingleRadio = group =>{
	const groupList = Array.from(group);
  const selectedRadio = groupList.filter(radio => radio.checked);
  
  return selectedRadio[0];
}

const handleAddMilktea = event =>{
	const { milktea, sugar } = milkteaForm;
  const selectedMilktea = getSingleRadio(milktea);
  const selectedSugar = getSingleRadio(sugar);
  
 	const newOrder = createMilkteaOrder(selectedMilktea.id, selectedSugar.id);
  
  milkteaOrders.appendChild(newOrder);
  
  const currentTotalPrice = parseInt(totalPrice.textContent);
  const newTotalPrice = currentTotalPrice + parseInt(selectedMilktea.value) + parseInt(selectedSugar.value);
  
  totalPrice.textContent = newTotalPrice;
}

addMilktea.addEventListener("click", handleAddMilktea);