import { FC } from "react";

interface IMinimap {
  title: string;
  list: { label: string; link: string }[]; //need links for when we add navigation or actions
}

const Minimap: FC<IMinimap> = ({ title, list }) => {
  return (
    <div className="flex-auto lg:flex-1 flex flex-col items-start gap-[15px] min-w-[145px]">
      <h1 className="text-[16px]">{title}</h1>
      <div className="flex flex-col gap-[10px] items-start text-[14px] text-[#8898B0]">
        {list.map(({ label }, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default Minimap;
