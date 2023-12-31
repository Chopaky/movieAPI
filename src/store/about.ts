import { Store } from "../core/chopaky";

interface State{
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: 'https://raw.githubusercontent.com/Chopaky/Chopaky.github.io/main/KakaoTalk_20230601_224901906-modified.png',
  name: 'Chopaky / ParkDongWon',
  email: 'hommetuna@gmail.com',
  blog: 'https://www.notion.so/Chopaky-f53f9be5a69b479eb1aa015fe552446b?pvs=4',
  github: 'https://github.com/Chopaky',
  repository: 'https://github.com/Chopaky/movieAPI.git'
})