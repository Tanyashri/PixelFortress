from fastapi import APIRouter, UploadFile, File
from services.gcs_storage import upload_to_gcs

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_data = await file.read()
    result = upload_to_gcs(file.filename, file_data)
    return {"message": result}
