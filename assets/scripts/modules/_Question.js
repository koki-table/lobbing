import _ from 'lodash'

export default class Question {
  constructor() {
    this.close = document.querySelectorAll('[data-question-close]')
    this.trigger = document.querySelectorAll('[data-question-trigger]')
    this.target = document.querySelectorAll('[data-question-target]')
    // this.close = document.querySelector('[data-question-close]')

    // questionとanswerの画面切り替えのため、値取得
    this.containerQuestion = document.querySelector('[data-question-container]')
    this.containerAnswer = document.querySelector('[data-answer-container]')
    // this.appeal = document.querySelector('[data-appeal]')
    this.btn = document.getElementsByClassName('btn')
    this.count = 0

    // 進捗の色変更
    this.pagenation01 = document.querySelector('[data-pagenation01]')
    this.pagenation02 = document.querySelector('[data-pagenation02]')
    this.pagenation03 = document.querySelector('[data-pagenation03]')
    this.pagenation04 = document.querySelector('[data-pagenation04]')
    this.pagenation05 = document.querySelector('[data-pagenation05]')
  }

  init() {
    this.handleEvents()
  }

  handleEvents() {
    _.forEach(this.trigger, el => {
      el.addEventListener('click', this.onClick.bind(this))
    })

    // this.close.addEventListener('click', this.onClose.bind(this))
  }

  onClick(e) {
    const config = {
      activeClass: 'is-active'
    }
    // this.close.classList.remove(config.activeClass)
    this.close.forEach(function(e) {
      e.classList.remove(config.activeClass)
    })

    // const trigger = document.querySelector(`[data-question-trigger="${index}"]`)
    // trigger.classList.remove(config.activeClass)

    // selectボタンを押した回数を監視して、条件分岐
    for (let i = 0; i < this.btn.length; i++) {
      // if (this.btn[i].checked) {
      this.count++
      // }
      // console.log(i)
      console.log(this.count)
      if (this.count === 1) {
        this.pagenation02.classList.add(config.activeClass)
        break
      } else if (this.count === 2) {
        this.pagenation03.classList.add(config.activeClass)
        break
      } else if (this.count === 3) {
        this.pagenation04.classList.add(config.activeClass)
        break
      } else if (this.count === 4) {
        this.pagenation05.classList.add(config.activeClass)
        break
      } else if (this.count === 5) {
        this.containerQuestion.classList.remove(config.activeClass)
        this.containerAnswer.classList.add(config.activeClass)
        // this.appeal.classList.add(config.activeClass)
        // error.forEach(function(elem) {
        //   elem.classList.add('active')
        //   elem.innerHTML = 'あと1問！！！'
        // })
      }
    }
    const index = e.currentTarget.getAttribute('data-question-trigger')
    const target = document.querySelector(`[data-question-target="${index}"]`)
    target.classList.add(config.activeClass)
  }

  //   onClose() {
  //     this.close.classList.remove(config.activeClass)

  //     _.forEach(this.target, el => {
  //       el.classList.remove(config.activeClass)
  //     })
  //   }
}
