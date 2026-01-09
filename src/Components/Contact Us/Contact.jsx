import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MessageSquare, BookOpen, Share2 , Check } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';


const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const contactInfo = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'WhatsApp',
      subtitle: 'Chat Support',
      info: '+92 3299261322',
      description: 'Get quick answers to your questions',
      action: 'Chat Now',
      link: 'https://wa.me/923299261322',
      bg: 'bg-[#fffff]/10',
      border: 'border-[#15803D]/30'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      subtitle: 'Detailed Inquiries',
      info: 'help@qmaonline.com',
      description: 'For comprehensive questions and feedback',
      action: 'Send Email',
      link: 'mailto:help@qmaonline.com.com',
      bg: 'bg-[#ffffff]',
      border: 'border-[#15803D]/50'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Hours',
      subtitle: 'Support Availability',
      info: 'Support 24 /7 ',
      description: 'We are here to help you anytime',
      action: 'Message Us',
      link: '/trial',
      bg: 'bg-[#ffffff]/10',
      border: 'border-[#15803D]/30'
    }
  ];

  const quickHelp = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Course Info', desc: 'Program details and curriculum' },
    { icon: <Share2 className="w-6 h-6" />, title: 'Admissions', desc: 'Enrollment process guidance' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'Fee Structure', desc: 'Payment plans and options' },
    { icon: <Phone className="w-6 h-6" />, title: 'Support', desc: 'Technical and academic help' }
  ];

  return (
    <MainLayout>
      <div id="contact-section" className="relative min-h-screen bg-gradient-to-b from-[#ffffff] to-[#ffffff] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#15803D]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-[#C0A34E]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#15803D] text-white rounded-full shadow-md mb-4 tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#15803D] mx-auto my-8"></div>
            <p className="text-lg text-black leading-relaxed max-w-2xl mx-auto">
              "And say: My Lord, increase me in knowledge" - Ready to begin your Islamic learning journey?
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-full p-8 rounded-xl border ${contact.border} ${contact.bg} `}>
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full ${hoveredCard === index ? 'bg-[#15803D] text-white' : 'bg-[#15803D]/20 text-white'} duration-300`}>
                      {contact.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{contact.title}</h3>
                  <p className="text-[#000000] text-sm font-semibold mb-3 text-center">{contact.subtitle}</p>
                  
                  <div className="text-lg font-medium text-black-300 mb-3 text-center group-hover:text-white transition-colors duration-300">
                    {contact.info}
                  </div>
                  
                  <p className="text-black-400 text-sm mb-6 leading-relaxed text-center">
                    {contact.description}
                  </p>
                  
                  <div className="text-center">
                    <a
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`inline-flex items-center justify-center space-x-2 ${hoveredCard === index ? 'bg-[#15803D]' : 'bg-[#15803D]'} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      <span>{contact.action}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help Section */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '600ms' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">How We Can Help You</h2>
              <p className="text-black-300">Quick assistance for all your needs</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {quickHelp.map((help, index) => (
                <div
                  key={index}
                  className={`bg-[#ffffff] backdrop-blur-sm border border-[#15803D]/30 rounded-xl p-6 text-center transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#15803D]/20 p-3 rounded-lg text-[#15803D]">
                      {help.icon}
                    </div>
                  </div>
                  <h4 className="text-black font-semibold mb-2">{help.title}</h4>
                  <p className="text-black text-sm">{help.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main CTA Section */}
          <div className={`bg-[#ffffff] rounded-2xl p-12 border border-[#15803D]/30 shadow-lg max-w-5xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '1100ms' }}>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-black mb-6">Ready to Begin Your Islamic Learning Journey?</h3>
              <p className="text-black text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                Join hundreds of students who have transformed their lives through authentic Islamic education. 
                Our expert teachers are here to guide you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<a
  href="https://wa.me/923299261322?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20learn%20more%20about%20your%20courses."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center
             bg-[#15803D]
             hover:bg-[#15803D]
             text-white font-bold
             px-8 py-4 rounded-lg
             shadow-lg hover:shadow-lg
             transition-all duration-300"
>
  <MessageSquare className="w-5 h-5 mr-2" />
  Start WhatsApp Chat
</a>

                
<a
  href="/courses"
  className="flex items-center justify-center bg-transparent hover:bg-[#ffffff]/10 text-[#000000] border-2 border-[#15803D] hover:border-[#15803D] font-bold px-8 py-4 rounded-lg transition-all duration-300"
>
  <BookOpen className="w-5 h-5 mr-2" />
  Explore Courses
</a>

              </div>
            </div>
          </div>

          {/* Contact Tips */}
          <div className={`bg-gradient-to-r from-[#ffffff]/10 to-[#ffffff]/10 border border-[#15803D]/20 rounded-2xl p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '1300ms' }}>
            <h4 className="text-2xl font-bold text-black mb-6 flex items-center">
              <span className="text-[#15803D] mr-3">💡</span>
              Quick Contact Tips
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-[#000000] font-semibold mb-3">For Faster Assistance, Include:</h5>
                <ul className="space-y-3 text-black-300">
                  {[
                    "Your name and education level",
                    "Course you're interested in",
                    "Preferred class timings",
                    "Specific questions or concerns"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#000000] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[#000000] font-semibold mb-3">Response Schedule:</h5>
                <div className="space-y-3 text-black-300">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#000000] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Sunday - Thursday</p>
                      <p className="text-sm">9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#000000] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Friday</p>
                      <p className="text-sm">2:00 PM - 8:00 PM (After Jummah)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#000000] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-sm">10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;