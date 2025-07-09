import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center py-8 px-2">
            {/* Breadcrumb */}
                  <nav className="w-full max-w-4xl text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
                    <Link to="/" className="hover:underline">Home</Link> 
                  </nav>

            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Welcome to Home</h1>

            <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center">
                <Link to="/about" className="text-blue-400 hover:underline">Go to About</Link>
                <Link to="/head-tail" className="text-blue-400 hover:underline">Go to Head & Tail</Link>
            </div>
        </div>
    );
};

export default Home;
