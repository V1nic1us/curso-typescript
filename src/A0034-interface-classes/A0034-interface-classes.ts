interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLVideoElement;
  stopButton: HTMLVideoElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stopVideo(): void;
  startEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  constructor(VideoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = VideoPlayerElements.videoPlayer;
    this.playButton = VideoPlayerElements.playButton;
    this.stopButton = VideoPlayerElements.stopButton;
  }

  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLVideoElement;
  private stopButton: HTMLVideoElement;

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }
  stopVideo(): void {}
  startEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'Play';
    });
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.video') as HTMLVideoElement,
  stopButton: document.querySelector('.video') as HTMLVideoElement,
});

videoPlayer.startEvents();
