//declaração das variaveis
var plus = document.getElementById('+'),
    minus = document.getElementById('-'),
    multiplication = document.getElementById('x'),
    divideby = document.getElementById('div'),
    one = document.getElementById('1'),
    two = document.getElementById('2'),
    three = document.getElementById('3'),
    four = document.getElementById('4'),
    five = document.getElementById('5'),
    six = document.getElementById('6'),
    seven = document.getElementById('7'),
    eight = document.getElementById('8'),
    nine = document.getElementById('9'),
    zero = document.getElementById('0'),
    outcome = document.getElementById('equal'),
    clear = document.getElementById('reset'),
    screen = document.getElementById('viewer'),
    dot= document.getElementById('dot'),
    operator = '',
    num1 = '',
    num2 = '',
    result = '';

//Seleção dos números
one.addEventListener('click',() => {
    if (operator === '' && result === ''){
        num1 = num1 + '1' ;
        screen.textContent = num1;
        console.log(num1);
}
    if(num1 != '' && operator != ''){
        num2 = num2 + '1';
        screen.textContent = num1 + operator + num2;
}
});
two.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '2';
        screen.textContent = num1;
}
if(num1 != '' && operator != ''){
    num2 = num2 + '2';
    screen.textContent = num1 + operator + num2;
}
});
three.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '3';
        screen.textContent = num1;
    }
    if(num1 != '' && operator != ''){
        num2 = num2 + '3';
        screen.textContent = num1 + operator + num2;
    }
});
four.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '4';
        screen.textContent = num1;
    }
    if(num1 != '' && operator != ''){
    num2 = num2 + '4';
    screen.textContent = num1 + operator + num2;
    }
});
five.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '5';
        screen.textContent = num1;
}
    if(num1 != '' && operator != ''){
        num2 = num2 + '5';
        screen.textContent = num1 + operator + num2;
    }
});
six.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '6';
        screen.textContent = num1;
}
    if(num1 != '' && operator != ''){
        num2 = num2 + '6';
        screen.textContent = num1 + operator + num2;
    }
});
seven.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '7';
        screen.textContent = num1;
}
    if(num1 != '' && operator != ''){
        num2 = num2 + '7';
        screen.textContent = num1 + operator + num2;
    }
});
eight.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '8';
        screen.textContent = num1;
}
    if(num1 != '' && operator != ''){
        num2 = num2 + '8';
        screen.textContent = num1 + operator + num2;
    }
});
nine.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '9';
        screen.textContent = num1;
}
    if(num1 != '' && operator != ''){
        num2 = num2 + '9';
        screen.textContent = num1 + operator + num2;
    }
});
zero.addEventListener('click',() => {
    if (operator === ''){
        num1 = num1 + '0';
        screen.textContent = num1;
}
    if(num1 != '' && operator != ''){
        num2 = num2 + '0';
        screen.textContent = num1 + operator + num2;
    }
});

//Seleção das operações
plus.addEventListener('click',() => {
    operator = '+' ;
    screen.textContent = num1 + operator ;
})
minus.addEventListener('click',() => {
    operator = '-' ;
    screen.textContent = num1 + operator ;
});
multiplication.addEventListener('click',() => {
    operator = 'x' ;
    screen.textContent = num1 + operator ;
});
divideby.addEventListener('click',() => {
    operator = '/' ;
    screen.textContent = num1 + operator ;
});

//Função para as contas quando clicado em =
outcome.addEventListener('click', () =>{
    if(operator === '+'){
        result = +num1 + +num2;
        screen.textContent = result.toFixed(2);
    }
    if(operator === '-'){
        result= +num1 - +num2;
        screen.textContent = result.toFixed(2);
    }
    if(operator === 'x'){
        result= num1 * num2;
        screen.textContent = result.toFixed(2);
        console.log(result);
    }
    if(operator === '/'){
        result= +num1 / +num2;
        screen.textContent = result.toFixed(2);
    }
    
    if(num1 !='' && operator === ''){
        result = num1;
        return result;
    }
    
   
    operator = '';
    num2 = '';
    num1 = result.toFixed(2);
    result = '';
});

//Funcao para a virgula
dot.addEventListener('click',() => {
    var checkdot1 = num1.indexOf( ".");
    console.log(checkdot1);
    if(operator === '' &&  checkdot1 === -1){
        num1 = num1 + '.';
        screen.textContent = num1;
    }
    var checkdot2 = num2.indexOf( ".");

    if(operator != '' &&  checkdot2 === -1){
        num2 = num2 + '.';
        screen.textContent = num1 + operator + num2;
    }
})

//Funçao de reset
clear.addEventListener('click',() =>{
    num1='';
    num2='';
    operator='';
    screen.textContent = '0';

})
