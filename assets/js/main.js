function Calculadora() {
  this.display = document.querySelector('.display');

  this.start = () => {
    this.addNumDisplay();
    this.btnClear();
    this.btnDelete();
    this.btnEqual();
  }
  

  this.addNumDisplay = () => {
    document.addEventListener('click', event => {
      event = event.target;
      if (event.classList.contains('btn-num'))
        this.display.value += event.innerText;
      this.display.focus();
    });
  };

  this.btnClear = () => {
    document.addEventListener('click', event => {
      event = event.target;
      if (event.classList.contains('btn-clear'))
        this.display.value = '';
    })
  }

  this.btnDelete = () => {
    document.addEventListener('click', event => {
      event = event.target;
      if (event.classList.contains('btn-del'))
        this.display.value = this.display.value.slice(0, -1);
    })
  }

  this.btnEqual = () => {
    document.addEventListener('click', event => {
      event = event.target;
      if (event.classList.contains('btn-eq')) {
        try {
          const operation = eval(this.display.value);

          if (!operation) {
            alert('Invalid Operation');
            return;
          }

          this.display.value = String(operation);

        } catch {
          alert('Invalid Operation');
        }
      }
    })

  }




}


const calculadora = new Calculadora();
calculadora.start();
