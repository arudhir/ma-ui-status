import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const StatusBadge = ({ name, status, loading }) => (
  <div className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 mr-2">
    <span className={`mr-1 rounded-full ${loading ? 'bg-gray-500' : status === 'up' ? 'bg-green-500' : 'bg-red-500'} w-2 h-2`}></span>
    <span className="mr-1">{name}</span>
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

const StatusChecker = ({ refreshInterval = 60000 }) => {
  const [statuses, setStatuses] = useState({ maUiOnline: 'unknown', google: 'unknown' });
  const [loading, setLoading] = useState(true);
  const url = 'https://ma-ui-status-backend.herokuapp.com/status'; // Replace with your actual backend URL

  const checkStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStatuses(data);
    } catch (error) {
      console.error('Error checking status:', error);
      setStatuses({ maUiOnline: 'down', google: 'down' });
    }
    setLoading(false);
  };

  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return (
    <div>
      <StatusBadge name="MA UI Online" status={statuses.maUiOnline} loading={loading} />
      <StatusBadge name="Google" status={statuses.google} loading={loading} />
    </div>
  );
};

export default StatusChecker;
