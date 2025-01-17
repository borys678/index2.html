document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = [
        { src: 'img/koloseum.jpg', alt: 'Koloseum', caption: 'Koloseum' },
        { src: 'img/machupicchu.jpg', alt: 'Machu Picchu', caption: 'Machu Picchu' },
        { src: 'img/Petra.jpg', alt: 'Petra', caption: 'Petra' },
        { src: 'img/wielkimur.jpeg', alt: 'Piramida w Meksyku', caption: 'Piramida w Meksyku' },
        { src: 'img/Piramidywgazie.jpg', alt: 'Piramidy w Gizie', caption: 'Piramidy w Gizie' },
        { src: 'img/ponikchrystusa.jpg', alt: 'Pomnik Chrystusa', caption: 'Pomnik Chrystusa' }
    ];

    const gallery = document.getElementById('gallery');

    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;

        const caption = document.createElement('div');
        caption.classList.add('caption');
        caption.textContent = item.caption;

        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        gallery.appendChild(galleryItem);
    });
});