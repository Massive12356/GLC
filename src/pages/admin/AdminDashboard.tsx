import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  ChevronRight,
  FileText,
  LayoutDashboard,
  Briefcase,
  UserCheck
} from 'lucide-react';
import { blogPosts, lawyers, caseStudies } from '../../data/mockData';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : blogPosts;
  });
  const [lawyersData] = useState(lawyers);
  const [caseStudiesData] = useState(caseStudies);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/secure-access');
    }
  }, [navigate]);

  const handleDeleteBlog = (id: number) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
    setShowDeleteModal(null);
  };



  const stats = [
    { label: 'Total Blogs', value: blogs.length, icon: FileText, color: 'bg-accent/20 text-accent' },
    { label: 'Total Lawyers', value: lawyersData.length, icon: UserCheck, color: 'bg-blue-100 text-blue-600' },
    { label: 'Case Studies', value: caseStudiesData.length, icon: Briefcase, color: 'bg-green-100 text-green-600' },
    { label: 'Featured Cases', value: caseStudiesData.filter(cs => cs.featured).length, icon: LayoutDashboard, color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h2 className="text-xl font-serif font-semibold text-primary">
            Dashboard Overview
          </h2>
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary-light mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-2">Quick Actions</h3>
            <p className="text-gray-300 mb-6">Manage your law firm's content efficiently</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/panel/blog/posts"
                className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                View All Posts
              </Link>
              <Link
                to="/panel/blog/new"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Blog Post
              </Link>
              <Link
                to="/panel/management/lawyers"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <UserCheck className="w-5 h-5 mr-2" />
                Manage Lawyers
              </Link>
              <Link
                to="/panel/management/case-studies"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Manage Case Studies
              </Link>
              <button className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                <LayoutDashboard className="w-5 h-5 mr-2" />
                Site Settings
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-serif font-semibold text-primary mb-4">Recent Blog Posts</h3>
            <div className="space-y-4">
              {blogs.slice(0, 3).map((blog) => (
                <div key={blog.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img src={blog.image} alt={blog.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-medium text-primary">{blog.title}</h4>
                      <p className="text-sm text-secondary-light">{blog.date} • {blog.category}</p>
                    </div>
                  </div>
                  <button className="p-2 text-secondary-light hover:text-accent transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowDeleteModal(null)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                Delete Blog Post
              </h3>
              <p className="text-secondary-light mb-6">
                Are you sure you want to delete this blog post? This action cannot be undone.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteModal(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-secondary font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteBlog(showDeleteModal)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
