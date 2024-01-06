interface ChildProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div>{color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
