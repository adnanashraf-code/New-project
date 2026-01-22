const reels = [
  {
    name: "Adnan Ashraf",
    likeCount: 1200000,
    isLiked: false,
    isFollowed: false,
    commentCount: 743000,
    shareCount: 400000,
    video: "vedios/vedio1.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    caption: "I am the best developer in the whole world 💻🔥",
  },
  {
    name: "Aisha Khan",
    likeCount: 865000,
    isLiked: true,
    isFollowed: true,
    commentCount: 132000,
    shareCount: 98000,
    video: "vedios/vedio2.mp4",
    profilePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    caption: "Dream big, work hard ✨",
  },
  {
    name: "Rahul Verma",
    likeCount: 540000,
    isLiked: false,
    isFollowed: false,
    commentCount: 87000,
    shareCount: 46000,
    video: "vedios/vedio3.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    caption: "Consistency is the key 🚀",
  },
  {
    name: "Sofia Williams",
    likeCount: 910000,
    isLiked: true,
    isFollowed: true,
    commentCount: 145000,
    shareCount: 110000,
    video: "vedios/vedio4.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    caption: "Good vibes only 💫",
  },
  {
    name: "Aman Gupta",
    likeCount: 670000,
    isLiked: false,
    isFollowed: false,
    commentCount: 98000,
    shareCount: 62000,
    video: "vedios/vedio5.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    caption: "Learning something new every day 📚",
  },
  {
    name: "Emily Carter",
    likeCount: 1100000,
    isLiked: true,
    isFollowed: true,
    commentCount: 215000,
    shareCount: 180000,
    video: "vedios/vedio6.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    caption: "Code, create, repeat ❤️",
  },
  {
    name: "Zaid Ali",
    likeCount: 430000,
    isLiked: false,
    isFollowed: true,
    commentCount: 56000,
    shareCount: 31000,
    video: "vedios/vedio7.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    caption: "Every bug teaches a lesson 🐞",
  },
  {
    name: "Olivia Brown",
    likeCount: 780000,
    isLiked: true,
    isFollowed: false,
    commentCount: 112000,
    shareCount: 76000,
    video: "vedios/vedio8.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    caption: "Design is intelligence made visible 🎨",
  },
  {
    name: "Karan Malhotra",
    likeCount: 690000,
    isLiked: false,
    isFollowed: true,
    commentCount: 94000,
    shareCount: 58000,
    video: "vedios/vedio9.mp4",
    profilePhoto:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    caption: "Frontend developer life 😄",
  },
  {
    name: "Noah Smith",
    likeCount: 510000,
    isLiked: true,
    isFollowed: true,
    commentCount: 67000,
    shareCount: 42000,
    video: "vedios/vedio10.mp4",
    profilePhoto: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    caption: "Believe in yourself 🌍",
  },
];

let sum = "";
reels.forEach(function (dets) {
  sum =
    sum +
    `<div class="reels">
            <video autoplay loop muted src="${dets.video}"></video>
            <div class="buttom">
              <div class="user">
                <img src="${dets.profilePhoto}" alt="" />
                <h2>${dets.name}</h2>
                <button>${dets.isFollowed ? "unfollow" : "follow"}</button>
              </div>
              <h3>
                ${dets.caption}
              </h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 class="like me">${dets.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                <span>${dets.likeCount}</span>
              </div>
              <div class="comment">
                <h4 class="comment me"><i class="ri-chat-1-line"></i></h4>
                <span>${dets.commentCount}</span>
              </div>
              <div class="share">
                <h4 class="share me"><i class="ri-share-forward-line"></i></h4>
                <span>${dets.shareCount}</span>
              </div>
              <div class="more">
                <h4 class="more me"><i class="ri-more-2-line"></i></h4>
              </div>
            </div>
          </div>`;
});

let yo = document.querySelector(".myreels");

yo.innerHTML = sum;
// console.log(sum);
