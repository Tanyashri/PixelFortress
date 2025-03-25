from fastapi import FastAPI
from routes import watermark, deepfake, piracy

app = FastAPI(title="Disney AI-Powered Piracy Protection")

app.include_router(watermark.router, prefix="/watermark", tags=["Watermark Detection"])
app.include_router(deepfake.router, prefix="/deepfake", tags=["Deepfake Detection"])
app.include_router(piracy.router, prefix="/piracy", tags=["Piracy Tracking"])

@app.get("/")
def home():
    return {"message": "Disney Piracy Protection API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
