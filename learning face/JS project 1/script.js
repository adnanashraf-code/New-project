let users = [
  {
    fullName: "Olivia Johnson",
    tag: "@olivia.codes",
    profession: "Frontend Developer",
    description:
      "Passionate frontend developer who loves building clean UI and smooth user experiences.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fullName: "Ethan Williams",
    tag: "@ethan.dev",
    profession: "Backend Engineer",
    description:
      "Backend engineer focused on APIs, databases, and scalable server-side systems.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    fullName: "Sophia Martinez",
    tag: "@sophia.designs",
    profession: "UI/UX Designer",
    description:
      "Creative designer who turns complex problems into simple and beautiful designs.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    fullName: "Noah Anderson",
    tag: "@noah.builds",
    profession: "Full Stack Developer",
    description:
      "Full stack developer working with JavaScript, Node.js, and modern frameworks.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    fullName: "Ava Thompson",
    tag: "@ava.ai",
    profession: "AI Enthusiast",
    description:
      "AI enthusiast exploring machine learning, automation, and smart applications.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

let me = " ";

users.forEach(function (dets) {
  me =
    me +
    `<div id="card">
        <img
          src="${dets.image}"
          alt=""
        />
        <h2>${dets.fullName}</h2>
        <h3>${dets.profession}</h3>
        <p>
          ${dets.description}
        </p>
      </div>`;
      let main = document.querySelector("#main");
});

let card= document.querySelector('#card')

      main.innerHTML = me;
