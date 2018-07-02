/* export function renderA() {
  let a = document.getElementById('one');
  a.innerHTML = `
  <ul>
    <li>11</li>
    <li>22</li>
    <li>3</li>
    </ul>
  `
} */

export function componentA () {
  let ul = document.createElement('ul')
  ul.innerHTML = `
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
    <li>555</li>
    <li>666</li>
  `
  return ul
}
