const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const fullScreen = document.getElementById('full')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')
const timestampDown = document.getElementById('timestampDown')


//Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)