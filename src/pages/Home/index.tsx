import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { Publications } from './components/Publications'

export function Home() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100%-12.9rem)] w-full space-y-16 pb-8">
        <Profile />
        <Publications />
      </main>
    </>
  )
}
