/* eslint-disable react/prop-types */
const Header = ({ title }) => (
  <div className="flex gap-[20px] mb-[25px] items-center">
    <p className="text-3xl font-extrabold tracking-tight text-teal-500">
      {title}
    </p>
    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170679.png" alt="" className="h-[30px] "  />
  </div>
);

export default Header;
