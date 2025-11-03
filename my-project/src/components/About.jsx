import React from 'react'

const About = () => {
  return (
    <section id="about" className='mb-30 flex flex-col items-center p-6 md:p-12 lg:p-24 max-w-5xl mx-auto rounded-xl border-2 border-red-500 text-white px-4 py-2 transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]'>
        <div className='md:text-center sm:text-center items-center'>
      <h1 className=' text-3xl font-extrabold text-purple-500 border-b-4 border-blue-500 border-opacity-50 w-fit mx-auto mb-3 animate-bounce'>
        About me
      </h1>
      <p className='mx-10 sm:mx-6 md:mx-6 font-serif'>Développeur Full-Stack Junior, passionné par
        l’informatique, je me suis orienté vers une filière
        liée à la sécurité numérique. <br /> J’ai ensuite décidé
        de me former au développement d’applications
        afin d’apporter une valeur ajoutée à ma
        formation initiale..
        </p>
    </div>
    </section>
    
  )
}

export default About
