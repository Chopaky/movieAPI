import { Component } from "../core/chopaky";
import { newMovieId as movieId } from "../routes/Movie";

interface State{
  [key: string]: unknown
  menus: {
    name: string
    href: string
  }[]
}

export default class TheHeader extends Component{
  public state!: State
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: `#/movie?id=`
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render(){
    this.el.innerHTML = /* html */`
    <a 
      href="#/" 
      class='logo'>
      <span>OMDbAPI</span>.COM
    </a>
    <nav>
      <ul>
        ${this.state.menus.map(menu => {
          const href = menu.href.split('?')[0] 
          const hash = location.hash.split('?')[0]
          const isActive = href === hash/* href와 hash를 비교하여 동일하면 active */ 
          return /* html*/`
            <li>
              <a 
                class = "${isActive ? 'active' : ''}"
                href="${
                  menu.name === 'Movie'
                  ? menu.href + movieId // 최신화된 movie id를 표시
                  : menu.href
                  }">
                ${menu.name}
              </a>
            </li>`
        }).join('')}
      </ul>
    </nav>
    <a href="#/about" class="user">
      <img src="https://raw.githubusercontent.com/Chopaky/Chopaky.github.io/main/KakaoTalk_20230601_224901906-modified.png" alt="YM">
    </a>
    `
  }
}