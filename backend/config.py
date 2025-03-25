import os
from dotenv import load_dotenv
from google.cloud import storage

load_dotenv()

GOOGLE_CLOUD_PROJECT = os.getenv("GOOGLE_CLOUD_PROJECT")
GOOGLE_STORAGE_BUCKET = os.getenv("GOOGLE_STORAGE_BUCKET")
BLOCKCHAIN_RPC_URL = os.getenv("BLOCKCHAIN_RPC_URL")

storage_client = storage.Client()
bucket = storage_client.bucket(GOOGLE_STORAGE_BUCKET)