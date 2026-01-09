import React from 'react';
import { BookOpen, GraduationCap, School, Star, Check, Globe, Smartphone, Award } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';

const faculty = [
  {
    name: 'Faiza Sahabat',
    title: 'Director of Quranic Studies',
    credentials: 'Islamic Education – AlHuda International Institute',
    icon: <BookOpen className="w-12 h-12 text-[#C0A34E]" />,
  },
  {
    name: 'Dr. Amina Noor',
    title: 'Chair of Tafsir Studies',
    credentials: 'PhD in Islamic Studies – Tafsir & Tajweed',
    icon: <GraduationCap className="w-12 h-12 text-[#C0A34E]" />,
  },
  {
    name: 'Ustadha Nawal Zahra',
    title: 'Head of Tajweed Instruction',
    credentials: 'Certified Qaria – Darul Uloom Karachi',
    icon: <School className="w-12 h-12 text-[#C0A34E]" />,
  },
];

const AboutUs = () => {
  return (
    <MainLayout>
      <main className="bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-black ">
        {/* Hero Section */}
        <section className="relative py-28 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/36704/pexels-photo.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/90 to-[#ffffff]"></div>
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#15803D] text-white rounded-full shadow-md mb-4 tracking-wider">
              Authentic Islamic Education
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-black">
                About Quran Majeed Academy
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#15803D] mx-auto my-8"></div>
            <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto">
              A premier online institution preserving the authentic tradition of Quranic education while embracing innovative teaching methodologies for the digital age.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-[#15803D]" /> Our Mission
          </h2>
          <div className="bg-[#ffffff] rounded-xl p-8 border border-[#15803D]/30 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              We provide online Quran classes with certified male and female teachers, offering personalized 1-on-1 lessons for kids, adults, and beginners worldwide. As a trusted partner of the globally recognized Quran Majeed App, we ensure safe, effective, and personalized Quran learning for every student worldwide.
            </p>
          </div>
        </section>


        {/* Unique Features Section */}
<section className="py-20 px-6 max-w-5xl mx-auto text-black">
  <div className="flex flex-col lg:flex-row gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div className="lg:w-1/2 space-y-8 text-left">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-6">
          <Star className="w-8 h-8 text-[#15803D]" />
          Why Choose Us
        </h2>

        <p className="text-lg leading-relaxed">
          We bridge the gap between classical Islamic education and contemporary learning needs with our unique approach.
        </p>
      </div>

      <ul className="space-y-5">
        <li className="flex items-center gap-4">
          <div className="bg-[#15803D]/20 p-2 rounded-lg flex-shrink-0">
            <Check className="w-5 h-5 text-black" />
          </div>
          <p className="text-base leading-relaxed">
            Comprehensive Tajweed & Tafseer Programs (Certified)
          </p>
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-[#15803D]/20 p-2 rounded-lg flex-shrink-0">
            <Check className="w-5 h-5 text-black" />
          </div>
          <p className="text-base leading-relaxed">
            Qualified Male & Female Scholars
          </p>
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-[#15803D]/20 p-2 rounded-lg flex-shrink-0">
            <Check className="w-5 h-5 text-black" />
          </div>
          <p className="text-base leading-relaxed">
            Global access with flexible scheduling across time zones
          </p>
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-[#15803D]/20 p-2 rounded-lg flex-shrink-0">
            <Check className="w-5 h-5 text-black" />
          </div>
          <p className="text-base leading-relaxed">
            Interactive learning platform with progress tracking
          </p>
        </li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="lg:w-1/2 relative">
      <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl -z-10"></div>
      <img
        src="https://images.pexels.com/photos/7429322/pexels-photo-7429322.jpeg"
        alt="Islamic Learning Experience"
        className="rounded-2xl shadow-xl border-2 border-white/30 w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

  </div>
</section>


        {/* Distinguished Faculty */}
        {/*         <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#C0A34E]" /> Our Esteemed Faculty
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn from certified scholars with traditional Islamic education and modern teaching expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-[#1a3258] border border-[#366AB7]/30 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-[#366AB7]/20 p-4 rounded-full group-hover:bg-[#366AB7]/30 transition-colors duration-300">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#C0A34E]">{member.name}</h3>
                <p className="text-gray-300 mt-2">{member.title}</p>
                <p className="text-sm text-gray-400 mt-3">{member.credentials}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#ffffff] rounded-xl p-8 border border-[#15803D]/30 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Begin Your Quranic Journey Today</h2>
            <p className="text-black mb-8 max-w-2xl mx-auto">
              Join hundreds of students worldwide who are transforming their relationship with the Quran through our structured programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="inline-block bg-gradient-to-r from-[#15803D] to-[#15803D] hover:from-[#15803D] hover:to-[#15803D] text-[#ffffff] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Courses
              </a>
              <a
                href="/contact-us"
                className="inline-block bg-transparent hover:bg-[#366AB7]/10 text-black border-2 border-[#15803D] hover:border-[#C0A34E] font-bold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default AboutUs;