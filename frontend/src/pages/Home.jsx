import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import PredictionResult from '../components/PredictionResult';
import { predictImage } from '../utils/api';
import { Leaf, Upload, BarChart3 } from 'lucide-react';
import headerBg from '../assets/header-bg.png'; // Fixed extension from .jpg to .png
import { FileText } from 'lucide-react';

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
            {/* Hero Section */}
            <div
                className="text-white"
                style={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        </p>
                    </div>
                </div>
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
                        <a
                            href="/research-paper.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <FileText className="h-12 w-12 text-red-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Research Paper</h3>
                            <p className="text-gray-600">
                                Click to view or download the full research paper on Cotton Disease Prediction
                            </p>
                        </a>
                    </div>


                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <a
                            href="/analysis"
                            className="flex flex-col items-center text-decoration-none"
                        >
                            <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                            <p className="text-gray-600">View detailed model performance metrics and analysis</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;