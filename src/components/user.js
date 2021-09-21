// import Data from "../data";
const User = ({ id, image, name, job }) => {
  return (
    <>
      <div key={id} className="col-12 col-md-4 p-2 mx-auto">
        <div className="p-3 border py-5">
          <img src={image} alt="USER" className="user-pic" />
          <h3 className="pt-3">{name}</h3>
          <h6 className="text-secondary">{job}</h6>
        </div>
      </div>
    </>
  );
};
export default User;
