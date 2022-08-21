let max = 101
let p = 0
let Space = {
  '15p5': '31px',
  '50vw': '50vw',
  '100vw': '100vw',
  '50vh': '50vh',
  '100vh': '100vh',
  '1/1': '100%'
}

for (let i = 0; i < max; i++) {
  Space[i] = i * 2 + 'px'
  p = i + 'p'
  Space[p] = i + '%'
}
// console.log(Space)

module.exports = {
  Space
}
