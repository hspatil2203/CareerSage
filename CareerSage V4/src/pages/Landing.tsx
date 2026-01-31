import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Logo variant="light" size="md" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your Future Career</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Starts Here</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Discover your ideal career path with AI-powered guidance and personalized recommendations.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Link
                to="/app"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Journey
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'AI-Powered Analysis',
                description: 'Our advanced algorithms analyze your skills, interests, and personality to match you with the perfect career path.',
                icon: '🤖',
                color: 'from-blue-500 to-cyan-400'
              },
              {
                name: 'Personalized Roadmap',
                description: 'Get a customized learning and development plan to achieve your career goals efficiently.',
                icon: '🗺️',
                color: 'from-purple-500 to-pink-500'
              },
              {
                name: 'Industry Insights',
                description: 'Stay ahead with real-time data on job market trends and in-demand skills.',
                icon: '📊',
                color: 'from-green-500 to-emerald-400'
              },
              {
                name: 'Skill Assessment',
                description: 'Evaluate your current skills and identify areas for growth and improvement.',
                icon: '🎯',
                color: 'from-yellow-500 to-amber-400'
              },
              {
                name: 'Mentor Matching',
                description: 'Connect with experienced professionals in your desired field for guidance.',
                icon: '👥',
                color: 'from-red-500 to-orange-400'
              },
              {
                name: 'Job Preparation',
                description: 'Ace your interviews with our comprehensive preparation tools and resources.',
                icon: '💼',
                color: 'from-indigo-500 to-blue-400'
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} text-white text-xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your career?</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
            Join thousands of professionals who have discovered their ideal career path with CareerSage.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/app"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo variant="dark" size="md" />
            </div>
            <div className="flex space-x-6">
              {['About', 'Careers', 'Contact', 'Terms', 'Privacy'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} CareerSage. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      

    </div>
  );
};

export default Landing;
