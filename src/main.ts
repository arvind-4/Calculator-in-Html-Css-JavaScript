import './style.css'

const input = document.getElementById('text') as HTMLInputElement
const clearBtn = document.getElementById('clear')
const backBtn = document.getElementById('back')
const equalBtn = document.getElementById('equal')
const valueButtons = document.querySelectorAll<HTMLButtonElement>('button[data-val]')

function dis(val: string): void {
  input.value += val
}

function clear_function(): void {
  input.value = ''
}

function sol(): void {
  try {
    input.value = eval(input.value).toString()
  } catch {
    alert("An Error occured! Try again")
  }
}

function backspace(): void {
  input.value = input.value.slice(0, -1)
}

clearBtn?.addEventListener('click', clear_function)
backBtn?.addEventListener('click', backspace)
equalBtn?.addEventListener('click', sol)
valueButtons.forEach(btn =>
  btn.addEventListener('click', () => dis(btn.dataset.val!))
)

document.addEventListener('keydown', (event: KeyboardEvent) => {
  const allowedKeys = '0123456789+-*/.'
  
  if (allowedKeys.includes(event.key)) {
    dis(event.key)
  } else if (event.key === 'Enter') {
    sol()
  } else if (event.key === 'Backspace') {
    backspace()
  } else if (event.key === 'Escape') {
    clear_function()
  }
})