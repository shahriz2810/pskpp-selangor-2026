/* =========================================================
   PSKPP SELANGOR 2026
   GALERI / MUAT NAIK GAMBAR
   GITHUB FRONT END
   ========================================================= */

const PSKPP_GALLERY = {

  albumUrl:
    'https://photos.app.goo.gl/UWmvtf7uePwd2X7SA'

};


/* =========================================================
   BUKA GALERI GOOGLE PHOTOS
   ========================================================= */

function openPSKPPGallery() {

  const url =
    PSKPP_GALLERY.albumUrl;

  if (!url) {

    alert(
      'Pautan galeri belum ditetapkan.'
    );

    return;
  }

  window.open(
    url,
    '_blank',
    'noopener,noreferrer'
  );

}


/* =========================================================
   BUTANG MUAT NAIK GAMBAR
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  function() {

    const button =
      document.getElementById(
        'uploadPhotoBtn'
      );

    if (!button) {

      console.warn(
        'GALLERY: #uploadPhotoBtn tidak dijumpai.'
      );

      return;
    }

    button.addEventListener(
      'click',
      function() {

        openPSKPPGallery();

      }
    );

  }
);