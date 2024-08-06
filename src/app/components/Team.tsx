"use client"
const people = [
    {
      name: 'Sachin Patidar',
      role: 'Front-end Developer',
      imageUrl:
        '/assets/sachin.jpg',
    },
    {
        name: 'Gopal Patidar',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Divyom Patidar',
        role: 'Director of Product',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Pramod Patidar',
        role: 'Designer',
        imageUrl:
          '/assets/pramod.jpg',
      },
      {
        name: 'Hemant Patidar',
        role: 'Business Relations',
        imageUrl:
          '/assets/arpit.jpg',
      },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-black py-24 sm:py-32 shadow-md shadow-slate-400 drop-shadow-xl">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight font-serif bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
            Harry_Iconfy started with helping people build awesome projects. Each day our team continues to grow and empower more creators in the world to do that.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-gray-400">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  