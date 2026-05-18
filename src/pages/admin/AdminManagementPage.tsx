import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminManagementPage = () => {
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/secure-access');
    }
  }, [navigate]);

  // Redirect to lawyers management by default
  useEffect(() => {
    navigate('/admin/management/lawyers');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg text-gray-600">Redirecting to content management...</div>
      </div>
    </div>
  );
};

export default AdminManagementPage;