const Profile = ({ data }) => {
  return (
    <div className="card">
      <img src={data.img} alt="img" />

      <div className="card-body">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>

      <div className="card-footer">
        <img src="https://i.pravatar.cc/40" alt="avatar" />
        <div>
          <p>{data.author}</p>
          <span>{data.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;