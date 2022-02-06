let $buttons = $('.btn');
let $inputField = $('#inputField');
let $Outputfield = $('#outputField');
let arr = [];

 // eventlistener för knapparna
$buttons.on('click', (event) => {
    let btn = event.target;
    inputValue(btn);
})

function inputValue(btn){
    switch (btn.value) {
        case "C":
            arr = []
            $Outputfield.val("");
            break;
        case "=":
            // kollar om det är en korrekt ekvation
            try {
                $Outputfield.val(eval(arr.join("")));
            } catch (error) {
                $Outputfield.val("Felaktigt matematiskt uttryck");
            }
            arr = []
            break;
        // default för allt utom "C" och "="
        default: 
          // lägger till värdet i array
        arr.push(btn.value);
            break;
    }
    // visar det i inputField
    $inputField.val(arr.join(""));
};