import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock, User, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

const BlogPage = () => {
  const [posts, setPosts] = useState(blogPosts);

  // Load blog posts from localStorage if available
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Health Education Blog | Generational Life Changers</title>
        <meta name="description" content="Explore health education articles, medical awareness, and patient stories from Nyamedua Foundation serving West Africa." />
        <meta name="keywords" content="health education, medical blog, West Africa health, patient stories, malaria, maternal health" />
        <meta property="og:title" content="Health Education Blog | Nyamedua Foundation" />
        <meta property="og:description" content="Health education and medical awareness for communities across West Africa." />
      </Helmet>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stories, insights, and updates on sustainable development, capacity building, and our impact across Ghana and Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-secondary-light mb-4 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center text-green-600">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {post.likes}
                    </span>
                  </div>
                  <h2 className="text-xl font-serif font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-secondary-light mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-accent font-medium group-hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Stay Informed</h2>
          <p className="text-white/70 mb-8">
            Subscribe to our newsletter for the latest insights on sustainability and development.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-primary font-medium rounded-lg hover:bg-accent-light transition-colors hover:animate-pulse"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </motion.div>
    </>
  );
};

export default BlogPage;