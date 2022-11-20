import MidNavItem from "./MidNavItem";

const MidNav = ({ items, className }) => {
  return (
    <div className={className}>
      {items?.map((item) => {
        return <MidNavItem key={item.name} item={item} />;
      })}
    </div>
  );
};

export default MidNav;
