import React from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const PredictionResult = ({ result, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        <span className="ml-4 text-gray-600">Analyzing image...</span>
      </div>
    );
  }

  if (!result) return null;

  const getIcon = (className) => {
    switch (className) {
      case 'Cotton_Healthy_Leaf':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'Cotton_Curl_Leaf':
        return <AlertCircle className="h-8 w-8 text-yellow-500" />;
      case 'Invalid_Images':
        return <XCircle className="h-8 w-8 text-red-500" />;
      default:
        return <AlertCircle className="h-8 w-8 text-gray-500" />;
    }
  };

  const getStatusColor = (className) => {
    switch (className) {
      case 'Cotton_Healthy_Leaf':
        return 'bg-green-100 border-green-500';
      case 'Cotton_Curl_Leaf':
        return 'bg-yellow-100 border-yellow-500';
      case 'Invalid_Images':
        return 'bg-red-100 border-red-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  const formatClassName = (className) => {
    return className.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className={`border-2 rounded-lg p-6 ${getStatusColor(result.predicted_class)}`}>
        <div className="flex items-center mb-4">
          {getIcon(result.predicted_class)}
          <h3 className="ml-3 text-xl font-semibold text-gray-900">
            {formatClassName(result.predicted_class)}
          </h3>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            Confidence: <span className="font-medium">{(result.confidence * 100).toFixed(1)}%</span>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${result.confidence * 100}%` }}
            ></div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">All Predictions:</h4>
          <div className="space-y-2">
            {Object.entries(result.probabilities).map(([className, probability]) => (
              <div key={className} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">{formatClassName(className)}</span>
                <span className="font-medium">{(probability * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;