import tensorflow as tf
import numpy as np
from io import BytesIO
from PIL import Image

# Load pre-trained AI model for watermark detection
model = tf.keras.models.load_model("models/watermark_model.h5")

def detect_watermark(image_bytes):
    image = Image.open(BytesIO(image_bytes)).convert("RGB")
    image = image.resize((224, 224))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    prediction = model.predict(image_array)
    return "Watermark Detected" if prediction[0] > 0.5 else "No Watermark Found"
