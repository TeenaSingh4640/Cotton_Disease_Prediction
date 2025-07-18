import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import PredictionResult from '../components/PredictionResult';

const AIAnalysis = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handlePrediction = (result) => {
    setPrediction(result);
  };

  const handleImageUpload = (imageFile) => {
    setUploadedImage(URL.createObjectURL(imageFile));
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Cotton Leaf Analysis
          </h1>
          <p className="text-xl text-gray-600">
            Upload an image of a cotton leaf to detect diseases using our AI model
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Upload Image
            </h2>
            <ImageUpload 
              onPrediction={handlePrediction}
              onImageUpload={handleImageUpload}
              onLoading={handleLoading}
            />
            
            {uploadedImage && (
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Uploaded Image:
                </h3>
                <img 
                  src={uploadedImage} 
                  alt="Uploaded cotton leaf" 
                  className="w-full h-64 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Analysis Results
            </h2>
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
                <span className="ml-3 text-lg text-gray-600">Analyzing...</span>
              </div>
            ) : prediction ? (
              <PredictionResult prediction={prediction} />
            ) : (
              <div className="text-center text-gray-500 h-64 flex items-center justify-center">
                <p>Upload an image to see analysis results</p>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            How it works:
          </h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Upload a clear image of a cotton leaf</li>
            <li>• Our AI model analyzes the leaf for disease symptoms</li>
            <li>• Get instant results with confidence scores</li>
            <li>• Detects: Healthy leaves, Curl leaf disease, and invalid images</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;
