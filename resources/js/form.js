

function saveForm(){//função para salvar os dados no formato json no local storage do browser

    
    if( $("#sample3").val() == ""){ //primeiro verifica se país esta selecionado para salvar
        alert("Select a country!");
        return false;
    }else{
    
        var array = [];
        var registro = JSON.stringify({
            Email   : $("#email").val(),
            FistName: $("#firstname").val(),
            LastName: $("#lastname").val(),
            Vat     : $("#vat").val(),
            Company : $("#company").val(),
            Address : $("#address").val(),
            Country : $("#sample3").val(),
            Zip     : $("#zip").val(),
            City    : $("#city").val(),
            State   : $("#state").val()
        });
        array.push(registro);
        console.log(JSON.stringify(array));
        localStorage.setItem("registro", JSON.stringify(array));
        alert("Registro adicionado.");
        
        alert(JSON.parse(array[0]).Email + "\n" + JSON.parse(array[0]).FistName);
        return true;
    }

}

MaterialTextfield.prototype.checkValidity = function () {//verificar o estado de validade para o campo fica de acordo ao estado verificado
    if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
    } else {
        if (this.element_.getElementsByTagName('input')[0].value.length > 0) {
              this.element_.classList.add(this.CssClasses_.IS_INVALID);
        }
    }
};


