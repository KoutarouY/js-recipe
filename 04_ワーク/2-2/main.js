// HTML要素を取得する
const buyButtonTea = document.getElementById("buy-button-tea")
const displayItems = document.getElementById("display-items")
const addButton100 = document.getElementById("add-button-100")
const displaySaifu = document.getElementById("display-saifu")
const displayJihankiMoney = document.getElementById("display-jihanki-money")
const otsuriLever = document.getElementById("otsuriLever")
let jihankiMoney = 0
let saifu = 1000
let emojiCount = ""

// buyButtonTea を押した時の処理
// buyButtonTea をクリックした時に🍵を増やしていく
buyButtonTea.onclick = function () {
  if (jihankiMoney >= 100) {
    emojiCount += "🍵"
    displayItems.textContent = emojiCount
    jihankiMoney -= 100
    displayJihankiMoney.textContent = jihankiMoney
  }
}
addButton100.onclick = function () {
  if (saifu >= 100) {
    saifu -= 100
    jihankiMoney += 100
    displaySaifu.textContent = saifu
    displayJihankiMoney.textContent = jihankiMoney
  }
  if (jihankiMoney >= 100) {
    buyButtonTea.disabled = false
  }
  otsuriLever.onclick = function () {
    saifu += jihankiMoney
    jihankiMoney = 0
    displaySaifu.textContent = saifu
    displayJihankiMoney.textContent = jihankiMoney
  }
}
