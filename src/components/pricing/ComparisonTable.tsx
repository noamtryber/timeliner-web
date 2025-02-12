
import { useLanguage } from "@/contexts/LanguageContext";
import { getFeatureData } from "./featureData";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

const ComparisonTable = () => {
  const { language, isRTL } = useLanguage();
  const features = getFeatureData(language);

  return (
    <div className={`w-full overflow-x-auto ${isRTL ? 'rtl' : 'ltr'}`}>
      <table className="w-full min-w-[800px]">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {features.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
