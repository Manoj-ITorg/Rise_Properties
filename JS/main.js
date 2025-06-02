function openLightbox(src, caption, isVideo) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const lightboxVideoSource = document.getElementById('lightbox-video-source');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (isVideo) {
    lightboxImg.style.display = 'none';
    lightboxVideo.style.display = 'block';
    lightboxVideoSource.src = src;
    lightboxVideo.load();
  } else {
    lightboxImg.style.display = 'block';
    lightboxVideo.style.display = 'none';
    lightboxImg.src = src;
  }
  lightboxCaption.textContent = caption;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxVideo = document.getElementById('lightbox-video');
  lightboxVideo.pause();
  lightbox.style.display = 'none';
}

function openShareModal() {
  document.getElementById('shareModal').style.display = 'block';
}

function closeShareModal() {
  document.getElementById('shareModal').style.display = 'none';
}

function shareViaWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://api.whatsapp.com/send?text=Check%20out%20this%20company:%20${url}`);
}

function shareViaTwitter() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=Check%20out%20this%20company!`);
}

document.querySelectorAll('.company-media').forEach(item => {
  item.addEventListener('click', () => {
    const isVideo = item.tagName.toLowerCase() === 'video';
    const src = isVideo ? item.querySelector('source').src : item.src;
    const caption = item.nextElementSibling.textContent;
    openLightbox(src, caption, isVideo);
  });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});