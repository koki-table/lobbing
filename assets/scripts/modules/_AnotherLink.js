import _ from 'lodash'
import anime from 'animejs/lib/anime.es.js'

export default class AnotherLink {
  constructor() {
    // this.open = document.getElementById('appeal--last')
    this.target = document.querySelectorAll('[data-appeal-last]')
    // this.logo = document.getElementById('logo')
    this.timeline = anime.timeline({
      targets: '.st1',
      direction: 'normal',
      loop: false
    })
  }

  init() {
    this.handleEvents()
  }

  handleEvents() {
    _.forEach(this.target, el => {
      el.addEventListener('click', this.onClick.bind(this))
    })
  }

  onClick(e) {
    const config = {
      activeClass: 'is-active'
    }

    const open = document.querySelector('[data-loading--last]')
    open.classList.add(config.activeClass)
    // this.close.classList.remove(config.activeClass)
    // this.close.forEach(function(e) {
    //   e.classList.remove(config.activeClass)
    // })
    // 線画部分のアニメーションを設定
    this.timeline.add({
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      fill: ['transparent', 'transparent'] // 塗りつぶしを透明のままにする
      // duration: 200,
      // delay: function(el, i) {
      //   return i * 100
      // }
    })
    // 塗りつぶしのアニメーションを設定
    this.timeline.add(
      {
        easing: 'easeInOutSine',
        fill: ['transparent', '#000000']
        // duration: 100
      }
      // '-=100'
    ) // ひとつ前のアニメーションが終わる200ミリ秒前に開始する

    this.timeline.add({
      complete: () => {
        // window.alert('Complete!')
        window.location.href =
          'https://twitter.com/Lobbing_?ref_src=twsrc%5Etfw'
      }
    })

    // const trigger = document.querySelector(`[data-question-trigger="${index}"]`)
    // trigger.classList.remove(config.activeClass)

    // selectボタンを押した回数を監視して、条件分岐
    // for (let i = 0; i < this.btn.length; i++) {
    //   this.count++

    //   console.log(this.count)
    //   if (this.count === 1) {
    //     setTimeout(function(e) {
    //       const pagenation02 = document.querySelector('[data-pagenation02]')
    //       pagenation02.classList.add(config.activeClass)
    //     }, 100)
    //     break
    //   } else if (this.count === 2) {
    //     this.pagenation03.classList.add(config.activeClass)
    //     break
    //   } else if (this.count === 3) {
    //     this.pagenation04.classList.add(config.activeClass)
    //     break
    //   } else if (this.count === 4) {
    //     this.pagenation05.classList.add(config.activeClass)
    //     break
    //   } else if (this.count === 5) {
    //     this.containerQuestion.classList.remove(config.activeClass)
    //     this.containerAnswer.classList.add(config.activeClass)
    //     setTimeout(function() {
    //       const bodyAnswer = document.querySelector(`[data-answer-body]`)
    //       bodyAnswer.classList.add(config.activeClass)
    //     }, 100)
    //   }
    // }
    // const index = e.currentTarget.getAttribute('data-question-trigger')
    // setTimeout(function() {
    //   const target = document.querySelector(`[data-question-target="${index}"]`)
    //   target.classList.add(config.activeClass)
    // }, 100)
    // document.getElementsByClassName('loading-anime')[0].classList.add('end')
  }

  //   onClose() {
  //     this.close.classList.remove(config.activeClass)

  //     _.forEach(this.target, el => {
  //       el.classList.remove(config.activeClass)
  //     })
  //   }
}
