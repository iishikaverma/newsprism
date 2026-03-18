import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

            <div>
            <h2 className="text-xl font-bold text-white">Newsprism</h2>
            <p className="mt-2 text-sm text-gray-400">
                See the story from every angle. Curated news with context,
                perspectives, and smarter reading.
            </p>
            </div>

            <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-400">Current Affairs</Link></li>
                <li><Link to="/topics" className="hover:text-blue-400">Topics</Link></li>
                <li><Link to="/search" className="hover:text-blue-400">Explore</Link></li>
                <li><Link to="/subscribe" className="hover:text-blue-400">Daily Digest</Link></li>
                <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
            </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm text-gray-400 mb-3">
                    Get the top news delivered to your inbox.
                </p>
                <Link to="/subscribe"
                    className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white text-sm">
                    Subscribe
                </Link>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
            Newsprism. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;