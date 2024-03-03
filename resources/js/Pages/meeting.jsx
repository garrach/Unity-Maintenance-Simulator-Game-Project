import React, { useState, useEffect } from 'react';

const Meeting = ({ children }) => {
  const [peers, setPeers] = useState([]);
  const [newPeer, setNewPeer] = useState('');
  const [localStream, setLocalStream] = useState(null);

  document.addEventListener('DOMContentLoaded', () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Do something with the media stream, like displaying it in a video element
        const videoElement = document.getElementById('videoPreview');
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing camera/microphone:', error);
        // Handle denial or show a user-friendly message
      });
  });
  

  useEffect(() => {
    const askPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setLocalStream(stream);

        // Show a preview of the local stream (optional)
        const videoPreview = document.getElementById('localVideoPreview');
        if (videoPreview) {
          videoPreview.srcObject = stream;
        }
      } catch (error) {
        console.error('User denied camera/microphone access:', error);
        // Handle denial or show a user-friendly message
      }
    };

    askPermission();

    // Clean up function to stop local stream when component unmounts
    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const addPeer = () => {
    if (newPeer.trim() !== '') {
      setPeers([...peers, newPeer]);
      setNewPeer('');
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
    }
  };

  const toggleAudio = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
    }
  };

  return (
    <div className='container mx-auto bg-gray-900 h-screen flex flex-col justify-center items-center'>
      <div className='w-full max-w-md'>
        <div className='bg-red-500 p-4 text-white mb-4'>
          <h1 className='text-2xl font-bold'>Meeting</h1>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {peers.map((peer, index) => (
            <div
              key={index}
              className='bg-blue-500 p-2 text-white text-center'
            >
              {peer}
            </div>
          ))}
        </div>

        <div className='mt-4'>
          <label className='text-white'>Add Peer:</label>
          <div className='flex'>
            <input
              type='text'
              value={newPeer}
              onChange={(e) => setNewPeer(e.target.value)}
              className='bg-gray-800 text-white p-2 mr-2 flex-grow'
            />
            <button
              onClick={addPeer}
              className='bg-green-500 text-white p-2'
            >
              Add
            </button>
          </div>
        </div>

        <div className='mt-4'>
          <button
            onClick={toggleVideo}
            className='bg-blue-500 text-white p-2 mr-2'
          >
            Toggle Video
          </button>
          <button
            onClick={toggleAudio}
            className='bg-blue-500 text-white p-2'
          >
            Toggle Audio
          </button>
        </div>

        {/* Video preview for local stream (optional) */}
      
          <video
            id='localVideoPreview'
            className='mt-4 w-full h-auto border border-gray-600'
            autoPlay
            playsInline
            muted
          ></video>
        
      </div>
    </div>
  );
};

export default Meeting;
