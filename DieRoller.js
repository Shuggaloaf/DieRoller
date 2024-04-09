let screenHeight = window.innerHeight - 310;
let screenWidth = 250//window.innerWidth;

async function rollFormula(formula) {
 let roll = await new Roll(formula).evaluate();
 roll.toMessage();
}

let options = `
<div style="display:inline; float:left;width: 30%;margin-right:15px;text-align:center;" >
    <label for="output-diceQuantity">Number of dice:</label>
    <input id="output-diceQuantity" type="number" value="1" />
</div>
<div style="display:inline;float:left;width: 12%;text-align:center;">
    <label for="output-modifier">Modifier:</label>
    <input id="output-modifier" type="number" value="0" />
</div>
<div style="display:inline; float:right;width: 40%;">
    <label for="output-modifier"><br>Ex: (Num) x d20 + (Mod)</label>
</div>
`;
 
new Dialog({
 title: `Die Roller`,
 content: `<form>${options}</form>`,
 buttons: {
  
  d4: {
    label: `<div class="dnd5e chat-card"><header class="card-header flexrow"><h3 style="text-align:center;"><b><img src="icons/svg/d4-grey.svg" width="72;" /> D4</b></h3></header></div>`,
    callback: (html) => {
      let numDie = html.find("input[id='output-diceQuantity']").val();
      let modifier = html.find("input[id='output-modifier']").val();
      let dieSize = "d4";
      rollFormula(`${numDie}${dieSize}+${modifier}`);
    }
  },
  
  d6: {
    label: `<div class="dnd5e chat-card"><header class="card-header flexrow"><h3 style="text-align:center;"><b><img src="icons/svg/d6-grey.svg" width="72;" /> D6</b></h3></header></div>`,
    callback: (html) => {
      let numDie = html.find("input[id='output-diceQuantity']").val();
      let modifier = html.find("input[id='output-modifier']").val();
      let dieSize = "d6";
      rollFormula(`${numDie}${dieSize}+${modifier}`);
    }
  },
  
    d8: {
    label: `<div class="dnd5e chat-card"><header class="card-header flexrow"><h3 style="text-align:center;"><b><img src="icons/svg/d8-grey.svg" width="72;" /> D8</b></h3></header></div>`,
    callback: (html) => {
      let numDie = html.find("input[id='output-diceQuantity']").val();
      let modifier = html.find("input[id='output-modifier']").val();
      let dieSize = "d8";
      rollFormula(`${numDie}${dieSize}+${modifier}`);
    }
  },
  
    d10: {
    label: `<div class="dnd5e chat-card"><header class="card-header flexrow"><h3 style="text-align:center;"><b><img src="icons/svg/d10-grey.svg" width="72;" /> D10</b></h3></header></div>`,
    callback: (html) => {
      let numDie = html.find("input[id='output-diceQuantity']").val();
      let modifier = html.find("input[id='output-modifier']").val();
      let dieSize = "d10";
      rollFormula(`${numDie}${dieSize}+${modifier}`);
    }
  },
  
    d12: {
    label: `<div class="dnd5e chat-card"><header class="card-header flexrow"><h3 style="text-align:center;"><b><img src="icons/svg/d12-grey.svg" width="72;" /> D12</b></h3></header></div>`,
    callback: (html) => {
      let numDie = html.find("input[id='output-diceQuantity']").val();
      let modifier = html.find("input[id='output-modifier']").val();
      let dieSize = "d12";
      rollFormula(`${numDie}${dieSize}+${modifier}`);
    }
  },
  
    d20: {
    label: `<div class="dnd5e chat-card"><header class="card-header flexrow"><h3 style="text-align:center;"><b><img src="icons/svg/d20-grey.svg" width="72;" /> D20</b></h3></header></div>`,
    callback: (html) => {
      let numDie = html.find("input[id='output-diceQuantity']").val();
      let modifier = html.find("input[id='output-modifier']").val();
      let dieSize = "d20";
      rollFormula(`${numDie}${dieSize}+${modifier}`);
    }
  },
  
    d100: {
    label: `<div class="dnd5e chat-card"><header class="card-header flexrow"><h3 style="text-align:center;"><b><img src="icons/dice/d10black.svg" width="72;" /> D100</b></h3></header></div>`,
    callback: (html) => {
      let numDie = html.find("input[id='output-diceQuantity']").val();
      let modifier = html.find("input[id='output-modifier']").val();
      let dieSize = "d100";
      rollFormula(`${numDie}${dieSize}+${modifier}`);
    }
  },
  
 },
 default: "d20"
},{height:220,width:550,left:screenWidth,top:screenHeight}).render(true);
