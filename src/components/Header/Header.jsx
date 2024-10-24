import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="container py-8 mb-6 border-b border-gray-200 flex justify-between items-center">
      <h1 className="font-accent text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
