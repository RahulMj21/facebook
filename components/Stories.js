import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Rahul Mondal",
    src: "https://scontent.fccu20-1.fna.fbcdn.net/v/t1.6435-9/120668781_150305696794472_5161131567114385390_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_63G-nxAxM0AX9fvEgy&_nc_ht=scontent.fccu20-1.fna&oh=e78bf04e1459e8ba9aa6872547afa7c8&oe=60E29E2E",
    profile:
      "https://scontent.fccu20-1.fna.fbcdn.net/v/t1.6435-9/120554486_150305606794481_7480229500721281132_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wydtmlR9G3MAX81s0vw&_nc_ht=scontent.fccu20-1.fna&oh=605590ef6bc973bedae7189800ebde2b&oe=60E18358",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard key={index} {...story} />
      ))}
    </div>
  );
};

export default Stories;
