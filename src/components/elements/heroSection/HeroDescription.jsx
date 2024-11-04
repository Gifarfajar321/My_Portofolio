const HeroDescription = (props) => {
  const { children } = props;
  return (
    <>
      <p className="font-inter font-light text-sm text-dark md:text-base md:font-medium lg:text-sm xl:text-lg float-right">
        {children}
      </p>
    </>
  );
};

export default HeroDescription;
