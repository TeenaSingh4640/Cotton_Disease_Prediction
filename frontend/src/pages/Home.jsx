import React, { useState } from 'react';
import ImageUpload from '../components/Imageupload';
import PredictionResult from '../components/PredictionResult';
import { predictImage } from '../utils/api';
import { Leaf, Upload, BarChart3 } from 'lucide-react';

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleImageSelect = (file) => {
        setSelectedImage(file);
        setPrediction(null);
        setError(null);
    };

    const handlePredict = async () => {
        if (!selectedImage) return;

        setLoading(true);
        setError(null);

        try {
            const result = await predictImage(selectedImage);
            setPrediction(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Custom Header Section */}
            <div className="relative flex items-center justify-center bg-green-900 bg-opacity-80 h-64 md:h-80 rounded-b-3xl shadow-lg overflow-hidden mx-2 mt-2">
                {/* Left: Image */}
                <div className="flex-shrink-0 ml-4 md:ml-12 z-10">
                    <img
                        src="/header.jpg"
                        alt="Cotton Globe"
                        className="w-48 h-40 md:w-80 md:h-56 object-cover rounded-lg shadow-xl border-4 border-white border-opacity-30"
                    />
                </div>
                {/* Right: Text in rounded rectangle */}
                <div className="flex-1 flex items-center justify-center z-10">
                    <div className="bg-green-800 bg-opacity-80 rounded-2xl px-8 py-8 md:px-20 md:py-12 shadow-2xl backdrop-blur-md">
                        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                            Cotton AI Disease Prediction
                        </h1>
                    </div>
                </div>
                {/* Blurred background effect */}
                <div className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-40" style={{ backgroundImage: 'url(/header.jpg)' }}></div>
            </div>
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Upload Cotton Leaf Image for Analysis
                    </h2>

                    <ImageUpload
                        onImageSelect={handleImageSelect}
                        selectedImage={selectedImage}
                    />

                    {selectedImage && (
                        <div className="mt-8 text-center">
                            <button
                                onClick={handlePredict}
                                disabled={loading}
                                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center mx-auto"
                            >
                                <BarChart3 className="mr-2 h-5 w-5" />
                                {loading ? 'Analyzing...' : 'Analyze Image'}
                            </button>
                        </div>
                    )}

                    {error && (
                        <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            <p className="font-bold">Error:</p>
                            <p>{error}</p>
                        </div>
                    )}

                    <PredictionResult result={prediction} loading={loading} />
                </div>

                {/* Features Section */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Easy Upload</h3>
                        <p className="text-gray-600">
                            Simply drag and drop or click to upload your cotton leaf images
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                        <p className="text-gray-600">
                            Advanced deep learning model analyzes your images with high accuracy
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                        <p className="text-gray-600">
                            Get immediate detection results with confidence scores
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;