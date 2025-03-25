from fastapi import APIRouter, UploadFile, File
from services.ai_deepfake import detect_deepfake

router = APIRouter()

@router.post("/analyze")
async def analyze_video(file: UploadFile = File(...)):
    result = detect_deepfake(await file.read())
    return {"result": result}
