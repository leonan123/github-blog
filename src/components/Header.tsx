import HeaderCover from '@/assets/header-cover.svg'

export function Header() {
  return (
    <header className="h-[18.2rem] w-full">
      <img src={HeaderCover} alt="" className="h-full w-full object-cover" />
    </header>
  )
}
