import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const MAUIOnlineStatusBadge = ({ refreshInterval = 60000 }) => {
  const [status, setStatus] = useState('unknown');
  const [loading, setLoading] = useState(true);
  const url = 'http://localhost:3000/status'; // Updated URL

  const checkStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      setStatus('down');
    }
    setLoading(false);
  };

  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  const getBadgeColor = () => {
    if (loading) return 'bg-gray-500';
    return status === 'up' ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
      <span className={`mr-1 rounded-full ${getBadgeColor()} w-2 h-2`}></span>
      <span className="mr-1">MA UI Online</span>
      <span className="font-bold">
        {loading ? 'checking' : status.toUpperCase()}
      </span>
      {status === 'up' && !loading && (
        <CheckCircle className="ml-1 w-4 h-4 text-green-500" />
      )}
      {status === 'down' && !loading && (
        <AlertCircle className="ml-1 w-4 h-4 text-red-500" />
      )}
    </div>
  );
};

export default MAUIOnlineStatusBadge;
