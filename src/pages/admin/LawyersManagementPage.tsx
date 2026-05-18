import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, Save, X, Camera } from 'lucide-react';
import { lawyers } from '../../data/mockData';
import { LawyerFormData } from '../../types';

const LawyersManagementPage = () => {
  const navigate = useNavigate();
  const [lawyersData, setLawyersData] = useState(lawyers);
  const [editingLawyer, setEditingLawyer] = useState<LawyerFormData | null>(null);
  const [showAddLawyer, setShowAddLawyer] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/secure-access');
    }
  }, [navigate]);

  // Handle lawyer form changes
  const handleLawyerChange = (field: keyof LawyerFormData, value: any) => {
    if (editingLawyer) {
      setEditingLawyer({
        ...editingLawyer,
        [field]: value
      });
    }
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        handleLawyerChange('image', imageData);
        setImagePreview(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Preload image preview when editing
  useEffect(() => {
    if (editingLawyer && editingLawyer.image) {
      setImagePreview(editingLawyer.image);
    } else {
      setImagePreview(null);
    }
  }, [editingLawyer]);

  // Handle array field changes
  const handleArrayChange = (field: keyof LawyerFormData, value: string, index: number) => {
    if (editingLawyer) {
      const newArray = [...editingLawyer[field] as string[]];
      newArray[index] = value;
      setEditingLawyer({
        ...editingLawyer,
        [field]: newArray
      });
    }
  };

  // Add new item to array
  const addArrayItem = (field: keyof LawyerFormData) => {
    if (editingLawyer) {
      setEditingLawyer({
        ...editingLawyer,
        [field]: [...(editingLawyer[field] as string[]), '']
      });
    }
  };

  // Remove item from array
  const removeArrayItem = (field: keyof LawyerFormData, index: number) => {
    if (editingLawyer) {
      const newArray = [...editingLawyer[field] as string[]];
      newArray.splice(index, 1);
      setEditingLawyer({
        ...editingLawyer,
        [field]: newArray
      });
    }
  };

  // Save edited lawyer
  const saveEditedLawyer = () => {
    if (editingLawyer) {
      setLawyersData(prev => prev.map(lawyer => 
        lawyer.id === editingLawyer.id ? { ...lawyer, ...editingLawyer } : lawyer
      ));
      setEditingLawyer(null);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingLawyer(null);
    setShowAddLawyer(false);
  };

  // Start editing a lawyer
  const startEditingLawyer = (lawyer: any) => {
    setEditingLawyer(lawyer);
  };

  // Delete a lawyer
  const deleteLawyer = (id: number) => {
    if (window.confirm('Are you sure you want to delete this lawyer?')) {
      setLawyersData(prev => prev.filter(lawyer => lawyer.id !== id));
    }
  };

  // Add new lawyer
  const addNewLawyer = () => {
    const newLawyer: LawyerFormData = {
      id: Math.max(...lawyersData.map(l => l.id), 0) + 1,
      name: '',
      title: '',
      image: '',
      specializations: [''],
      experience: '',
      education: [''],
      barMemberships: [''],
      certifications: [''],
      notableCases: [''],
      biography: '',
      email: '',
      phone: ''
    };
    setEditingLawyer(newLawyer);
    setShowAddLawyer(true);
  };

  // Save new lawyer
  const saveNewLawyer = () => {
    if (editingLawyer) {
      setLawyersData(prev => [...prev, editingLawyer as any]);
      setEditingLawyer(null);
      setShowAddLawyer(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-serif font-semibold text-primary">Lawyers Management</h2>
            <button
              onClick={addNewLawyer}
              className="flex items-center px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent-light transition-colors font-semibold"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Lawyer
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        {editingLawyer ? (
          // Edit/Add Lawyer Form
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {showAddLawyer ? 'Add New Lawyer' : 'Edit Lawyer'}
              </h3>
              <button
                onClick={cancelEdit}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Image Upload Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                  {imagePreview ? (
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <Camera className="w-8 h-8 mx-auto mb-1" />
                      <p className="text-xs">No image</p>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="absolute bottom-2 right-2 bg-accent text-primary rounded-full p-2 shadow-md hover:bg-accent-light transition-colors"
                >
                  <Camera className="w-4 h-4" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Click camera icon to upload</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editingLawyer?.name || ''}
                  onChange={(e) => handleLawyerChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <select
                  value={editingLawyer?.title || ''}
                  onChange={(e) => handleLawyerChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Title</option>
                  <option value="Senior Partner">Senior Partner</option>
                  <option value="Partner">Partner</option>
                  <option value="Associate">Associate</option>
                  <option value="Junior Associate">Junior Associate</option>
                  <option value="Legal Counsel">Legal Counsel</option>
                  <option value="Senior Attorney">Senior Attorney</option>
                  <option value="Attorney">Attorney</option>
                  <option value="Legal Advisor">Legal Advisor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={editingLawyer?.email || ''}
                  onChange={(e) => handleLawyerChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  value={editingLawyer?.phone || ''}
                  onChange={(e) => handleLawyerChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <input
                  type="text"
                  value={editingLawyer?.experience || ''}
                  onChange={(e) => handleLawyerChange('experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Biography</label>
                <textarea
                  value={editingLawyer?.biography || ''}
                  onChange={(e) => handleLawyerChange('biography', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Specializations (Areas of Expertise)</label>
                  <button
                    type="button"
                    onClick={() => addArrayItem('specializations')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Specialization
                  </button>
                </div>
                {editingLawyer.specializations.map((spec, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={spec}
                      onChange={(e) => handleArrayChange('specializations', e.target.value, index)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('specializations', index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Education</label>
                  <button
                    type="button"
                    onClick={() => addArrayItem('education')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Education
                  </button>
                </div>
                {editingLawyer.education.map((edu, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={edu}
                      onChange={(e) => handleArrayChange('education', e.target.value, index)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('education', index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Bar Memberships</label>
                  <button
                    type="button"
                    onClick={() => addArrayItem('barMemberships')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Membership
                  </button>
                </div>
                {editingLawyer.barMemberships.map((membership, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={membership}
                      onChange={(e) => handleArrayChange('barMemberships', e.target.value, index)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('barMemberships', index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Certifications</label>
                  <button
                    type="button"
                    onClick={() => addArrayItem('certifications')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Certification
                  </button>
                </div>
                {editingLawyer.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={cert}
                      onChange={(e) => handleArrayChange('certifications', e.target.value, index)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('certifications', index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Notable Cases</label>
                  <button
                    type="button"
                    onClick={() => addArrayItem('notableCases')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Case
                  </button>
                </div>
                {editingLawyer.notableCases.map((nc, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={nc}
                      onChange={(e) => handleArrayChange('notableCases', e.target.value, index)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('notableCases', index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={cancelEdit}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={showAddLawyer ? saveNewLawyer : saveEditedLawyer}
                className="flex items-center px-4 py-2 bg-accent text-primary rounded-md hover:bg-accent-light font-semibold"
              >
                <Save className="w-4 h-4 mr-2" />
                {showAddLawyer ? 'Add Lawyer' : 'Save Changes'}
              </button>
            </div>
          </div>
        ) : (
          // Lawyers List
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specializations</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lawyersData.map((lawyer) => (
                    <tr key={lawyer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{lawyer.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{lawyer.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {(lawyer.specializations || []).join(', ')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{lawyer.experience}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => startEditingLawyer(lawyer)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteLawyer(lawyer.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


      </main>
    </div>
  );
};

export default LawyersManagementPage;