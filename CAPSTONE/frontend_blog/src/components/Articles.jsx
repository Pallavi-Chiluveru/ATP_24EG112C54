import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { pageWrapper, pageTitleClass } from "../styles/common";
import { useAuth } from "../store/authStore";

function Articles() {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/articles`, { withCredentials: true });
        setArticles(res.data.payload || []);
      } catch (err) {
        if (err.response?.status === 401) {
          // Token is missing or expired, but Zustand still thinks we are logged in.
          // We must clear the local storage state to force the user back to the login screen.
          useAuth.setState({ isAuthenticated: false, currentUser: null });
          navigate("/login");
        } else {
          setError(err.response?.data?.message || "Failed to fetch articles");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAllArticles();
  }, []);

  if (loading) return <div className="text-center py-20 text-[#0066cc]">Loading articles...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className={`${pageWrapper} bg-white`}>
      <div className="mb-16">
        <h1 className={`${pageTitleClass} bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent`}>
          Discover Articles
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Explore the latest stories, insights, and knowledge shared by our community of writers.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-24 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500 text-lg">No articles available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div 
              key={article._id} 
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col transform hover:-translate-y-2"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors break-words">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow break-words">
                  {article.content}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                      {article.author?.firstName?.charAt(0) || "A"}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {article.author?.firstName || "Author"}
                    </span>
                  </div>
                  <Link
                    to={`/article/${article._id}`}
                    className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

  );
}

export default Articles;
