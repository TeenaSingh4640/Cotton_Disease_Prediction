# Cotton Disease Prediction - AI-Powered Cotton Leaf Analysis

A full-stack web application that uses deep learning to detect diseases in cotton leaves. Built with React frontend and FastAPI backend, featuring a MobileNetV2 model for accurate disease classification.

## 🌟 Features

- **AI-Powered Disease Detection**: Uses MobileNetV2 deep learning model
- **Real-time Analysis**: Upload images and get instant predictions
- **Comprehensive Analytics**: Detailed model performance metrics and visualizations
- **User-Friendly Interface**: Modern, responsive web design
- **High Accuracy**: 94.2% accuracy in disease classification

## 🏗️ Tech Stack

### Frontend
- **React** - User interface
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Axios** - HTTP client

### Backend
- **FastAPI** - Web framework
- **TensorFlow/Keras** - Deep learning
- **Python** - Programming language
- **Uvicorn** - ASGI server
- **PIL (Pillow)** - Image processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TeenaSingh4640/Cotton_Disease_Prediction.git
   cd Cotton_Disease_Prediction
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv .venv
   .venv\Scripts\activate  # On Windows
   # source .venv/bin/activate  # On macOS/Linux
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   .venv\Scripts\activate
   python run.py
   ```
   Backend will run on `http://localhost:8000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📊 Model Performance

- **Accuracy**: 94.2%
- **Precision**: 92.8%
- **Recall**: 95.1%
- **F1-Score**: 93.9%
- **ROC AUC**: 0.96

## 🎯 Disease Classes

The model can classify cotton leaves into three categories:
1. **Cotton Curl Leaf** - Disease detected
2. **Cotton Healthy Leaf** - Healthy leaf
3. **Invalid Images** - Non-cotton or unclear images

## 📱 Usage

1. **Upload Image**: Drag and drop or click to upload a cotton leaf image
2. **Analyze**: Click the "Analyze Image" button
3. **View Results**: Get instant predictions with confidence scores
4. **Explore Analytics**: Visit the AI Analysis page for detailed model metrics

## 🔧 API Endpoints

- `POST /api/predict` - Upload image and get disease prediction
- `GET /docs` - Interactive API documentation (Swagger UI)

## 📁 Project Structure

```
Cotton_Disease_Prediction/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── ml_models/
│   ├── uploads/
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── assets/
│   ├── public/
│   └── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Teena Singh** - [TeenaSingh4640](https://github.com/TeenaSingh4640)

## 🙏 Acknowledgments

- MobileNetV2 architecture for efficient deep learning
- FastAPI for the robust backend framework
- React community for excellent frontend tools
- Tailwind CSS for beautiful styling

## 📧 Contact

For any questions or suggestions, please reach out through GitHub issues or contact the repository owner.

---

**⭐ Star this repository if you find it helpful!**
