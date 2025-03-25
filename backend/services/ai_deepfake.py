import cv2
import numpy as np
import torch
from torchvision import transforms
from io import BytesIO

# Load deepfake detection AI model
model = torch.jit.load("models/deepfake_model.pt")
model.eval()

def detect_deepfake(video_bytes):
    # Process video frame-by-frame
    frames = extract_frames(video_bytes)
    predictions = [model(frame) for frame in frames]
    
    avg_score = sum(predictions) / len(predictions)
    return "Deepfake Detected" if avg_score > 0.5 else "Authentic Video"

def extract_frames(video_bytes):
    video = BytesIO(video_bytes)
    cap = cv2.VideoCapture(video)
    frames = []
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        transform = transforms.ToTensor()
        frames.append(transform(frame))
    
    cap.release()
    return frames
