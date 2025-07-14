from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from .routes.prediction import router as prediction_router

app = FastAPI(title="Cotton Plant Disease Detection API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Include routers
app.include_router(prediction_router, prefix="/api", tags=["predictions"])

@app.get("/")
async def root():
    return {"message": "Cotton Plant Disease Detection API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}