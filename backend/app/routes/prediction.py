from fastapi import APIRouter, File, UploadFile, HTTPException
from ..utils.image_processing import ImageProcessor
from ..models.prediction import PredictionResponse
import os
import uuid
from PIL import Image

router = APIRouter()
image_processor = ImageProcessor()

@router.post("/predict", response_model=PredictionResponse)
async def predict_image(file: UploadFile = File(...)):
    """Predict cotton plant disease from uploaded image"""
    
    # Validate file type
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    try:
        # Generate unique filename
        file_id = str(uuid.uuid4())
        file_extension = file.filename.split(".")[-1]
        filename = f"{file_id}.{file_extension}"
        file_path = f"uploads/{filename}"
        
        # Ensure uploads directory exists
        os.makedirs("uploads", exist_ok=True)
        
        # Save uploaded file
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        # Make prediction
        prediction_result = image_processor.predict(file_path)
        
        return PredictionResponse(
            predicted_class=prediction_result["predicted_class"],
            confidence=prediction_result["confidence"],
            probabilities=prediction_result["probabilities"],
            image_path=file_path
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

@router.get("/classes")
async def get_classes():
    """Get available prediction classes"""
    return {
        "classes": image_processor.class_labels,
        "descriptions": {
            "Cotton_Curl_Leaf": "Cotton leaf with curl disease",
            "Cotton_Healthy_Leaf": "Healthy cotton leaf",
            "Invalid_Images": "Invalid or unclear image"
        }
    }