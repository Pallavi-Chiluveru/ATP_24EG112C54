import Profile from "./Profile";

const profilesData = [
  {
    title: "News App using ReactJS",
    desc: "Parsing XML RSS feed to JSON",
    author: "Mukul Kohli",
    date: "Aug 12, 2020",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Blog App using Angular",
    desc: "Medium like blogging app",
    author: "Vishal Kohli",
    date: "Jul 18, 2020",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
  {
    title: "COVID Tracker App",
    desc: "Statistics dashboard",
    author: "Mukul Kohli",
    date: "Apr 06, 2020",
    img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
  }
];

const Profiles = () => {
  return (
    <div className="profiles">
      {profilesData.map((item, index) => (
        <Profile key={index} data={item} />
      ))}
    </div>
  );
};

export default Profiles;