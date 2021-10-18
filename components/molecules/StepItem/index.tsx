import Image from "next/image";

interface StepItemProps {
  icon: "step-1" | "step-2" | "step-3";
  title: string;
  desc1: string;
  desc2: string;
}

function StepItem(props: StepItemProps) {
  const { icon, title, desc1, desc2 } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0 align-items-start">
        <Image src={`/icon/${icon}.svg`} width={80} height={80} className="" alt="icon-step" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}

export default StepItem;
