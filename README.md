# VoyaSync 🎙️📜🌍

**VoyaSync** is a voice recording and transcription application that allows users to record their voice, transcribe it using AI (HuggingFace's `openai/whisper-tiny.en` model), and even translate the transcribed text into different languages. Users can also upload their audio files, such as `.mp3` or `.wav`, if they prefer not to record directly.

## Deploy Link
 https://vocasync.netlify.app/

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
   npm start
Install frontend dependencies:

    npm install
Set up the backend and HuggingFace API for transcription:
Install Python dependencies:

    pip install -r requirements.txt
Set up HuggingFace API key in the .env file:

    HUGGINGFACE_API_KEY=your_api_key
Run the frontend:

    npm start
    Run the backend:

UI Screenshots 📸
Here are some screenshots of the VoyaSync UI:

## **HomePage**

![1](https://github.com/user-attachments/assets/3dfaa68a-8e36-4037-8c94-7ed84adbd02d)

## **Recording Live voice**

![2](https://github.com/user-attachments/assets/281e22b0-d578-4dcb-a093-e637c35e8e13)

## **Uploagin the Mp3 File** 

![3](https://github.com/user-attachments/assets/2e371ec3-78a2-486f-ba9f-c24efe835b06)

## **Transcribing**

![4](https://github.com/user-attachments/assets/7a9a6de5-95f0-496f-9b49-58c343674e31)

## **After Transcribing**

![6](https://github.com/user-attachments/assets/fdbeeddc-27a5-4f2c-98d4-990924eca7f5)

## **Transcription**

![7](https://github.com/user-attachments/assets/13b3c1ee-36bb-4f8a-8ae6-146a8c58d08d)







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

Email: vaghanirutvik777@gmail.com
GitHub: https://github.com/rutvik09/VoyaSync
Thanks for using VoyaSync! 🎉

