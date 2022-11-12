interface Props {
  content: string;
}
function Title({ content }: Props) {
  return <h2 className="text-center">{content}</h2>;
}

export default Title;
