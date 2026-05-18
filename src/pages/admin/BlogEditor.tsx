import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Save, 
  Eye, 
  Image as ImageIcon,
  Calendar,
  User,
  Clock,
  Tag,
  Upload,
  X
} from 'lucide-react';
import { blogPosts } from '../../data/mockData';

const BlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Corporate Law',
    author: 'Kwesi Fiadjoe',
    readTime: '5 min read',
    image: '',
    date: new Date().toISOString().split('T')[0],
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/secure-access');
    }
  }, [navigate]);

  // Load existing blog data if editing
  useEffect(() => {
    if (isEditing && id) {
      const blog = blogPosts.find(b => b.id === Number(id));
      if (blog) {
        setFormData({
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content || '',
          category: blog.category,
          author: blog.author,
          readTime: blog.readTime,
          image: blog.image,
          date: blog.date,
        });
      }
    }
  }, [isEditing, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle file upload
  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        setFormData(prev => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // Remove uploaded image
  const handleRemoveImage = () => {
    setUploadedImage(null);
    setFormData(prev => ({ ...prev, image: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Save to localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    let posts = savedPosts ? JSON.parse(savedPosts) : blogPosts;
    
    if (isEditing) {
      // Update existing post
      posts = posts.map((post: any) => 
        post.id === Number(id) ? { ...formData, id: Number(id) } : post
      );
    } else {
      // Add new post
      const newPost = {
        ...formData,
        id: Math.max(...posts.map((p: any) => p.id), 0) + 1,
        likes: 0,
        date: new Date().toISOString().split('T')[0]
      };
      posts = [...posts, newPost];
    }
    
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    
    setIsSaving(false);
    navigate('/admin/dashboard');
  };

  const categories = [
    'Corporate Law',
    'Litigation',
    'Property Law',
    'Employment Law',
    'Family Law',
    'Immigration Law',
    'Banking & Finance',
    'Energy & Natural Resources',
  ];

  const authors = [
    'Kwesi Fiadjoe',
    'Dr. Abena Owusu',
    'Kwame Asante',
    'Nana Yaa Mensah',
    'Michael Osei',
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-xl font-serif font-semibold text-primary">
            {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-5xl mx-auto">
          {showPreview ? (
            // Preview Mode
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {formData.image && (
                <div className="h-64 overflow-hidden">
                  <img src={formData.image} alt={formData.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-8">
                <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                  {formData.category}
                </span>
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">{formData.title}</h1>
                <div className="flex items-center text-secondary-light text-sm mb-6 space-x-6">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {formData.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formData.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {formData.readTime}
                  </span>
                </div>
                <p className="text-xl text-secondary leading-relaxed mb-6">{formData.excerpt}</p>
                <div className="prose prose-lg max-w-none text-secondary">
                  {formData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            // Edit Mode
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Title */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <label className="block text-sm font-medium text-primary mb-2">
                  Blog Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                  placeholder="Enter blog post title"
                />
              </div>

              {/* Image Upload */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <label className="block text-sm font-medium text-primary mb-2">
                  Featured Image
                </label>
                <p className="text-xs text-secondary-light mb-4">
                  Upload an image from your computer or enter an image URL
                </p>

                {/* Upload Area */}
                {!uploadedImage && !formData.image && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
                      isDragging
                        ? 'border-accent bg-accent/5'
                        : 'border-gray-300 hover:border-accent hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-primary font-medium mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-secondary-light">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </div>
                )}

                {/* Image Preview */}
                {(uploadedImage || formData.image) && (
                  <div className="relative">
                    <img
                      src={uploadedImage || formData.image}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Or use URL */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Or enter image URL
                  </label>
                  <div className="relative">
                    <ImageIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-light" />
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Meta Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Tag className="w-4 h-4 inline mr-1" />
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Author *
                    </label>
                    <select
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      {authors.map(author => (
                        <option key={author} value={author}>{author}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>

                  {/* Read Time */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Read Time *
                    </label>
                    <select
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="3 min read">3 min read</option>
                      <option value="5 min read">5 min read</option>
                      <option value="8 min read">8 min read</option>
                      <option value="10 min read">10 min read</option>
                      <option value="15 min read">15 min read</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <label className="block text-sm font-medium text-primary mb-2">
                  Excerpt *
                </label>
                <p className="text-xs text-secondary-light mb-2">
                  A brief summary of the blog post (shown in blog listings)
                </p>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Write a compelling excerpt..."
                />
              </div>

              {/* Content */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <label className="block text-sm font-medium text-primary mb-2">
                  Content *
                </label>
                <p className="text-xs text-secondary-light mb-2">
                  Write the full blog post content. Use double line breaks for new paragraphs.
                </p>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={15}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-mono text-sm"
                  placeholder="Write your blog post content here..."
                />
              </div>
            </motion.form>
          )}
          
          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-secondary font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Post
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogEditor;
