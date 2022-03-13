import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import mediumM from '../images/medium-m.png'
const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
        <div className="space-y-5 px-10 ">
          <h1 className="max-w-xl font-serif text-6xl">Stay Curious.</h1>
          <h2>
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex md:h-40 lg:h-80"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        />
      </div>
    </div>
  )
}

export default Home
