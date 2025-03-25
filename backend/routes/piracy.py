from fastapi import APIRouter
from services.blockchain_tracking import check_piracy

router = APIRouter()

@router.get("/track/{content_id}")
async def track_content(content_id: str):
    result = check_piracy(content_id)
    return {"status": result}
