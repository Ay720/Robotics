import React, { useState } from 'react'
import axios from "axios";



const Main = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
     const response = await axios.post(
  `https://roboticss.onrender.com/enquiry`,
  formData
);

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Server Error"
    );
  }
};

  return (
    <div className="w-full overflow-x-hidden">

      {/* Navigation Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 gap-8">
          <div className="flex items-baseline gap-1 cursor-pointer hover:scale-105 transition-transform">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
              KiDROVE
            </span>
            <p className="text-xs text-gray-400 font-medium mt-1">Inspire. Learn. Grow.</p>
          </div>
          <ul className="hidden md:flex list-none gap-10 flex-1 justify-center">
            {['Courses', 'Workshops', 'Camps', 'About Us', 'Contact Us'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-gray-700 font-semibold text-sm hover:text-blue-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-pink-400 hover:after:w-full after:transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:-translate-y-1 hover:shadow-lg transition-all ml-8 whitespace-nowrap">
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen w-screen -mx-[calc(50vw-50%)] overflow-hidden"
        style={{ background: "url('/robotics-background.jpg') center/cover no-repeat" }}
      >
        <div className="absolute inset-0 backdrop-blur-sm"
          style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 35%, rgba(255,255,255,0.70) 65%, rgba(255,255,255,0.40) 100%)' }}
        />
        <div className="relative z-10 max-w-2xl px-16 py-24">
          <div className="inline-block px-6 py-3 rounded-full bg-blue-100/70 backdrop-blur text-blue-500 font-bold border border-blue-300/50 text-sm mb-6">
            Summer Workshop 2026
          </div>
          <h1 className="text-7xl font-extrabold leading-none text-gray-900 mb-6 tracking-tight">
            AI &amp; Robotics{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Summer Workshop
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 font-medium mb-8">
            Explore the exciting world of Artificial Intelligence and Robotics through fun projects, creative learning and live sessions with experts.
          </p>

          <div className="flex gap-4 flex-wrap mb-8">
            {[
              { icon: '👤', label: '8-14 Years' },
              { icon: '📅', label: '4 Weeks' },
              { icon: '💻', label: 'Online Live' },
              { icon: '✓', label: 'Certificate Included' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur border border-blue-200/40 font-semibold text-gray-800 text-sm"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
            Enroll Now →
          </button>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="w-screen -mx-[calc(50vw-50%)] bg-white py-16 px-8 my-20" id="workshops">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4 tracking-tight relative pb-6
          after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-gradient-to-r after:from-blue-500 after:to-sky-300 after:rounded-full">
          Workshop Details
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 max-w-6xl mx-auto pt-10">
          {[
            { icon: '👥', title: 'Age Group', value: '8-14 Years' },
            { icon: '📅', title: 'Duration', value: '4 Weeks' },
            { icon: '🎥', title: 'Mode', value: 'Online' },
            { icon: '💰', title: 'Fee', value: '₹2,999' },
            { icon: '📆', title: 'Start Date', value: '15 July 2026' },
          ].map(({ icon, title, value }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-2xl text-center shadow-md border-2 border-blue-100/30 hover:-translate-y-4 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-5xl mb-4 animate-bounce">{icon}</div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">{title}</h3>
              <p className="text-2xl text-blue-500 font-extrabold tracking-wide">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="max-w-7xl mx-auto my-20 px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-3xl bg-blue-50/30">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 relative pb-6 tracking-tight
            after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1.5 after:bg-gradient-to-r after:from-yellow-400 after:to-orange-400 after:rounded-full">
            Learning Outcomes
          </h2>
          <ul className="list-none mt-6 space-y-6">
            {[
              'Introduction to Artificial Intelligence',
              'Robotics Basics and Working Principles',
              'Build Real-world AI & Robotics Projects',
              'Enhance Problem Solving & Logical Thinking',
              'Improve Creativity and Coding Skills',
            ].map((item) => (
              <li
                key={item}
                className="text-lg text-gray-700 font-medium flex items-start gap-3 hover:translate-x-2 hover:text-blue-600 transition-all"
              >
                <span className="text-yellow-400 font-black text-xl mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center text-[14rem] opacity-80 animate-bounce">
          🤖
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-7xl mx-auto my-20 px-8 py-16 bg-blue-50/40 rounded-3xl border border-blue-100" id="contact">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4 tracking-tight relative pb-6
          after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-gradient-to-r after:from-blue-500 after:to-sky-300 after:rounded-full">
          Register Now
        </h2>
        <form className="max-w-lg mx-auto mt-8 flex flex-col gap-7" onSubmit={handleSubmit}>
          {[
            { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
            { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
            { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="font-bold text-gray-900 text-sm">{label}</label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleFormChange}
                required
                className="px-5 py-4 border-2 border-gray-200 rounded-xl text-base transition-all focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_5px_rgba(67,102,232,0.1)] focus:bg-blue-50 hover:-translate-y-0.5 bg-white text-gray-900 placeholder-gray-400"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-5 px-10 rounded-xl font-bold text-lg mt-2 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            Submit Enquiry
          </button>
          <p className="text-center text-gray-500 text-sm font-medium">✓ Your information is safe with us.</p>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto my-20 px-8" id="about">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4 tracking-tight relative pb-6
          after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-gradient-to-r after:from-blue-500 after:to-sky-300 after:rounded-full">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
          <div className="flex flex-col gap-5">
            {[
              { question: 'Is coding experience required?', answer: 'No, this workshop is beginner-friendly. Basic curiosity and interest in learning is all you need!' },
              { question: 'Will the sessions be recorded?', answer: 'Yes, all live sessions will be recorded and shared with the registered participants.' },
              { question: 'Will I get a certificate?', answer: 'Yes, you will receive a certificate of completion after successfully completing the workshop.' },
            ].map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="flex justify-center items-center text-[10rem] opacity-80 animate-bounce">
            🤔
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-screen -mx-[calc(50vw-50%)] bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-8 text-center relative overflow-hidden mt-20">
        <div className="absolute top-[-50%] right-[-50%] w-[600px] h-[600px] rounded-full bg-white/10" />
        <div className="absolute bottom-[-50%] left-[-50%] w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="relative z-10 flex flex-col items-center gap-5">
          <span className="text-5xl animate-bounce">🎁</span>
          <h3 className="text-3xl font-extrabold">Give your child a head start in the future!</h3>
          <p className="text-lg opacity-95 font-medium">Seats are limited. Enroll now and let the adventure begin.</p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-base hover:-translate-y-1 hover:shadow-xl transition-all mt-2">
            Enroll Now →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white text-center py-12 px-8 border-t-2 border-blue-500/20 mt-20">
        <p className="text-sm font-medium leading-relaxed">
          © 2026 KiDROVE. All rights reserved. | Inspire. Learn. Grow.
        </p>
      </footer>

    </div>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`bg-gradient-to-br from-white to-blue-50 border-2 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:translate-x-1 ${isOpen ? 'border-blue-500' : 'border-blue-100/50'}`}>
      <button
        className="w-full px-8 py-6 flex justify-between items-center bg-transparent text-left text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-blue-500 text-3xl font-light transition-transform duration-300">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-8 py-6 bg-blue-50 text-gray-600 leading-relaxed border-t-2 border-blue-100 text-base font-medium animate-[slideDown_0.3s_ease]">
          {answer}
        </div>
      )}
    </div>
  )
}

export default Main
