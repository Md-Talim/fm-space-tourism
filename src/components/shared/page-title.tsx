interface Props {
  index: number;
  title: string;
}

export const PageTitle = ({ index, title }: Props) => (
  <h1 className="text-preset-5 text-center sm:text-left">
    <span className="text-light/25">0{index}</span> {title}
  </h1>
);
