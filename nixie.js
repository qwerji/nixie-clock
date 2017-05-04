const hours = document.querySelector('.hours')
const mins = document.querySelector('.mins')
const secs = document.querySelector('.secs')

function getTime() {
    const now = new Date()
    return {
        hours: now.getHours() <= 9 ? `0${now.getHours()}` : `${now.getHours()}`,
        mins: now.getMinutes() <= 9 ? `0${now.getMinutes()}` : `${now.getMinutes()}`,
        secs: now.getSeconds() <= 9 ? `0${now.getSeconds()}` : `${now.getSeconds()}`
    }
}

function setDigits(section, digit) {
    const tens = [...section.children[0].children]
    const ones = [...section.children[1].children]
    tens.forEach(number => number.classList.remove('active'))
    tens[digit[0]].classList.add('active')
    ones.forEach(number => number.classList.remove('active'))
    ones[digit[1]].classList.add('active')
}

function tick() {
    const time = getTime()
    setDigits(hours, time.hours)
    setDigits(mins, time.mins)
    setDigits(secs, time.secs)
}

tick()

setInterval(tick, 1000)
