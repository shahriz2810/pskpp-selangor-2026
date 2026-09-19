

/*******************************************************
 * PSKPP SELANGOR 2026
 * FRONT-END JAVASCRIPT
 *******************************************************/

let DATA = {
  dashboard: {},
  news: [],
  schedule: [],
  sports: [],
  points: [],
  medals: [],
  venues: [],
  accommodation: [],
  places: [],
  rules: [],
  event: [],
  settings: []
};

/* FILTER LOKASI */
let accommodationLocationFilter = 'SEMUA';
let placesLocationFilter = 'SEMUA';

/* =========================================================
   PSKPP SELANGOR 2026
   PUBLIC API - GITHUB PAGES
========================================================= */

const PSKPP_API_URL =
  'https://script.google.com/macros/s/AKfycbxNSoQcdVKCWdaXg_I6EizyvYSAWgIQa1ghef2zhoiR7h5MjGYgZsqeTyDieOUMLBMAZw/exec';

/* ====================================================
   GAMBAR PERMAINAN / SUKAN
==================================================== */

const SPORT_IMAGE_IDS = {

  'BADMINTON':
    '1x45RphkZ2eiQeu5l5HXE8l_qV3D2rA9J',

  'BOLA JARING':
    '1Y2kn88QcRUqc7sw_RAtSGmzRBQz68Vi1',

  'BOLA KERANJANG':
    '1gYsWtrGkmaYNI4rxco0bjFu4uFOvX21H',

  'BOLA SEPAK':
    '1eKiQXUS5vZKjCQJ9Y1wxdlLRl5h0-hA0',

  'BOLA TAMPAR LELAKI':
    '1w0l4dtEC-06-6RDLaA4W2AN3gJjy-Vm8',

  'BOLA TAMPAR WANITA':
    '15vwRbm2td0sCe5R46LurL8V-E7BLCWsn',

  'BOLING':
    '1TcNczVhntva0l90_-p6PMKjl3JB1vRko',

  'GOLF':
    '1ge3wekUwpfgIvD8Tdxp-ipIRCSybRvFl',

  'KEBUDAYAAN':
    '1n67dje7JczbBI6o-wEeJbrw6u1qLmuUt',

  'MASTER ANGLER CHALLENGE':
    '1NKZOzdoy2S_sPoCp_s-vi9bYH7Q143rw',

  'MEMANCING':
    '1NKZOzdoy2S_sPoCp_s-vi9bYH7Q143rw',

  'ORIENTEERING':
    '1mlnQsZ1FMvksq0BqQTxBGFmkmlsNnJbK',

  'PETANQUE':
    '1BVkyQUOk8ZGp0R1fzWfIlyypcN3yOlIP',

  'PÉTANQUE':
    '1BVkyQUOk8ZGp0R1fzWfIlyypcN3yOlIP',

  'SEPAK TAKRAW':
    '1xNjSyYTDYSV6OBuYb48nrbiRXkjZUD6h',

  'TENIS':
    '11qD9b8D5hEh3zBHsXOTV6IDg1yt84mhY'

};


/* ====================================================
   PILIH GAMBAR BERDASARKAN SUKAN
==================================================== */

function getSportImage(item) {

  const sukan =
    String(
      item.Sukan || ''
    )
    .trim()
    .toUpperCase();


  const kategori =
    String(
      item.Kategori || ''
    )
    .trim()
    .toUpperCase();


  let fileId = '';


  /* BOLA TAMPAR */

  if (
    sukan.includes('BOLA TAMPAR')
  ) {

    if (
      kategori.includes('WANITA') ||
      kategori.includes('PEREMPUAN') ||
      sukan.includes('WANITA') ||
      sukan.includes('PEREMPUAN')
    ) {

      fileId =
        SPORT_IMAGE_IDS[
          'BOLA TAMPAR WANITA'
        ];

    } else {

      fileId =
        SPORT_IMAGE_IDS[
          'BOLA TAMPAR LELAKI'
        ];

    }

  }


  /* BOLA SEPAK */

  else if (
    sukan.includes('BOLA SEPAK')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'BOLA SEPAK'
      ];

  }


  /* BOLA JARING */

  else if (
    sukan.includes('BOLA JARING')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'BOLA JARING'
      ];

  }


  /* BOLA KERANJANG */

  else if (
    sukan.includes('BOLA KERANJANG')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'BOLA KERANJANG'
      ];

  }


  /* BADMINTON */

  else if (
    sukan.includes('BADMINTON')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'BADMINTON'
      ];

  }


  /* BOLING */

  else if (
    sukan.includes('BOLING')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'BOLING'
      ];

  }


  /* GOLF */

  else if (
    sukan.includes('GOLF')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'GOLF'
      ];

  }


  /* KEBUDAYAAN */

  else if (
    sukan.includes('KEBUDAYAAN')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'KEBUDAYAAN'
      ];

  }


  /* MEMANCING */

  else if (
    sukan.includes('ANGLER') ||
    sukan.includes('MEMANCING')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'MEMANCING'
      ];

  }


  /* ORIENTEERING / ORIENTERING */

else if (
  sukan.includes('ORIENTEERING') ||
  sukan.includes('ORIENTERING')
) {

  fileId =
    SPORT_IMAGE_IDS[
      'ORIENTEERING'
    ];

}


  /* PETANQUE */

  else if (
    sukan.includes('PETANQUE') ||
    sukan.includes('PÉTANQUE')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'PETANQUE'
      ];

  }


  /* SEPAK TAKRAW */

  else if (
    sukan.includes('SEPAK TAKRAW')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'SEPAK TAKRAW'
      ];

  }


  /* TENIS */

  else if (
    sukan.includes('TENIS')
  ) {

    fileId =
      SPORT_IMAGE_IDS[
        'TENIS'
      ];

  }


  if (!fileId) {
    return '';
  }


  return (
    'https://drive.google.com/thumbnail?id=' +
    encodeURIComponent(fileId) +
    '&sz=w1000'
  );

}



/* ====================================================
   PRELOAD LOGO & MASKOT UTAMA
   Supaya terus muncul ketika dashboard dibuka
==================================================== */

const CRITICAL_ASSETS = {
  logoId: '1MmjN7r1KJEkAQs1uYxjWOKMLKiEMuGg4',
  mascotId: '1L2yv8dnALOXBXfp-MICV0wAuUsS2oMAT'
};


function driveThumbnail(id, size) {

  if (!id) {
    return '';
  }

  return (
    'https://drive.google.com/thumbnail?id=' +
    encodeURIComponent(id) +
    '&sz=' +
    (size || 'w1000')
  );

}


function preloadCriticalAssets() {

  const logoUrl =
    driveThumbnail(
      CRITICAL_ASSETS.logoId,
      'w600'
    );

  const mascotUrl =
    driveThumbnail(
      CRITICAL_ASSETS.mascotId,
      'w1200'
    );


  const logo =
    document.getElementById('logo');

  const mascot =
    document.getElementById('mascot');


  if (logo && !logo.getAttribute('src')) {
    logo.src = logoUrl;
    logo.loading = 'eager';
    logo.fetchPriority = 'high';
  }


  if (mascot && !mascot.getAttribute('src')) {
    mascot.src = mascotUrl;
    mascot.loading = 'eager';
    mascot.fetchPriority = 'high';
  }


  [logoUrl, mascotUrl]
    .forEach(function (url) {

      if (!url) return;

      const img =
        new Image();

      img.src = url;

    });

}


/* ====================================================
   START PORTAL
==================================================== */

document.addEventListener('DOMContentLoaded', function () {

  preloadCriticalAssets();

  updateMalaysiaClock();

  setInterval(updateMalaysiaClock, 1000);

  initializeNavigation();

  // Butang pantas: Semak Jadual Harian & Semak Keputusan
  initializeHeroActionButtons();

  loadPortalData();

  // Auto refresh setiap 30 saat
  setInterval(loadPortalData, 30000);

});


/* ====================================================
   LOAD SEMUA DATA
==================================================== */

async function loadPortalData() {

  showSyncStatus('MENYELARAS...');

  try {

    const url =
      PSKPP_API_URL +
      '?api=portal&_=' +
      Date.now();

    const response =
      await fetch(url, {
        method: 'GET',
        cache: 'no-store'
      });

    if (!response.ok) {
      throw new Error(
        'HTTP ' + response.status
      );
    }

    const result =
      await response.json();

    if (
      !result ||
      result.success !== true ||
      !result.data
    ) {
      throw new Error(
        'Format data API tidak sah.'
      );
    }

    DATA = result.data;

    renderPortal();

    showSyncStatus(
      'AUTO-SYNC 30S'
    );

    updateLastSync();

  } catch (error) {

    console.error(
      'PSKPP API ERROR:',
      error
    );

    showSyncStatus(
      'RALAT DATA'
    );

    const ticker =
      document.getElementById(
        'tickerText'
      );

    if (ticker) {
      ticker.textContent =
        'Data portal tidak dapat dimuatkan. Sila cuba muat semula.';
    }

  }

}


/* ====================================================
   RENDER PORTAL
==================================================== */

function renderPortal() {

  setPortalAssets();

  renderNews();

  renderPoints();

  renderMedals();

  renderSchedule();

  // Kemaskini pilihan filter berdasarkan data SCHEDULE terkini.
  populateScheduleFilters();

  renderSports();

  renderVenues();

  renderAccommodationLocationFilters();
  renderAccommodation();

  renderPlacesLocationFilters();
  renderPlaces();

  // RULES dikendalikan oleh RulesJavaScript.html
  // Jangan panggil renderRules() di sini.

  renderCompetitionStatus();

  renderClosing();

  renderFooterSettings();

  startEventCountdown();

  startClosingCountdown();

}

/* ====================================================
   LOGO DAN MASCOT
==================================================== */

function setPortalAssets() {

  const dashboard = DATA.dashboard || {};

  const logo = document.getElementById('logo');
  const mascot = document.getElementById('mascot');

  if (logo && dashboard.logoId) {

    logo.src =
      'https://drive.google.com/thumbnail?id=' +
      dashboard.logoId +
      '&sz=w600';

  }

  if (mascot && dashboard.mascotId) {

    mascot.src =
      'https://drive.google.com/thumbnail?id=' +
      dashboard.mascotId +
      '&sz=w1200';

  }

}


/* ====================================================
   CLOCK MALAYSIA
==================================================== */

function updateMalaysiaClock() {

  const now = new Date();

  const date = new Intl.DateTimeFormat(
    'ms-MY',
    {
      timeZone: 'Asia/Kuala_Lumpur',
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }
  ).format(now);


  const time = new Intl.DateTimeFormat(
    'en-GB',
    {
      timeZone: 'Asia/Kuala_Lumpur',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }
  ).format(now);


  const dateElement =
    document.getElementById('clockDate');

  const timeElement =
    document.getElementById('clockTime');


  if (dateElement) {
    dateElement.textContent =
      date.toUpperCase();
  }

  if (timeElement) {
    timeElement.textContent =
      time;
  }

}


/* ====================================================
   COUNTDOWN EVENT
==================================================== */

let countdownTimer;


function startEventCountdown() {

  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  updateEventCountdown();

  countdownTimer =
    setInterval(
      updateEventCountdown,
      1000
    );

}


function updateEventCountdown() {

  const dashboard =
    DATA.dashboard || {};

  if (!dashboard.eventStart) {
    return;
  }

  const start =
    new Date(
      dashboard.eventStart
    ).getTime();

  const end =
    dashboard.eventEnd
      ? new Date(
          dashboard.eventEnd
        ).getTime()
      : null;

  const now =
    Date.now();


  /*
   * SEBELUM KEJOHANAN
   */

  if (now < start) {

    setEventStatus(
      'COUNTDOWN KEJOHANAN PSKPP 2026',
      'upcoming'
    );

    renderCountdown(
      start - now
    );

    return;
  }


  /*
   * KEJOHANAN SEDANG BERLANGSUNG
   */

  if (
    !end ||
    now <= end
  ) {

    setEventStatus(
      'KEJOHANAN SEDANG BERLANGSUNG',
      'live'
    );

    setCountdownZero();

    return;
  }


  /*
   * KEJOHANAN SELESAI
   */

  setEventStatus(
    'KEJOHANAN TELAH SELESAI',
    'completed'
  );

  setCountdownZero();

}


function renderCountdown(distance) {

  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (
        distance %
        (1000 * 60 * 60 * 24)
      ) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (
        distance %
        (1000 * 60 * 60)
      ) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (
        distance %
        (1000 * 60)
      ) /
      1000
    );


  setText(
    'days',
    pad(days)
  );

  setText(
    'hours',
    pad(hours)
  );

  setText(
    'minutes',
    pad(minutes)
  );

  setText(
    'seconds',
    pad(seconds)
  );

}


function setCountdownZero() {

  ['days',
   'hours',
   'minutes',
   'seconds']
    .forEach(function (id) {

      setText(id, '00');

    });

}


function setEventStatus(
  text,
  status
) {

  const element =
    document.getElementById(
      'eventStatus'
    );

  if (!element) {
    return;
  }

  element.textContent = text;

  element.className =
    'event-status ' + status;

}


/* ====================================================
   NEWS TICKER
==================================================== */

function renderNews() {

  const container =
    document.getElementById(
      'tickerText'
    );

  if (!container) {
    return;
  }

  const news =
    DATA.news || [];


  if (!news.length) {

    container.textContent =
      'Maklumat terkini PSKPP Selangor 2026 akan dipaparkan di sini.';

    return;
  }


  const activeNews =
    news.filter(function (item) {

      const status =
        String(
          item.Aktif || 'YA'
        )
        .trim()
        .toUpperCase();

      return (
        status === 'YA' ||
        status === 'YES' ||
        status === '1' ||
        status === 'TRUE'
      );

    });


  const text =
    activeNews
      .map(function (item) {

        const tajuk = String(
          item.Tajuk || item.Title || ''
        ).trim();

        const mesej = String(
          item.Mesej || item.Message || ''
        ).trim();

        // Jika ada Tajuk + Mesej, paparkan kedua-duanya.
        // Jika hanya satu diisi, paparkan nilai tersebut sahaja.
        if (tajuk && mesej) {
          return tajuk + ' — ' + mesej;
        }

        return mesej || tajuk;

      })
      .filter(Boolean)
      .join(
        '     •     '
      );


  container.textContent =
    text ||
    'Maklumat kejohanan sedang dikemaskini.';

}


/* ====================================================
   POINT / MARKAH TABLE
==================================================== */

function renderPoints() {

  const container =
    document.getElementById(
      'pointList'
    );

  if (!container) {
    return;
  }


  const points =
    [...(DATA.points || [])];


  if (!points.length) {

    container.innerHTML = `
      <div class="empty-state">
        Data markah pertandingan belum tersedia.
      </div>
    `;

    return;
  }


  /*
   * Susun jumlah point tertinggi dahulu.
   * Code.gs juga sudah menyusun, tetapi
   * kita buat semakan sekali lagi di browser.
   */
  points.sort(function (a, b) {

    const totalB =
      numberValue(b.Jumlah);

    const totalA =
      numberValue(a.Jumlah);

    if (totalB !== totalA) {
      return totalB - totalA;
    }

    return String(
      a.Daerah || ''
    ).localeCompare(
      String(b.Daerah || ''),
      'ms'
    );

  });


  container.innerHTML =
    points
      .map(function (item, index) {

        const rank =
          index + 1;

        let rankDisplay =
          rank;

        if (rank === 1) {
          rankDisplay = '🥇';
        }

        if (rank === 2) {
          rankDisplay = '🥈';
        }

        if (rank === 3) {
          rankDisplay = '🥉';
        }


        const breakdown =
          Array.isArray(
            item.Breakdown
          )
            ? item.Breakdown
            : [];


        const breakdownHtml =
          breakdown.length

            ? `
              <div class="point-breakdown">

                ${
                  breakdown
                    .map(function (sport) {

                      return `
                        <span class="point-sport-chip">

                          <span class="point-sport-name">
                            ${escapeHtml(
                              sport.sukan || '-'
                            )}
                          </span>

                          <strong>
                            ${numberValue(
                              sport.point
                            )}
                          </strong>

                        </span>
                      `;

                    })
                    .join('')
                }

              </div>
            `

            : `
              <div class="point-breakdown-empty">
                Belum ada markah direkodkan
              </div>
            `;


        return `

          <div class="point-row">

            <div class="point-rank">
              ${rankDisplay}
            </div>


            <div class="point-team">

              <div class="point-team-name">

                ${escapeHtml(
                  item.Daerah ||
                  item.Nama ||
                  '-'
                )}

              </div>

              ${breakdownHtml}

            </div>


            <div class="point-total">

              ${numberValue(
                item.Jumlah
              )}

              <small>
                POINT
              </small>

            </div>

          </div>

        `;

      })
      .join('');

}


/* ====================================================
   MEDAL TABLE
   Ranking:
   1. EMAS terbanyak
   2. PERAK terbanyak
   3. GANGSA terbanyak
   4. JUMLAH terbanyak
==================================================== */

function renderMedals() {

  const container =
    document.getElementById(
      'medalList'
    );

  if (!container) {
    return;
  }


  const medals =
    [...(DATA.medals || [])];


  if (!medals.length) {

    container.innerHTML = `
      <div class="empty-state">
        Data pingat belum tersedia.
      </div>
    `;

    return;
  }


  /*
   * Ambil nilai tanpa bergantung kepada
   * huruf besar / kecil pada header Sheet.
   * Sokong:
   * EMAS / Emas
   * PERAK / Perak
   * GANGSA / Gangsa
   * JUMLAH / Jumlah / Total
   */
  function medalValue(item, keys) {

    for (const key of keys) {

      if (
        Object.prototype.hasOwnProperty.call(
          item,
          key
        )
      ) {

        return numberValue(
          item[key]
        );

      }

    }

    return 0;

  }


  /*
   * Susun ranking rasmi pingat:
   * Emas > Perak > Gangsa > Jumlah.
   */
  medals.sort(function (a, b) {

    const emasA =
      medalValue(
        a,
        ['EMAS', 'Emas', 'emas']
      );

    const emasB =
      medalValue(
        b,
        ['EMAS', 'Emas', 'emas']
      );


    if (emasB !== emasA) {
      return emasB - emasA;
    }


    const perakA =
      medalValue(
        a,
        ['PERAK', 'Perak', 'perak']
      );

    const perakB =
      medalValue(
        b,
        ['PERAK', 'Perak', 'perak']
      );


    if (perakB !== perakA) {
      return perakB - perakA;
    }


    const gangsaA =
      medalValue(
        a,
        ['GANGSA', 'Gangsa', 'gangsa']
      );

    const gangsaB =
      medalValue(
        b,
        ['GANGSA', 'Gangsa', 'gangsa']
      );


    if (gangsaB !== gangsaA) {
      return gangsaB - gangsaA;
    }


    const jumlahA =
      medalValue(
        a,
        [
          'JUMLAH',
          'Jumlah',
          'jumlah',
          'TOTAL',
          'Total',
          'total'
        ]
      ) ||
      (
        emasA +
        perakA +
        gangsaA
      );


    const jumlahB =
      medalValue(
        b,
        [
          'JUMLAH',
          'Jumlah',
          'jumlah',
          'TOTAL',
          'Total',
          'total'
        ]
      ) ||
      (
        emasB +
        perakB +
        gangsaB
      );


    if (jumlahB !== jumlahA) {
      return jumlahB - jumlahA;
    }


    return String(
      b.Daerah ||
      b.DAERAH ||
      ''
    ).localeCompare(
      String(
        a.Daerah ||
        a.DAERAH ||
        ''
      ),
      'ms'
    );

  });


  /*
   * Ranking pertandingan.
   * Peserta dengan kombinasi pingat sama
   * akan menerima ranking yang sama.
   *
   * Contoh:
   * 1, 2, 3, 3, 5
   */
  let previousKey = '';
  let previousRank = 0;


  container.innerHTML =
    medals
      .map(function (
        item,
        index
      ) {

        const emas =
          medalValue(
            item,
            ['EMAS', 'Emas', 'emas']
          );


        const perak =
          medalValue(
            item,
            ['PERAK', 'Perak', 'perak']
          );


        const gangsa =
          medalValue(
            item,
            ['GANGSA', 'Gangsa', 'gangsa']
          );


        const totalFromSheet =
          medalValue(
            item,
            [
              'JUMLAH',
              'Jumlah',
              'jumlah',
              'TOTAL',
              'Total',
              'total'
            ]
          );


        const total =
          totalFromSheet ||
          (
            emas +
            perak +
            gangsa
          );


        const rankKey =
          [
            emas,
            perak,
            gangsa,
            total
          ].join('|');


        let rank;


        if (
          rankKey === previousKey
        ) {

          rank =
            previousRank;

        } else {

          rank =
            index + 1;

          previousRank =
            rank;

          previousKey =
            rankKey;

        }


        let rankDisplay =
          rank;


        if (rank === 1) {
          rankDisplay = '🥇';
        }

        else if (rank === 2) {
          rankDisplay = '🥈';
        }

        else if (rank === 3) {
          rankDisplay = '🥉';
        }


        const daerah =
          item.Daerah ||
          item.DAERAH ||
          item.Nama ||
          item.NAMA ||
          '-';


        return `

          <div class="medal-row">

            <div class="rank">
              ${rankDisplay}
            </div>


            <div class="team">

              ${escapeHtml(
                daerah
              )}

            </div>


            <div class="medal-number">

              ${emas}

              <small>
                EMAS
              </small>

            </div>


            <div class="medal-number">

              ${perak}

              <small>
                PERAK
              </small>

            </div>


            <div class="medal-number">

              ${gangsa}

              <small>
                GANGSA
              </small>

            </div>


            <div class="medal-number total-medal">

              ${total}

              <small>
                JUMLAH
              </small>

            </div>

          </div>

        `;

      })
      .join('');

}


/* ====================================================
   JADUAL PERTANDINGAN
==================================================== */

function renderSchedule() {

  const body =
    document.getElementById(
      'scheduleBody'
    );

  if (!body) {
    return;
  }


  const rows =
    (DATA.schedule || [])
      .filter(function(item) {

        /*
         * Abaikan baris kosong / baris yang hanya ada ID.
         */
        const nama =
          getScheduleCompetitionName(item);

        const tarikhMula =
          getScheduleStartDate(item);

        return Boolean(
          nama ||
          tarikhMula
        );

      });


  if (!rows.length) {

    body.innerHTML = `

      <tr>

        <td
          colspan="8"
          style="
            text-align:center;
            padding:35px;
            color:#A7ADB8;
          ">

          Tiada pertandingan ditemui.

        </td>

      </tr>

    `;

    return;
  }


  body.innerHTML =
    rows
      .map(function(item) {

        const namaPertandingan =
          getScheduleCompetitionName(item) ||
          '-';

        const tarikhMula =
          getScheduleStartDate(item);

        const tarikhAkhir =
          getScheduleEndDate(item);

        const kategori =
          item.Kategori ||
          item['Jenis Kategori'] ||
          '-';


        return `

          <tr>

            <!-- TARIKH MULA -->
            <td>
              <span class="schedule-date">
                ${
                  tarikhMula
                    ? escapeHtml(
                        formatDate(tarikhMula)
                      )
                    : '-'
                }
              </span>
            </td>


            <!-- TARIKH AKHIR -->
            <td>
              <span class="schedule-date">
                ${
                  tarikhAkhir
                    ? escapeHtml(
                        formatDate(tarikhAkhir)
                      )
                    : '-'
                }
              </span>
            </td>


            <!-- MASA -->
            <td>
              ${escapeHtml(
                formatTimeMY(
                  item.Masa
                )
              )}
            </td>


            <!-- PERTANDINGAN -->
            <td>
              <strong>
                ${escapeHtml(
                  namaPertandingan
                )}
              </strong>
            </td>


            <!-- KATEGORI -->
            <td>
              ${escapeHtml(
                kategori
              )}
            </td>


            <!-- LOKASI -->
            <td>
              ${escapeHtml(
                item.Lokasi || '-'
              )}
            </td>


            <!-- DAERAH -->
            <td>
              ${escapeHtml(
                item.Daerah || '-'
              )}
            </td>


            <!-- STATUS -->
            <td>
              ${statusBadge(
                item.Status
              )}
            </td>

          </tr>

        `;

      })
      .join('');

}


/**
 * Nama pertandingan bagi struktur SCHEDULE baharu.
 *
 * Keutamaan:
 * 1. Nama Pertandingan
 * 2. Pertandingan
 * 3. Sukan
 */
function getScheduleCompetitionName(item) {

  if (!item) {
    return '';
  }

  return String(
    item['Nama Pertandingan'] ||
    item.NamaPertandingan ||
    item.Pertandingan ||
    item.Sukan ||
    ''
  ).trim();

}


/**
 * Tarikh mula bagi SCHEDULE.
 */
function getScheduleStartDate(item) {

  if (!item) {
    return '';
  }

  return (
    item['Tarikh Mula'] ||
    item.TarikhMula ||
    item.Tarikh ||
    ''
  );

}


/**
 * Tarikh akhir bagi SCHEDULE.
 */
function getScheduleEndDate(item) {

  if (!item) {
    return '';
  }

  return (
    item['Tarikh Akhir'] ||
    item.TarikhAkhir ||
    item['Tarikh Tamat'] ||
    item.TarikhTamat ||
    ''
  );

}


/**
 * Paparan TARIKH dalam jadual pertandingan.
 *
 * Contoh:
 * 23 Oktober 2026 — 24 Oktober 2026
 *
 * Jika Tarikh Akhir kosong:
 * 22 Oktober 2026
 */
function getScheduleDateDisplay(item) {

  if (!item) {
    return '-';
  }


  /*
   * Code.gs baharu sudah menyediakan TarikhPaparan.
   * Gunakan nilai ini dahulu.
   */
  const readyDisplay =
    String(
      item.TarikhPaparan || ''
    ).trim();

  if (readyDisplay) {
    return readyDisplay;
  }


  const start =
    getScheduleStartDate(item);

  const end =
    getScheduleEndDate(item);


  if (!start) {
    return '-';
  }


  const startText =
    formatDate(start);


  if (!end) {
    return startText;
  }


  const endText =
    formatDate(end);


  /*
   * Jika tarikh mula dan akhir sama,
   * paparkan satu tarikh sahaja.
   */
  if (
    normalizeScheduleDateKey(start) ===
    normalizeScheduleDateKey(end)
  ) {
    return startText;
  }


  return (
    startText +
    ' — ' +
    endText
  );

}


/**
 * Normalisasi tarikh untuk perbandingan.
 */
function normalizeScheduleDateKey(value) {

  if (!value) {
    return '';
  }

  const text =
    String(value)
      .trim();


  const iso =
    text.match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

  if (iso) {

    return (
      iso[1] +
      '-' +
      iso[2] +
      '-' +
      iso[3]
    );

  }


  const my =
    text.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
    );

  if (my) {

    return (
      my[3] +
      '-' +
      String(my[2]).padStart(2, '0') +
      '-' +
      String(my[1]).padStart(2, '0')
    );

  }


  const date =
    new Date(text);

  if (
    isNaN(
      date.getTime()
    )
  ) {
    return text;
  }


  const parts =
    new Intl.DateTimeFormat(
      'en-CA',
      {
        timeZone:
          'Asia/Kuala_Lumpur',

        year:
          'numeric',

        month:
          '2-digit',

        day:
          '2-digit'
      }
    )
    .formatToParts(date);


  const map = {};

  parts.forEach(
    function(part) {

      if (
        part.type !==
        'literal'
      ) {

        map[part.type] =
          part.value;

      }

    }
  );


  return (
    map.year +
    '-' +
    map.month +
    '-' +
    map.day
  );

}


/* ====================================================
   SCHEDULE FILTERS
==================================================== */

function populateScheduleFilters() {

  const schedule =
    DATA.schedule || [];


  /*
   * filterSport dikekalkan kerana ID HTML sedia ada
   * menggunakan nama tersebut.
   *
   * Nilainya kini membaca "Nama Pertandingan"
   * terlebih dahulu, kemudian fallback kepada Sukan.
   */
  populateSelect(
    'filterSport',
    schedule.map(
      function(item) {
        return (
          getScheduleCompetitionName(item)
        );
      }
    ),
    'Semua Pertandingan'
  );


  populateSelect(
    'filterLocation',
    schedule.map(
      function(item) {
        return item.Lokasi;
      }
    ),
    'Semua Lokasi'
  );


  populateSelect(
    'filterDistrict',
    schedule.map(
      function(item) {
        return item.Daerah;
      }
    ),
    'Semua Daerah'
  );

}


function populateSelect(
  id,
  values,
  defaultText
) {

  const select =
    document.getElementById(id);

  if (!select) {
    return;
  }


  const current =
    select.value;


  const uniqueValues =
    [
      ...new Set(
        values
          .filter(Boolean)
          .map(
            item =>
              String(item).trim()
          )
      )
    ]
    .sort();


  select.innerHTML =
    `<option value="">
      ${defaultText}
    </option>`;


  uniqueValues.forEach(
    function (value) {

      const option =
        document.createElement(
          'option'
        );

      option.value =
        value;

      option.textContent =
        value;

      select.appendChild(
        option
      );

    }
  );


  if (
    uniqueValues.includes(
      current
    )
  ) {

    select.value =
      current;

  }

}


/* ====================================================
   STATUS PERTANDINGAN
==================================================== */

function renderCompetitionStatus() {

  let live = 0;
  let upcoming = 0;
  let completed = 0;


  (DATA.schedule || [])
    .forEach(
      function (item) {

        const status =
          normalizeStatus(
            item.Status
          );


        if (status === 'LIVE') {
          live++;
        }


        if (
          status ===
          'AKAN DATANG'
        ) {

          upcoming++;

        }


        if (
          status ===
          'SELESAI'
        ) {

          completed++;

        }

      }
    );


  animateNumber(
    'liveCount',
    live
  );


  animateNumber(
    'upcomingCount',
    upcoming
  );


  animateNumber(
    'completedCount',
    completed
  );

}


/* ====================================================
   SPORTS
==================================================== */

function renderSports() {

  const container =
    document.getElementById(
      'sportsGrid'
    );

  if (!container) {
    return;
  }


  const sports =
    DATA.sports || [];


  if (!sports.length) {

    container.innerHTML =
      emptyState(
        'Senarai sukan belum dimasukkan.'
      );

    return;

  }


  container.innerHTML =
    sports
      .map(function (item) {

        return `

          <div class="sport-card">

            <div class="sport-icon">

              <i class="${
                escapeHtml(
                  item.Icon ||
                  'fa-solid fa-trophy'
                )
              }"></i>

            </div>

            <div class="sport-name">

              ${escapeHtml(
                item.Nama ||
                item.Sukan ||
                '-'
              )}

            </div>

            <div class="sport-meta">

              ${escapeHtml(
                item.Kategori ||
                'PSKPP SELANGOR 2026'
              )}

            </div>

          </div>

        `;

      })
      .join('');

}


/* ====================================================
   VENUES
==================================================== */

function renderVenues() {

  const container =
    document.getElementById(
      'venueGrid'
    );

  if (!container) {
    return;
  }


  const venues =
    DATA.venues || [];


  if (!venues.length) {

    container.innerHTML =
      emptyState(
        'Maklumat lokasi pertandingan belum tersedia.'
      );

    return;
  }


  container.innerHTML =
    venues
      .map(function (item) {

        const mapUrl =
          normalizeExternalUrl(
            item['Pautan Peta Lokasi'] ||
            item.MapsURL ||
            ''
          );


        const sportImage =
          getSportImage(item);


        const kategori =
          item['Jenis Kategori'] ||
          item.Kategori ||
          '';


        const namaLokasi =
          item['Nama Lokasi'] ||
          item.NamaLokasi ||
          item.Nama ||
          '';


        const tarikhMula =
          getVenueStartDate(item);


        const tarikhTamat =
          getVenueEndDate(item);


        return `

          <article class="venue-scorecard">


            <div class="venue-sport-image">

              ${
                sportImage
                  ? `
                    <img
                      src="${escapeAttribute(sportImage)}"
                      alt="${escapeAttribute(
                        item.Sukan || 'Sukan PSKPP'
                      )}"
                      loading="eager"
                      decoding="async"
                    >
                  `
                  : `
                    <div class="venue-sport-placeholder">
                      <i class="fa-solid fa-trophy"></i>
                    </div>
                  `
              }

            </div>


            <div class="venue-score-sport">

              ${escapeHtml(
                item.Sukan ||
                'VENUE KEJOHANAN'
              )}

            </div>


            ${
              kategori
                ? `
                  <div class="venue-category-badge">
                    ${escapeHtml(kategori)}
                  </div>
                `
                : ''
            }


            ${
              namaLokasi
                ? `
                  <div class="venue-location-name">

                    <i class="fa-solid fa-building-circle-check"></i>

                    <div>
                      <span class="venue-meta-label">
                        NAMA LOKASI
                      </span>

                      <strong>
                        ${escapeHtml(namaLokasi)}
                      </strong>
                    </div>

                  </div>
                `
                : ''
            }


            <div class="venue-score-address">

              <i class="fa-solid fa-location-dot"></i>

              <span>
                ${escapeHtml(
                  item.Alamat ||
                  item.Lokasi ||
                  '-'
                )}
              </span>

            </div>


            <div class="venue-score-meta">

              <div class="venue-date-row">

                <i class="fa-regular fa-calendar"></i>

                <div>
                  <span class="venue-meta-label">
                    TARIKH
                  </span>

                  <strong>
                    ${
                      tarikhMula
                        ? formatDate(tarikhMula)
                        : '-'
                    }

                    ${
                      tarikhTamat
                        ? ' — ' +
                          formatDate(tarikhTamat)
                        : ''
                    }
                  </strong>
                </div>

              </div>


              <div class="venue-time-row">

                <i class="fa-regular fa-clock"></i>

                <div>
                  <span class="venue-meta-label">
                    MASA
                  </span>

                  <strong>
                    ${escapeHtml(
                      formatTimeMY(
                        item.Masa
                      )
                    )}
                  </strong>
                </div>

              </div>

            </div>


            ${
              validUrl(mapUrl)
                ? `
                  <a
                    class="venue-score-map"
                    href="${escapeAttribute(mapUrl)}"
                    target="_blank"
                    rel="noopener noreferrer">

                    <i class="fa-solid fa-map-location-dot"></i>
                    LIHAT PETA LOKASI
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                  </a>
                `
                : `
                  <div class="venue-score-map disabled">
                    <i class="fa-solid fa-map-location-dot"></i>
                    PETA BELUM TERSEDIA
                  </div>
                `
            }


          </article>

        `;

      })
      .join('');

}


/* ====================================================
   FILTER LOKASI - PENGINAPAN & TEROKAI HULU SELANGOR
==================================================== */
function renderLocationFilterBar(containerId, rows, selected, setterName) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const locations = [...new Set((rows || []).map(item => String(item.Lokasi || '').trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b,'ms'));
  const options = ['SEMUA', ...locations];
  container.innerHTML = options.map(location => {
    const active = String(selected).toUpperCase() === String(location).toUpperCase();
    const icon = location === 'SEMUA' ? 'fa-solid fa-border-all' : 'fa-solid fa-location-dot';
    return `<button type="button" class="location-filter-btn${active ? ' active' : ''}" data-location="${escapeAttribute(location)}" onclick="${setterName}(this.dataset.location)"><i class="${icon}"></i><span>${escapeHtml(location)}</span></button>`;
  }).join('');
}

function renderAccommodationLocationFilters() {
  const locations = (DATA.accommodation || []).map(item => String(item.Lokasi || '').trim()).filter(Boolean);
  if (accommodationLocationFilter !== 'SEMUA' && !locations.some(x => x.toUpperCase() === String(accommodationLocationFilter).toUpperCase())) accommodationLocationFilter = 'SEMUA';
  renderLocationFilterBar('accommodationLocationFilters', DATA.accommodation || [], accommodationLocationFilter, 'setAccommodationLocationFilter');
}
function setAccommodationLocationFilter(location) {
  accommodationLocationFilter = String(location || 'SEMUA').trim() || 'SEMUA';
  renderAccommodationLocationFilters();
  renderAccommodation();
}
function renderPlacesLocationFilters() {
  const locations = (DATA.places || []).map(item => String(item.Lokasi || '').trim()).filter(Boolean);
  if (placesLocationFilter !== 'SEMUA' && !locations.some(x => x.toUpperCase() === String(placesLocationFilter).toUpperCase())) placesLocationFilter = 'SEMUA';
  renderLocationFilterBar('placesLocationFilters', DATA.places || [], placesLocationFilter, 'setPlacesLocationFilter');
}
function setPlacesLocationFilter(location) {
  placesLocationFilter = String(location || 'SEMUA').trim() || 'SEMUA';
  renderPlacesLocationFilters();
  renderPlaces();
}

/* ====================================================
   ACCOMMODATION
==================================================== */

function renderAccommodation() {

  const container =
    document.getElementById(
      'accommodationGrid'
    );

  if (!container) {
    return;
  }


  const allData = DATA.accommodation || [];
  const data = accommodationLocationFilter === 'SEMUA' ? allData : allData.filter(function(item) {
    return String(item.Lokasi || '').trim().toUpperCase() === String(accommodationLocationFilter).trim().toUpperCase();
  });


  if (!allData.length) {

    container.innerHTML =
      emptyState(
        'Maklumat penginapan akan dikemaskini.'
      );

    return;
  }

  if (!data.length) {
    container.innerHTML = emptyState('Tiada penginapan ditemui untuk lokasi ini.');
    return;
  }


  container.innerHTML =
    data
      .map(function (item) {

        const nama =
          item.Nama ||
          '-';


        const lokasi =
          item.Lokasi ||
          '-';


        const telefon =
          item['Nombor Telefon'] ||
          '';


        const bookingUrl =
          normalizeExternalUrl(
            item['URL tempahan'] ||
            item.BookingURL ||
            ''
          );


        const mapUrl =
          normalizeExternalUrl(
            item['Pautan Peta Lokasi'] ||
            item.MapsURL ||
            ''
          );


        const imageId =
          String(
            item['ID Gambar'] || ''
          ).trim();


        const imageUrl =
          imageId
            ? driveThumbnail(
                imageId,
                'w1200'
              )
            : '';


        const phoneUrl =
          telefon
            ? (
                'tel:' +
                String(telefon)
                  .replace(/[^\d+]/g, '')
              )
            : '';


        return `

          <article class="stay-card">


            <div class="stay-image-area">

              ${
                imageUrl
                  ? `
                    <img
                      class="stay-image"
                      src="${escapeAttribute(imageUrl)}"
                      alt="${escapeAttribute(nama)}"
                      loading="lazy"
                      decoding="async"
                    >
                  `
                  : `
                    <div class="stay-image-placeholder">
                      <i class="fa-solid fa-hotel"></i>
                    </div>
                  `
              }


              <div class="stay-type">
                PENGINAPAN
              </div>

            </div>


            <div class="stay-body">


              <h3 class="stay-name">
                ${escapeHtml(nama)}
              </h3>


              <div class="stay-location">

                <i class="fa-solid fa-location-dot"></i>

                <span>
                  ${escapeHtml(lokasi)}
                </span>

              </div>


              ${
                telefon
                  ? `
                    <div class="stay-phone">
                      <i class="fa-solid fa-phone"></i>
                      <span>${escapeHtml(telefon)}</span>
                    </div>
                  `
                  : ''
              }


              <div class="stay-actions">


                ${
                  validUrl(bookingUrl)
                    ? `
                      <a
                        class="stay-btn booking"
                        href="${escapeAttribute(bookingUrl)}"
                        target="_blank"
                        rel="noopener noreferrer">

                        <i class="fa-regular fa-calendar-check"></i>
                        BUAT TEMPAHAN

                      </a>
                    `
                    : `
                      <div class="stay-btn booking disabled">
                        <i class="fa-regular fa-calendar-xmark"></i>
                        TEMPAHAN BELUM TERSEDIA
                      </div>
                    `
                }


                ${
                  validUrl(mapUrl)
                    ? `
                      <a
                        class="stay-btn map"
                        href="${escapeAttribute(mapUrl)}"
                        target="_blank"
                        rel="noopener noreferrer">

                        <i class="fa-solid fa-map-location-dot"></i>
                        PETA LOKASI

                      </a>
                    `
                    : `
                      <div class="stay-btn map disabled">
                        <i class="fa-solid fa-map-location-dot"></i>
                        PETA BELUM TERSEDIA
                      </div>
                    `
                }


                ${
                  telefon
                    ? `
                      <a
                        class="stay-btn phone"
                        href="${escapeAttribute(phoneUrl)}">

                        <i class="fa-solid fa-phone"></i>
                        HUBUNGI

                      </a>
                    `
                    : ''
                }


              </div>


            </div>


          </article>

        `;

      })
      .join('');

}


/* ====================================================
   TEMPAT MENARIK
==================================================== */

/* ====================================================
   TEMPAT MENARIK / PLACES
==================================================== */

function renderPlaces() {

  const container =
    document.getElementById(
      'placesGrid'
    );

  if (!container) {
    return;
  }


  const allPlaces = DATA.places || [];
  const places = placesLocationFilter === 'SEMUA' ? allPlaces : allPlaces.filter(function(item) {
    return String(item.Lokasi || '').trim().toUpperCase() === String(placesLocationFilter).trim().toUpperCase();
  });


  if (!allPlaces.length) {

    container.innerHTML =
      emptyState(
        'Maklumat tempat menarik akan dikemaskini.'
      );

    return;
  }

  if (!places.length) {
    container.innerHTML = emptyState('Tiada tempat menarik ditemui untuk lokasi ini.');
    return;
  }


  container.innerHTML =
    places
      .map(function(item) {

        /* ================================
           DATA GOOGLE SHEET
        ================================= */

        const kategori =
          String(
            item['Nama Kategori'] ||
            'TEMPAT MENARIK'
          ).trim();


        const nama =
          String(
            item['Nama Lokasi'] ||
            '-'
          ).trim();


        const penerangan =
          String(
            item.Penerangan ||
            ''
          ).trim();


        const lokasi =
          String(
            item.Lokasi ||
            ''
          ).trim();


        const mapUrl =
          normalizeExternalUrl(
            item['Pautan Peta Lokasi'] ||
            ''
          );


        const imageId =
          String(
            item['ID Gambar'] ||
            ''
          ).trim();


        const imageUrl =
          imageId
            ? driveThumbnail(
                imageId,
                'w1200'
              )
            : '';


        /* ================================
           ICON KATEGORI
        ================================= */

        const categoryInfo =
          getPlaceCategoryInfo(
            kategori
          );


        return `

          <article class="place-card">


            <!-- =========================
                 GAMBAR
            ========================== -->

            <div class="place-image-area">

              ${
                imageUrl

                  ? `

                    <img
                      class="place-image"
                      src="${escapeAttribute(imageUrl)}"
                      alt="${escapeAttribute(nama)}"
                      loading="lazy"
                      decoding="async">

                  `

                  : `

                    <div class="place-image-placeholder">

                      <i class="fa-solid fa-mountain-sun"></i>

                    </div>

                  `
              }


              <!-- KATEGORI -->

              <div
                class="
                  place-category
                  ${categoryInfo.className}
                ">

                <i class="${categoryInfo.icon}"></i>

                ${escapeHtml(kategori)}

              </div>


              <!-- LOKASI ATAS GAMBAR -->

              ${
                lokasi

                  ? `

                    <div class="place-image-location">

                      <i class="fa-solid fa-location-dot"></i>

                      ${escapeHtml(lokasi)}

                    </div>

                  `

                  : ''
              }

            </div>



            <!-- =========================
                 BODY
            ========================== -->

            <div class="place-body">


              <h3 class="place-name">

                ${escapeHtml(nama)}

              </h3>


              ${
                penerangan

                  ? `

                    <p class="place-description">

                      ${escapeHtml(
                        penerangan
                      )}

                    </p>

                  `

                  : ''
              }


              <!-- INFO -->

              <div class="place-info-row">

                <div class="place-info-icon">

                  <i class="${categoryInfo.icon}"></i>

                </div>

                <div>

                  <span>
                    KATEGORI
                  </span>

                  <strong>
                    ${escapeHtml(kategori)}
                  </strong>

                </div>

              </div>



              <!-- BUTTON MAP -->

              <div class="place-actions">

                ${
                  validUrl(mapUrl)

                    ? `

                      <a
                        class="place-map-btn"
                        href="${escapeAttribute(mapUrl)}"
                        target="_blank"
                        rel="noopener noreferrer">

                        <i class="fa-solid fa-location-dot"></i>

                        <div>

                          <strong>
                            LIHAT LOKASI
                          </strong>

                          <span>
                            Buka di Google Maps
                          </span>

                        </div>

                        <i
                          class="
                            fa-solid
                            fa-arrow-up-right-from-square
                            place-arrow
                          ">
                        </i>

                      </a>

                    `

                    : `

                      <div
                        class="
                          place-map-btn
                          disabled
                        ">

                        <i class="fa-solid fa-location-dot"></i>

                        <div>

                          <strong>
                            PETA BELUM TERSEDIA
                          </strong>

                        </div>

                      </div>

                    `
                }

              </div>


            </div>


          </article>

        `;

      })
      .join('');

}

/* ====================================================
   ICON / WARNA KATEGORI TEMPAT
==================================================== */

function getPlaceCategoryInfo(category) {

  const value =
    String(category || '')
      .trim()
      .toUpperCase();


  /* ALAM SEMULA JADI */

  if (
    value.includes('ALAM') ||
    value.includes('SEMULA JADI')
  ) {

    return {
      icon:
        'fa-solid fa-leaf',

      className:
        'place-cat-nature'
    };

  }


  /* MAKANAN */

  if (
    value.includes('MAKANAN') ||
    value.includes('KULINARI')
  ) {

    return {
      icon:
        'fa-solid fa-utensils',

      className:
        'place-cat-food'
    };

  }


  /* REKREASI */

  if (
    value.includes('REKREASI')
  ) {

    return {
      icon:
        'fa-solid fa-person-hiking',

      className:
        'place-cat-recreation'
    };

  }


  /* SEJARAH / WARISAN */

  if (
    value.includes('SEJARAH') ||
    value.includes('WARISAN')
  ) {

    return {
      icon:
        'fa-solid fa-landmark',

      className:
        'place-cat-history'
    };

  }


  return {
    icon:
      'fa-solid fa-location-dot',

    className:
      'place-cat-default'
  };

}

/* ====================================================
   RULES
==================================================== */

function renderRules_OLD_DISABLED() {

  const container =
    document.getElementById(
      'rulesCards'
    );

  if (!container) {
    return;
  }


  const rules =
    DATA.rules || [];


  if (!rules.length) {

    container.innerHTML =
      emptyState(
        'Dokumen peraturan belum tersedia.'
      );

    return;

  }


  container.innerHTML =
    rules
      .map(function (item) {

        return `

          <div class="content-card">

            <div class="card-body">

              <div class="quick-icon">

                <i class="fa-solid fa-file-circle-check"></i>

              </div>

              <div class="card-title">

                PERATURAN
                ${escapeHtml(
                  item.Sukan || ''
                )}

              </div>

              <div class="card-text">

                ${escapeHtml(
                  item.Ringkasan ||
                  ''
                )}

              </div>


              ${
                validUrl(
                  item.PDFURL
                )
                ? `

                  <br>

                  <a
                    class="btn-yellow"
                    href="${
                      escapeAttribute(
                        item.PDFURL
                      )
                    }"
                    target="_blank">

                    <i class="fa-solid fa-file-pdf"></i>

                    MUAT TURUN PDF

                  </a>

                `
                : ''
              }

            </div>

          </div>

        `;

      })
      .join('');

}



/* ====================================================
   MAJLIS PENUTUP
==================================================== */

let closingCountdownTimer;


function startClosingCountdown() {

  if (closingCountdownTimer) {
    clearInterval(closingCountdownTimer);
  }

  updateClosingCountdown();

  closingCountdownTimer =
    setInterval(
      updateClosingCountdown,
      1000
    );

}


function updateClosingCountdown() {

  const dashboard =
    DATA.dashboard || {};

  /*
   * Jika Code.gs mempunyai closingDate,
   * ia akan digunakan dahulu.
   * Jika tiada, eventEnd digunakan sebagai fallback.
   */
  const closingDate =
    dashboard.closingDate ||
    dashboard.eventEnd;

  if (!closingDate) {
    return;
  }

  const target =
    new Date(closingDate).getTime();

  let distance =
    target - Date.now();

  if (distance < 0) {
    distance = 0;
  }

  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (
        distance %
        (1000 * 60 * 60 * 24)
      ) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (
        distance %
        (1000 * 60 * 60)
      ) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (
        distance %
        (1000 * 60)
      ) /
      1000
    );

  setText(
    'closeDays',
    pad(days)
  );

  setText(
    'closeHours',
    pad(hours)
  );

  setText(
    'closeMinutes',
    pad(minutes)
  );

  setText(
    'closeSeconds',
    pad(seconds)
  );

}


function renderClosing() {

  const container =
    document.getElementById(
      'closingInfo'
    );

  if (!container) {
    return;
  }

  const dashboard =
    DATA.dashboard || {};

  const eventData =
    Array.isArray(DATA.event)
      ? DATA.event
      : [];

  const item =
    eventData.length
      ? eventData[0]
      : {};

  const dateValue =
    item.Tarikh ||
    dashboard.closingDate ||
    dashboard.eventEnd ||
    '';

  const timeValue =
    item.Masa || '';

  const locationValue =
    item.Lokasi || '';

  const locationUrl =
    item.LokasiURL || '';

  const calendarUrl =
    item.CalendarURL || '';

  let html = `
    <div
      style="
        display:flex;
        gap:12px;
        flex-wrap:wrap;
        margin-bottom:18px;
      "
    >
  `;

  if (dateValue) {

    html += `
      <div class="glass-card"
           style="padding:12px 16px">
        <div style="
          color:#FFD200;
          font-size:9px;
          font-weight:900;
        ">
          TARIKH
        </div>
        <div style="
          margin-top:4px;
          font-size:12px;
          font-weight:800;
        ">
          ${formatDate(dateValue)}
        </div>
      </div>
    `;

  }

  if (timeValue) {

    html += `
      <div class="glass-card"
           style="padding:12px 16px">
        <div style="
          color:#FFD200;
          font-size:9px;
          font-weight:900;
        ">
          MASA
        </div>
        <div style="
          margin-top:4px;
          font-size:12px;
          font-weight:800;
        ">
          ${escapeHtml(formatTimeMY(timeValue))}
        </div>
      </div>
    `;

  }

  if (locationValue) {

    html += `
      <div class="glass-card"
           style="padding:12px 16px">
        <div style="
          color:#FFD200;
          font-size:9px;
          font-weight:900;
        ">
          LOKASI
        </div>
        <div style="
          margin-top:4px;
          font-size:12px;
          font-weight:800;
        ">
          ${escapeHtml(locationValue)}
        </div>
      </div>
    `;

  }

  html += `</div>`;

  if (
    validUrl(locationUrl) ||
    validUrl(calendarUrl)
  ) {

    html += `
      <div
        style="
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        "
      >
    `;

    if (validUrl(locationUrl)) {

      html += `
        <a
          class="btn-red"
          href="${escapeAttribute(locationUrl)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-location-dot"></i>
          LIHAT LOKASI
        </a>
      `;

    }

    if (validUrl(calendarUrl)) {

      html += `
        <a
          class="btn-yellow"
          href="${escapeAttribute(calendarUrl)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-regular fa-calendar"></i>
          JADIKAN KALENDAR
        </a>
      `;

    }

    html += `</div>`;

  }

  if (
    !dateValue &&
    !timeValue &&
    !locationValue &&
    !validUrl(locationUrl) &&
    !validUrl(calendarUrl)
  ) {

    html = `
      <div class="empty-state">
        Maklumat majlis penutup akan dikemaskini.
      </div>
    `;

  }

  container.innerHTML =
    html;

}


/* ====================================================
   FOOTER SETTINGS
==================================================== */

function renderFooterSettings() {

  const settings =
    DATA.settings || [];

  if (
    !Array.isArray(settings) ||
    !settings.length
  ) {
    return;
  }

  const map = {};

  settings.forEach(
    function (item) {

      const key =
        String(
          item.Key ||
          item.Kunci ||
          ''
        )
        .trim()
        .toUpperCase();

      const value =
        String(
          item.Value ||
          item.Nilai ||
          ''
        )
        .trim();

      if (key) {
        map[key] = value;
      }

    }
  );

  setLinkFromSetting(
    'instagramLink',
    map.INSTAGRAM
  );

  setLinkFromSetting(
    'facebookLink',
    map.FACEBOOK
  );

  setLinkFromSetting(
    'youtubeLink',
    map.YOUTUBE
  );

  setLinkFromSetting(
    'whatsappLink',
    map.WHATSAPP
  );

  const email =
    document.getElementById(
      'emailLink'
    );

  if (
    email &&
    map.EMAIL
  ) {

    email.href =
      'mailto:' +
      encodeURIComponent(
        map.EMAIL
      );

  }

}


function setLinkFromSetting(
  id,
  url
) {

  const element =
    document.getElementById(id);

  if (
    element &&
    validUrl(url)
  ) {

    element.href = url;

  }

}


/* ====================================================
   GLOBAL SEARCH
==================================================== */

function globalSearch() {

  const input =
    document.getElementById(
      'globalSearch'
    );

  if (!input) {
    return;
  }


  const query =
    input.value
      .trim()
      .toLowerCase();


  const elements =
    document.querySelectorAll(
      '.sport-card, .content-card, .point-row, .medal-row'
    );


  elements.forEach(
    function (element) {

      if (!query) {

        element.style.display = '';

        return;

      }


      const text =
        element.textContent
          .toLowerCase();


      element.style.display =
        text.includes(query)
          ? ''
          : 'none';

    }
  );

}




/* ====================================================
   NAVIGATION ATAS
   - Hanya satu menu aktif pada satu masa
   - Klik menu terus aktifkan menu tersebut
   - Scroll turut mengemas kini menu aktif
==================================================== */

function initializeNavigation() {

  const links =
    document.querySelectorAll(
      '.main-nav a[href^="#"]'
    );

  if (!links.length) {
    return;
  }


  function setActiveLink(activeLink) {

    links.forEach(function (link) {

      link.classList.remove(
        'active'
      );

    });


    if (activeLink) {

      activeLink.classList.add(
        'active'
      );

    }

  }


  links.forEach(function (link) {

    link.addEventListener(
      'click',
      function (event) {

        const targetId =
          link.getAttribute(
            'href'
          );


        if (
          !targetId ||
          !targetId.startsWith('#')
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        /*
         * Aktifkan menu yang diklik dahulu.
         * Ini memastikan hanya satu bercahaya.
         */
        setActiveLink(link);


        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });


        /*
         * Tutup menu mobile jika terbuka.
         */
        const nav =
          document.getElementById(
            'mainNav'
          );

        if (nav) {

          nav.classList.remove(
            'active'
          );

        }

      }
    );

  });


  /*
   * UTAMA aktif secara default.
   */
  const defaultLink =
    document.querySelector(
      '.main-nav a[href="#utama"]'
    );

  setActiveLink(
    defaultLink || links[0]
  );


  /*
   * Scroll spy.
   */
  let scrollTimer = null;

  window.addEventListener(
    'scroll',
    function () {

      clearTimeout(
        scrollTimer
      );

      scrollTimer =
        setTimeout(
          updateActiveNavigation,
          50
        );

    },
    {
      passive: true
    }
  );

}


function updateActiveNavigation() {

  const links =
    document.querySelectorAll(
      '.main-nav a[href^="#"]'
    );

  if (!links.length) {
    return;
  }


  const header =
    document.querySelector(
      '.top-header'
    );


  const offset =
    (header
      ? header.offsetHeight
      : 80) + 30;


  let activeLink =
    links[0];


  links.forEach(function (link) {

    const href =
      link.getAttribute(
        'href'
      );


    if (
      !href ||
      !href.startsWith('#')
    ) {
      return;
    }


    const section =
      document.querySelector(
        href
      );


    if (!section) {
      return;
    }


    const rect =
      section.getBoundingClientRect();


    if (
      rect.top <= offset &&
      rect.bottom > offset
    ) {

      activeLink =
        link;

    }

  });


  /*
   * Jika hampir hujung halaman,
   * aktifkan menu terakhir yang berkaitan.
   */
  const nearBottom =
    window.innerHeight +
    window.scrollY >=
    document.documentElement.scrollHeight - 10;


  if (nearBottom) {

    for (
      let i = links.length - 1;
      i >= 0;
      i--
    ) {

      const href =
        links[i].getAttribute(
          'href'
        );

      const section =
        href
          ? document.querySelector(
              href
            )
          : null;


      if (section) {

        activeLink =
          links[i];

        break;

      }

    }

  }


  links.forEach(function (link) {

    link.classList.toggle(
      'active',
      link === activeLink
    );

  });

}


/* ====================================================
   HERO ACTION BUTTONS
   - SEMAK JADUAL HARIAN
   - SEMAK KEPUTUSAN
   - Butang merah, glow kuning apabila ditekan
   - Scroll lancar dan mesra telefon
==================================================== */

function initializeHeroActionButtons() {

  // Suntik gaya minimum supaya fungsi glow tetap berfungsi
  // walaupun CSS utama belum dikemaskini.
  if (!document.getElementById('heroActionButtonRuntimeStyle')) {
    const style = document.createElement('style');
    style.id = 'heroActionButtonRuntimeStyle';
    style.textContent = `
      .hero-action-btn,
      [data-hero-action] {
        background: linear-gradient(135deg, #b80000, #e00000) !important;
        color: #fff !important;
        border: 1px solid rgba(255,255,255,.18) !important;
        cursor: pointer;
        transition: transform .2s ease, box-shadow .2s ease, filter .2s ease !important;
      }
      .hero-action-btn:hover,
      [data-hero-action]:hover {
        transform: translateY(-2px);
        filter: brightness(1.08);
      }
      .hero-action-btn.hero-action-glow,
      [data-hero-action].hero-action-glow {
        box-shadow:
          0 0 0 3px rgba(255, 221, 0, .30),
          0 0 16px rgba(255, 221, 0, .95),
          0 0 32px rgba(255, 193, 7, .72) !important;
        transform: translateY(-2px) scale(1.015);
      }
      @media (max-width: 560px) {
        .hero-action-btn,
        [data-hero-action] {
          width: 100%;
          min-height: 48px;
          touch-action: manipulation;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Fungsi mencari sasaran secara fleksibel.
  // Ia menyokong data-target/href dan beberapa ID lazim
  // supaya tidak mudah rosak jika nama ID Index.html berbeza sedikit.
  function findFirstTarget(selectors) {
    for (const selector of selectors) {
      if (!selector) continue;
      try {
        const element = document.querySelector(selector);
        if (element) return element;
      } catch (error) {}
    }
    return null;
  }

  function getActionType(button) {
    const explicit = String(
      button.dataset.heroAction ||
      button.dataset.action ||
      ''
    ).trim().toLowerCase();

    if (explicit.includes('jadual') || explicit.includes('schedule')) {
      return 'schedule';
    }

    if (
      explicit.includes('keputusan') ||
      explicit.includes('result') ||
      explicit.includes('markah') ||
      explicit.includes('pingat')
    ) {
      return 'results';
    }

    const text = String(button.textContent || '').trim().toUpperCase();

    if (text.includes('SEMAK JADUAL') || text.includes('JADUAL HARIAN')) {
      return 'schedule';
    }

    if (text.includes('SEMAK KEPUTUSAN') || text.includes('KEPUTUSAN')) {
      return 'results';
    }

    return '';
  }

  function getTarget(button, actionType) {
    const ownTarget =
      button.getAttribute('data-target') ||
      button.getAttribute('href') ||
      '';

    if (ownTarget && ownTarget.startsWith('#')) {
      const direct = findFirstTarget([ownTarget]);
      if (direct) return direct;
    }

    if (actionType === 'schedule') {
      return findFirstTarget([
        '#jadual',
        '#schedule',
        '#jadualPertandingan',
        '#jadual-harian',
        '#scheduleSection',
        '[data-section="jadual"]',
        '[data-section="schedule"]',
        '#scheduleBody'
      ]);
    }

    if (actionType === 'results') {
      return findFirstTarget([
        '#keputusan',
        '#results',
        '#keputusanPertandingan',
        '#keputusan-pertandingan',
        '#ranking',
        '#markah',
        '#pingat',
        '#pointList',
        '#medalList',
        '[data-section="keputusan"]',
        '[data-section="results"]'
      ]);
    }

    return null;
  }

  function scrollToTarget(target) {
    if (!target) return;

    // Jika sasaran ialah tbody/list di dalam card, naik ke seksyen/card
    // supaya tajuk seksyen turut kelihatan.
    const scrollElement =
      target.closest('section') ||
      target.closest('.section') ||
      target.closest('.content-section') ||
      target.closest('.dashboard-section') ||
      target;

    const header = document.querySelector('.top-header');
    const offset = (header ? header.offsetHeight : 80) + 18;
    const top =
      scrollElement.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth'
    });
  }

  // Delegated click: berfungsi walaupun butang dirender/diubah kemudian.
  document.addEventListener('click', function (event) {

    const button = event.target.closest(
      '.hero-action-btn, [data-hero-action], a, button'
    );

    if (!button) return;

    const actionType = getActionType(button);
    if (!actionType) return;

    const target = getTarget(button, actionType);

    if (!target) {
      console.warn(
        actionType === 'schedule'
          ? 'Sasaran Jadual tidak dijumpai dalam Index.html.'
          : 'Sasaran Keputusan tidak dijumpai dalam Index.html.'
      );
      return;
    }

    event.preventDefault();

    document
      .querySelectorAll('.hero-action-glow')
      .forEach(function (item) {
        item.classList.remove('hero-action-glow');
      });

    button.classList.add('hero-action-glow');

    scrollToTarget(target);

    window.setTimeout(function () {
      button.classList.remove('hero-action-glow');
    }, 1200);
  });
}


/* ====================================================
   FULLSCREEN
==================================================== */

function toggleFullscreen() {

  if (
    !document.fullscreenElement
  ) {

    document.documentElement
      .requestFullscreen()
      .catch(function () {});

  } else {

    document.exitFullscreen();

  }

}


/* ====================================================
   MOBILE MENU
==================================================== */

function toggleMenu() {

  const nav =
    document.getElementById('mainNav');

  const button =
    document.getElementById('mobileMenu');

  if (!nav || !button) {
    return;
  }

  const isOpen =
    nav.classList.toggle('active');

  button.classList.toggle(
    'menu-open',
    isOpen
  );

  const icon =
    button.querySelector('i');

  if (icon) {

    icon.className =
      isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';

  }

  document.body.classList.toggle(
    'mobile-nav-open',
    isOpen
  );

}

document.addEventListener(
  'click',
  function(event) {

    const nav =
      document.getElementById(
        'mainNav'
      );

    const button =
      document.getElementById(
        'mobileMenu'
      );

    if (
      !nav ||
      !button ||
      window.innerWidth > 767
    ) {
      return;
    }

    if (
      !nav.contains(event.target) &&
      !button.contains(event.target)
    ) {

      nav.classList.remove(
        'active'
      );

      button.classList.remove(
        'menu-open'
      );

      document.body.classList.remove(
        'mobile-nav-open'
      );

      const icon =
        button.querySelector('i');

      if (icon) {
        icon.className =
          'fa-solid fa-bars';
      }

    }

  }
);

/* ====================================================
   STATUS BADGE
==================================================== */

function statusBadge(status) {

  const value =
    normalizeStatus(status);


  if (value === 'LIVE') {

    return `
      <span class="badge badge-live">
        ● LIVE
      </span>
    `;

  }


  if (
    value ===
    'AKAN DATANG'
  ) {

    return `
      <span class="badge badge-upcoming">
        AKAN DATANG
      </span>
    `;

  }


  if (
    value ===
    'SELESAI'
  ) {

    return `
      <span class="badge badge-completed">
        SELESAI
      </span>
    `;

  }


  return `
    <span class="badge">
      ${escapeHtml(value)}
    </span>
  `;

}


function normalizeStatus(value) {

  const status =
    String(value || '')
      .trim()
      .toUpperCase();


  if (
    status === 'UPCOMING'
  ) {

    return 'AKAN DATANG';

  }


  if (
    status === 'COMPLETED'
  ) {

    return 'SELESAI';

  }


  return status;

}


/* ====================================================
   NUMBER ANIMATION
==================================================== */

function animateNumber(
  id,
  target
) {

  const element =
    document.getElementById(id);

  if (!element) {
    return;
  }


  const duration =
    600;

  const startTime =
    performance.now();


  function update(time) {

    const progress =
      Math.min(
        (
          time -
          startTime
        ) /
        duration,
        1
      );


    element.textContent =
      Math.floor(
        target *
        progress
      );


    if (progress < 1) {

      requestAnimationFrame(
        update
      );

    } else {

      element.textContent =
        target;

    }

  }


  requestAnimationFrame(
    update
  );

}


/* ====================================================
   SYNC STATUS
==================================================== */

function showSyncStatus(text) {

  const element =
    document.getElementById(
      'syncStatus'
    );

  if (element) {

    element.textContent =
      text;

  }

}


function updateLastSync() {

  const element =
    document.getElementById(
      'lastSync'
    );

  if (!element) {
    return;
  }


  const time =
    new Intl.DateTimeFormat(
      'en-GB',
      {
        timeZone:
          'Asia/Kuala_Lumpur',

        hour:
          '2-digit',

        minute:
          '2-digit',

        second:
          '2-digit',

        hour12:
          false
      }
    )
    .format(
      new Date()
    );


  element.textContent =
    'KEMASKINI TERAKHIR: ' +
    time;

}


/* ====================================================
   HELPER FUNCTIONS
==================================================== */

function setText(
  id,
  value
) {

  const element =
    document.getElementById(id);

  if (element) {

    element.textContent =
      value;

  }

}


function getValue(id) {

  const element =
    document.getElementById(id);

  return element
    ? String(
        element.value || ''
      ).trim()
    : '';

}


function pad(value) {

  return String(value)
    .padStart(2, '0');

}


function numberValue(value) {

  const number =
    Number(value);

  return isNaN(number)
    ? 0
    : number;

}


function normalizeExternalUrl(value) {

  if (!value) {
    return '';
  }


  const url =
    String(value)
      .trim();


  if (!url) {
    return '';
  }


  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('tel:') ||
    url.startsWith('mailto:')
  ) {

    return url;

  }


  return (
    'https://' +
    url
  );

}


function validUrl(value) {

  if (!value) {
    return false;
  }

  const url =
    String(value).trim();

  return (
    url.startsWith(
      'https://'
    ) ||
    url.startsWith(
      'http://'
    )
  );

}



function formatTimeMY(value) {

  if (!value) {
    return '-';
  }


  let text =
    String(value)
      .trim();


  const isoMatch =
    text.match(
      /T(\d{1,2}):(\d{2})/
    );


  if (isoMatch) {

    text =
      isoMatch[1] +
      ':' +
      isoMatch[2];

  }


  const match =
    text.match(
      /^(\d{1,2}):(\d{2})/
    );


  if (!match) {
    return text;
  }


  let hour =
    Number(match[1]);

  const minute =
    match[2];


  let period =
    'Pagi';


  if (hour === 12) {

    period =
      'Tengah Hari';

  }

  else if (
    hour >= 13 &&
    hour < 20
  ) {

    period =
      'Petang';

  }

  else if (
    hour >= 20 &&
    hour <= 23
  ) {

    period =
      'Malam';

  }

  else {

    period =
      'Pagi';

  }


  let displayHour =
    hour % 12;


  if (displayHour === 0) {
    displayHour = 12;
  }


  return (
    displayHour +
    ':' +
    minute +
    ' ' +
    period
  );

}


function getVenueStartDate(item) {

  return (
    item['Tarikh Mula'] ||
    item.TarikhMula ||
    item.Tarikh ||
    item['Tarikh Pertandingan'] ||
    ''
  );

}


function getVenueEndDate(item) {

  return (
    item['Tarikh Tamat'] ||
    item.TarikhTamat ||
    item['Tarikh Akhir'] ||
    ''
  );

}

function formatDate(value) {

  if (!value) {
    return '-';
  }

  let date;
  const text = String(value).trim();

  // Format dari Code.gs: yyyy-MM-dd
  const iso =
    text.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (iso) {

    date = new Date(
      Number(iso[1]),
      Number(iso[2]) - 1,
      Number(iso[3])
    );

  } else {

    // Format Google Sheet: dd/MM/yyyy
    const my =
      text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

    if (my) {

      date = new Date(
        Number(my[3]),
        Number(my[2]) - 1,
        Number(my[1])
      );

    } else {

      date = new Date(text);

    }
  }


  if (isNaN(date.getTime())) {
    return '-';
  }


  return new Intl.DateTimeFormat(
    'ms-MY',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Kuala_Lumpur'
    }
  ).format(date);

}


function escapeHtml(value) {

  return String(
    value ?? ''
  )

    .replace(
      /&/g,
      '&amp;'
    )

    .replace(
      /</g,
      '&lt;'
    )

    .replace(
      />/g,
      '&gt;'
    )

    .replace(
      /"/g,
      '&quot;'
    )

    .replace(
      /'/g,
      '&#039;'
    );

}


function escapeAttribute(value) {

  return escapeHtml(value);

}


function emptyState(text) {

  return `

    <div
      class="glass-card"
      style="
        padding:30px;
        color:#A7ADB8;
      ">

      ${escapeHtml(text)}

    </div>

  `;

}


