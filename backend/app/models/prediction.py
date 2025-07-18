from pydantic import BaseModel
from typing import Optional

class PredictionResponse(BaseModel):
    predicted_class: str
    confidence: float
    probabilities: dict
    image_path: str
    
class PredictionRequest(BaseModel):
    image: str  # base64 encoded image