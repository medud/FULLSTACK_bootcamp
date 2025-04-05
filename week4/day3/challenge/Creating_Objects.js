class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
  }
  
  const video1 = new Video("JavaScript Basics", "Med", 300);
  video1.watch(); // Output: Med watched all 300 seconds of "JavaScript Basics"!
  
  const video2 = new Video("CSS Grid Tutorial", "Moaad", 420);
  video2.watch(); // Output: Moaad watched all 420 seconds of "CSS Grid Tutorial"!
  
  const videoData = [
    { title: "Learn HTML", uploader: "Charlie", time: 180 },
    { title: "React for Beginners", uploader: "Dana", time: 600 },
    { title: "Vue.js Crash Course", uploader: "Eli", time: 550 },
    { title: "Python in 10 Minutes", uploader: "Fay", time: 700 },
    { title: "Docker Demystified", uploader: "Gina", time: 480 },
  ];
  
  const videoInstances = []; // To store all created Video instances
  
  videoData.forEach(video => {
    const instance = new Video(video.title, video.uploader, video.time);
    videoInstances.push(instance);
    instance.watch();
  });
  