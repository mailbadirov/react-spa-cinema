import HighOrderButton from "./HighOrderButton";

import { IImageProps, IParagraphProps } from "./types";

const Image = (props: IImageProps) => {
  const { src, alt } = props;

  return <img src={src} alt={alt ?? "alternate text to image"} />;
};

const Text = (props: IParagraphProps) => <p>{props.text}</p>;

export const ButtonnedImage = HighOrderButton(Image);

export const ButtonnedText = HighOrderButton(Text);
