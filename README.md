# VoyaSync 🎙️📜🌍

**VoyaSync** is a voice recording and transcription application that allows users to record their voice, transcribe it using AI (HuggingFace's `openai/whisper-tiny.en` model), and even translate the transcribed text into different languages. Users can also upload their audio files, such as `.mp3` or `.wav`, if they prefer not to record directly.

## Features ✨

- **Record Audio** 🎤  
  Users can record audio using their microphone or upload an audio file (`.mp3` or `.wav`).
  
- **Transcribe Audio** 📝  
  The recorded audio is transcribed using HuggingFace's AI model `openai/whisper-tiny.en`. It chunks the audio file and converts it into text.

- **Translate Transcription** 🌍  
  After transcription, users have the option to translate the text into different languages according to their preferences.

- **Copy or Download Transcription & Translation** 💾  
  Users can copy the transcribed or translated text or download it as a PDF.

## Application Flow 🔄

1. **Record** → Record your voice or upload an `.mp3`/`.wav` file.
2. **Transcribe** → The audio is sent to HuggingFace's AI model (`openai/whisper-tiny.en`) for transcription.
3. **Translate** → Optionally translate the transcribed text to any desired language.

## Installation 🚀

### Prerequisites
- **Node.js** (for frontend)
- **HuggingFace API Key** (for transcription)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/VoyaSync.git
   cd VoyaSync
Install frontend dependencies:

bash
Copy code
npm install
Set up the backend and HuggingFace API for transcription:

Install Python dependencies:

bash
Copy code
pip install -r requirements.txt
Set up HuggingFace API key in the .env file:

bash
Copy code
HUGGINGFACE_API_KEY=your_api_key
Run the frontend:

bash
Copy code
npm start
Run the backend:

bash
Copy code
python app.py
UI Screenshots 📸
Here are some screenshots of the VoyaSync UI:


API Integration 🖥️
The transcription functionality is powered by HuggingFace's openai/whisper-tiny.en model. The translation feature uses Google Translate API or another translation API.

Endpoint for Transcription
POST /transcribe
Request: Audio file (either .mp3 or .wav)
Response: Transcribed text
Endpoint for Translation
POST /translate
Request: Text, Target Language
Response: Translated text
Contributing 🤝
We welcome contributions to VoyaSync! If you'd like to improve the project, feel free to fork the repo, create a new branch, and submit a pull request.

Fork the repo
Create a feature branch (git checkout -b feature-branch)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature-branch)
Create a new pull request
License 📜
Distributed under the MIT License. See LICENSE for more information.

Contact 📬
For questions or suggestions, you can reach out to us:

Email: support@voyasync.com
GitHub: https://github.com/yourusername/VoyaSync
Thanks for using VoyaSync! 🎉

javascript
Copy code

You can copy and paste this into your `README.md` file for your project. The placeholders like `path_to_image_1` sho