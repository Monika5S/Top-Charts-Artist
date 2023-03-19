let artist_data = {
  artist1: {
    logo: "https://logos-world.net/wp-content/uploads/2020/12/Blackpink-Logo.png",
    name: "black pink",
    img: "https://pbs.twimg.com/media/FeNDTKbVsAA-Pqd.jpg",
    headline: "#1 k-pop chart",
    tagline: "Black pink in your area",
    hitsong: "Kill this love",
    audio:
      "https://soundcloud.com/l2share81/kill-this-love?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    album: [
      {
        img: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
        link: "https://soundcloud.com/blackpinkofficial/typa-girl?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://people.com/thmb/JeX3Zm0C8LpUeM12Oa3LzQS6snI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(764x229:766x231)/Blackpink-2023-members-01-9d67ffe25a474456b4be77adedb057b0.jpg",
        link: "https://soundcloud.com/blackpinkofficial/shut-down?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://kenh14cdn.com/203336854389633024/2023/1/23/photo-12-1674495536124524013040.jpeg",
        link: "https://soundcloud.com/blackpinkofficial/pink-venom?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  },

  artist2: {
    name: "BTS",
    logo: "https://www.freepnglogos.com/uploads/bts-logo-png/bts-logo-love-yourself-edit-hiroshi-mitsuki-12.png",
    img: "https://i1.sndcdn.com/avatars-000205359015-hyo5wq-original.jpg",
    headline: "#2 k-pop chart",
    tagline: "Annyeong haseyo! Bangtan Sonyeondan imnida!",
    hitsong: "Yet To Come",
    audio:
      "https://soundcloud.com/park-jihoon-ruby-lee/bts-yet-to-come?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    album: [
      {
        img: "https://i1.sndcdn.com/artworks-ecuzLLMGmzVxq8ab-iluLiQ-t500x500.jpg",
        link: "https://soundcloud.com/spiderverse/butter?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://i1.sndcdn.com/artworks-flcA0MzudSJSV3ph-srIsCQ-t500x500.jpg",
        link: "https://soundcloud.com/bangtan/song-for-army-0613?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://i1.sndcdn.com/artworks-Jbjv2Q5XRC6FPPVw-LbfQHg-t500x500.jpg",
        link: "https://soundcloud.com/coldplay/my-universe?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  },

  artist3: {
    name: "EXO",
    logo: "https://i1.sndcdn.com/artworks-000029585721-osnoyb-t500x500.jpg",
    img: "https://i1.sndcdn.com/artworks-000100847152-gzycya-t500x500.jpg",
    headline: "#3 k-pop chart",
    tagline: "WE ARE ONE!",
    hitsong: "Runaway",
    audio:
      "https://soundcloud.com/l2shareexo/exo-runaway?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    album: [
      {
        img: "https://i1.sndcdn.com/artworks-p9HtqBUVVYTD5Y4y-xeLYeg-t500x500.jpg",
        link: "https://soundcloud.com/l2shareexo/exo-paradise?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://i1.sndcdn.com/artworks-Yw8E3CWjPGgvleVl-8MFkSQ-t500x500.jpg",
        link: "https://soundcloud.com/l2shareexo/exo-dont-fight-the-feeling?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://i1.sndcdn.com/artworks-YOSJTkM1J8W3ECmC-zYMYgw-t500x500.jpg",
        link: "https://soundcloud.com/ikpopshare/exo-no-matter?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  },
};

function showAlbumData(artist) {
  let album1_img = document.querySelector("#album-1");
  let album2_img = document.querySelector("#album-2");
  let album3_img = document.querySelector("#album-3");

  let album1_link = document.querySelector("#album-1-link");
  let album2_link = document.querySelector("#album-2-link");
  let album3_link = document.querySelector("#album-3-link");

  album1_img.src = artist.album[0].img;
  album2_img.src = artist.album[1].img;
  album3_img.src = artist.album[2].img;

  album1_link.href = artist.album[0].link;
  album2_link.href = artist.album[1].link;
  album3_link.href = artist.album[2].link;
}

function showArtistData(artist) {
  let logo = document.querySelector("#logo");
  let tagname = document.querySelector("#img-cover-tag");
  let tagline = document.querySelector("#tagline");
  let headline = document.querySelector("#headline");
  let hitsong = document.querySelector("#hitsong");
  let cover_img = document.querySelector("#img-cover");
  let hitsong_audio = document.querySelector("#hitsong-audio");

  logo.src = artist.logo;
  tagname.innerHTML = artist.name;
  tagline.innerHTML = artist.tagline;
  headline.innerHTML = artist.headline;
  hitsong.innerHTML = artist.hitsong;
  cover_img.src = artist.img;
  hitsong_audio.href = artist.audio;
}

function selectArtist(count) {
  let artist;
  if (count === 1) {
    artist = artist_data.artist1;
  } else if (count === 2) {
    artist = artist_data.artist2;
  } else {
    artist = artist_data.artist3;
  }
  showArtistData(artist);
  showAlbumData(artist);
}

function checkcount(count) {
  if (count > 3) {
    count = 1;
  }
  if (count < 1) {
    count = 3;
  }
  selectArtist(count);
}

let previous = document.querySelector("#previous");
previous.addEventListener("click", () => {
  count -= 1;
  checkcount(count);
});

let next = document.querySelector("#next");
next.addEventListener("click", () => {
  count += 1;
  checkcount(count);
});

let count = 1;
checkcount(count);
