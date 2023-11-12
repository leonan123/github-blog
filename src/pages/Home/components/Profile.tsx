import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBuilding,
  FaUserGroup,
} from 'react-icons/fa6'

interface Profile {
  profileUrl: string
  name: string
  bio: string
  login: string
  avatarUrl: string
  followers: number
  company: string
}

export function Profile() {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  async function fetchProfile() {
    const response = await api.get('/users/leonan123')

    const {
      name,
      bio,
      login,
      followers,
      company,
      avatar_url: avatarUrl,
      html_url: profileUrl,
    } = response.data

    setProfile({
      profileUrl,
      name,
      bio,
      login,
      avatarUrl,
      followers,
      company,
    })
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <section className="relative z-10 mx-7 -mt-[calc(18.5rem/3.5)] min-h-[212px] rounded-lg bg-cyan-700 p-8 md:container md:mx-auto">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <div className="max-h-[148px] max-w-[148px] overflow-hidden rounded-lg">
          <img
            src={profile.avatarUrl}
            alt=""
            className="aspect-square object-cover"
          />
        </div>

        <div className="flex min-h-[148px] flex-1 flex-col">
          <header className="flex flex-wrap justify-between">
            <strong className="text-2xl font-bold text-gray-100">
              {profile.name}
            </strong>
            <a
              href={profile.profileUrl}
              className="flex items-center gap-2 text-xs font-bold uppercase leading-none text-blue-100 hover:text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <span>github</span>{' '}
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          </header>

          <main className="mt-2 flex-1">
            <p className="leading overflow-hidden text-gray-300">
              {profile.bio}
            </p>
          </main>

          <footer className="pt-4">
            <ul className="flex flex-wrap items-center gap-6 text-cyan-100">
              <li className="flex items-center gap-2 font-light">
                <FaGithub className="text-lg" />
                <span>{profile.login}</span>
              </li>

              <li className="flex items-center gap-2">
                <FaBuilding className="text-lg" />
                <span>{profile.company}</span>
              </li>

              <li className="flex items-center gap-2">
                <FaUserGroup className="text-lg" />
                <span>{profile.followers} seguidores</span>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  )
}
