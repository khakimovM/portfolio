const SkillItem = ({ logo }: { logo: any }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-opacity-30 bg-cyan-100 border border-cyan-400 shadow-md rounded-lg hover:scale-105 transition-transform">
      <img
        src={logo}
        alt="skill-logo"
        className="w-[200px] h-[200px] object-contain"
      />
    </div>
  );
};

export default SkillItem;
