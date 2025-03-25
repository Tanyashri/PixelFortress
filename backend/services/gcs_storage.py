from google.cloud import storage
from config import GOOGLE_STORAGE_BUCKET

def upload_to_gcs(file_name, file_data):
    bucket = storage.Client().bucket(GOOGLE_STORAGE_BUCKET)
    blob = bucket.blob(file_name)
    blob.upload_from_string(file_data, content_type="video/mp4")
    return f"File uploaded to: gs://{GOOGLE_STORAGE_BUCKET}/{file_name}"
