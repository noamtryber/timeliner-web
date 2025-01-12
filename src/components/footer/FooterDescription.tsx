interface FooterDescriptionProps {
  description: string;
}

export const FooterDescription = ({ description }: FooterDescriptionProps) => {
  return (
    <p className="text-sm text-white max-w-md">
      {description}
    </p>
  );
};