interface FooterDescriptionProps {
  description: string;
}

export const FooterDescription = ({ description }: FooterDescriptionProps) => {
  return (
    <p className="text-sm text-gray-400 max-w-md">
      {description}
    </p>
  );
};