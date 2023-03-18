let artist_data = {
  artist1: {
    name: "black pink",
    img: "https://pbs.twimg.com/media/FeNDTKbVsAA-Pqd.jpg",
    headline: "#1 k-pop chart",
    tagline: "Black pink in your area",
    hitsong: "Kill this love",
    audio: "./src/media/kill-this-love.mp3",
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
    name: "black pink",
    img: "https://pbs.twimg.com/media/FeNDTKbVsAA-Pqd.jpg",
    headline: "#1 k-pop chart",
    tagline: "Black pink in your area",
    hitsong: "Kill this love",
    album: [
      {
        img: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
        link: "https://soundcloud.com/blackpinkofficial/typa-girl?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
        link: "https://soundcloud.com/blackpinkofficial/shut-down?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
        link: "https://soundcloud.com/blackpinkofficial/pink-venom?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  },

  artist3: {
    name: "black pink",
    img: "https://pbs.twimg.com/media/FeNDTKbVsAA-Pqd.jpg",
    headline: "#1 k-pop chart",
    tagline: "Black pink in your area",
    hitsong: "Kill this love",
    album: [
      {
        img: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
        link: "https://soundcloud.com/blackpinkofficial/typa-girl?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
        link: "https://soundcloud.com/blackpinkofficial/shut-down?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        img: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
        link: "https://soundcloud.com/blackpinkofficial/pink-venom?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  },
};

function showAlbumData() {
  let album1_img = document.querySelector("#album-1");
  let album2_img = document.querySelector("#album-2");
  let album3_img = document.querySelector("#album-3");

  let album1_link = document.querySelector("#album-1-link");
  let album2_link = document.querySelector("#album-2-link");
  let album3_link = document.querySelector("#album-3-link");

  album1_img.src = artist_data.artist1.album[0].img;
  album2_img.src = artist_data.artist1.album[1].img;
  album3_img.src = artist_data.artist1.album[2].img;

  album1_link.href = artist_data.artist1.album[0].link;
  album2_link.href = artist_data.artist1.album[1].link;
  album3_link.href = artist_data.artist1.album[2].link;
}

function showArtistData() {
  let tagname = document.querySelector("#img-cover-tag");
  let tagline = document.querySelector("#tagline");
  let headline = document.querySelector("#headline");
  let hitsong = document.querySelector("#hitsong");
  let cover_img = document.querySelector("#img-cover");
  let hitsong_audio = document.querySelector("#hitsong-audio");

  tagname.innerHTML = artist_data.artist1.name;
  tagline.innerHTML = artist_data.artist1.tagline;
  headline.innerHTML = artist_data.artist1.headline;
  hitsong.innerHTML = artist_data.artist1.hitsong;
  cover_img.src = artist_data.artist1.img;
  hitsong_audio.src = artist_data.artist1.audio;
}

showArtistData();
showAlbumData();
