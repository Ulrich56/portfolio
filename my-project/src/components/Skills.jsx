import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto p-6  py-12 rounded-xl mb-30 ">
      <h2 className="text-3xl font-bold text-center text-purple-500 border-b-4 border-blue-500 border-opacity-50 w-fit mx-auto mb-6 animate-bounce">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Langages */}
        <div className='border-2 rounded-xl border-red-500 text-white px-4 py-2 transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]'>
          <h3 className="text-xl font-semibold mb-2 text-center">Languages</h3>
          <ul className="list-disc list-inside text-gray-30000 space-y-1">
            <li>HTML, CSS, Tailwind CSS</li>
            <li>JavaScript, TypeScript</li>
            <li>Python, PHP</li>
          </ul>
        </div>

        {/* Frameworks & Librairies */}
        <div className='border-2 rounded-xl border-red-500 text-white px-4 py-2 transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]'>
          <h3 className="text-xl font-semibold mb-2 text-center">Frameworks</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>React.js, Next.js, Vue.js, Nuxt.js</li>
            <li>Nest.js, Laravel, Flask</li>
            <li>NativeWind, Tailwind CSS</li>
          </ul>
        </div>

        {/* Bases de données */}
        <div className='border-2 rounded-xl border-red-500 text-white px-4 py-2 transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]'>
          <h3 className="text-xl font-semibold mb-2 text-center">Databases</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>MongoDB, MySQL, SQLite</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
