import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center py-8 px-2">
            {/* Breadcrumb */}
            <nav className="w-full max-w-4xl text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
                <Link to="/" className="hover:underline">Home</Link> &gt;
                <span className="ml-2 text-white font-semibold text-white">About</span>
            </nav>

            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-white">About Page</h1>
            <p className="text-sm sm:text-base text-white px-4">
                Enthusiastic Full Stack Developer with 24+ months of hands-on experience in the MEAN-MERN stack
                (MongoDB, Express.js, Angular, React, Node.js). Adept at crafting responsive, high-performance web
                applications and optimising both front-end and back-end functionalities. Recognized for problem-solving
                capabilities, effective communication, and collaborative project management. Committed to leveraging
                technical skills and innovative approaches to drive impactful results.</p>
        </div>
    );
};

export default About;
