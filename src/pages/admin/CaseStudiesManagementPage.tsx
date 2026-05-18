import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { caseStudies } from '../../data/mockData';
import { CaseStudyFormData } from '../../types';

const CaseStudiesManagementPage = () => {
  const navigate = useNavigate();
  const [caseStudiesData, setCaseStudiesData] = useState(caseStudies);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudyFormData | null>(null);
  const [showAddCaseStudy, setShowAddCaseStudy] = useState(false);

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/secure-access');
    }
  }, [navigate]);

  // Handle case study form changes
  const handleCaseStudyChange = (field: keyof CaseStudyFormData, value: any) => {
    if (editingCaseStudy) {
      setEditingCaseStudy({
        ...editingCaseStudy,
        [field]: value
      });
    }
  };

  // Handle array field changes
  const handleArrayChange = (field: keyof CaseStudyFormData, value: string, index: number) => {
    if (editingCaseStudy) {
      const newArray = [...editingCaseStudy[field] as string[]];
      newArray[index] = value;
      setEditingCaseStudy({
        ...editingCaseStudy,
        [field]: newArray
      });
    }
  };

  // Add new item to array
  const addArrayItem = (field: keyof CaseStudyFormData) => {
    if (editingCaseStudy) {
      setEditingCaseStudy({
        ...editingCaseStudy,
        [field]: [...(editingCaseStudy[field] as string[]), '']
      });
    }
  };

  // Remove item from array
  const removeArrayItem = (field: keyof CaseStudyFormData, index: number) => {
    if (editingCaseStudy) {
      const newArray = [...editingCaseStudy[field] as string[]];
      newArray.splice(index, 1);
      setEditingCaseStudy({
        ...editingCaseStudy,
        [field]: newArray
      });
    }
  };

  // Save edited case study
  const saveEditedCaseStudy = () => {
    if (editingCaseStudy) {
      setCaseStudiesData(prev => prev.map(cs => 
        cs.id === editingCaseStudy.id ? { ...cs, ...editingCaseStudy } : cs
      ));
      setEditingCaseStudy(null);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingCaseStudy(null);
    setShowAddCaseStudy(false);
  };

  // Start editing a case study
  const startEditingCaseStudy = (caseStudy: any) => {
    setEditingCaseStudy(caseStudy);
  };

  // Delete a case study
  const deleteCaseStudy = (id: number) => {
    if (window.confirm('Are you sure you want to delete this case study?')) {
      setCaseStudiesData(prev => prev.filter(cs => cs.id !== id));
    }
  };

  // Add new case study
  const addNewCaseStudy = () => {
    const newCaseStudy: CaseStudyFormData = {
      id: Math.max(...caseStudiesData.map(cs => cs.id), 0) + 1,
      title: '',
      client: '',
      practiceArea: '',
      outcome: '',
      description: '',
      challenges: [''],
      results: [''],
      duration: '',
      value: '',
      featured: false
    };
    setEditingCaseStudy(newCaseStudy);
    setShowAddCaseStudy(true);
  };

  // Save new case study
  const saveNewCaseStudy = () => {
    if (editingCaseStudy) {
      setCaseStudiesData(prev => [...prev, editingCaseStudy]);
      setEditingCaseStudy(null);
      setShowAddCaseStudy(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-serif font-semibold text-primary">Case Studies Management</h2>
            <button
              onClick={addNewCaseStudy}
              className="flex items-center px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent-light transition-colors font-semibold"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Case Study
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        {editingCaseStudy ? (
          // Edit/Add Case Study Form
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {showAddCaseStudy ? 'Add New Case Study' : 'Edit Case Study'}
              </h3>
              <button
                onClick={cancelEdit}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={editingCaseStudy.title}
                  onChange={(e) => handleCaseStudyChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                <input
                  type="text"
                  value={editingCaseStudy.client}
                  onChange={(e) => handleCaseStudyChange('client', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Practice Area</label>
                <input
                  type="text"
                  value={editingCaseStudy.practiceArea}
                  onChange={(e) => handleCaseStudyChange('practiceArea', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Outcome</label>
                <input
                  type="text"
                  value={editingCaseStudy.outcome}
                  onChange={(e) => handleCaseStudyChange('outcome', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input
                  type="text"
                  value={editingCaseStudy.duration}
                  onChange={(e) => handleCaseStudyChange('duration', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                <input
                  type="text"
                  value={editingCaseStudy.value}
                  onChange={(e) => handleCaseStudyChange('value', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingCaseStudy.featured}
                    onChange={(e) => handleCaseStudyChange('featured', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured</span>
                </label>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={editingCaseStudy.description}
                  onChange={(e) => handleCaseStudyChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Challenges</label>
                  <button
                    type="button"
                    onClick={() => addArrayItem('challenges')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Challenge
                  </button>
                </div>
                {editingCaseStudy.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={challenge}
                      onChange={(e) => handleArrayChange('challenges', e.target.value, index)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('challenges', index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Results</label>
                  <button
                    type="button"
                    onClick={() => addArrayItem('results')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Result
                  </button>
                </div>
                {editingCaseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={result}
                      onChange={(e) => handleArrayChange('results', e.target.value, index)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('results', index)}
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
                onClick={showAddCaseStudy ? saveNewCaseStudy : saveEditedCaseStudy}
                className="flex items-center px-4 py-2 bg-accent text-primary rounded-md hover:bg-accent-light font-semibold"
              >
                <Save className="w-4 h-4 mr-2" />
                {showAddCaseStudy ? 'Add Case Study' : 'Save Changes'}
              </button>
            </div>
          </div>
        ) : (
          // Case Studies List
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Practice Area</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {caseStudiesData.map((caseStudy) => (
                    <tr key={caseStudy.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{caseStudy.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{caseStudy.client}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{caseStudy.practiceArea}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{caseStudy.value}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          caseStudy.featured 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {caseStudy.featured ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => startEditingCaseStudy(caseStudy)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteCaseStudy(caseStudy.id)}
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

export default CaseStudiesManagementPage;