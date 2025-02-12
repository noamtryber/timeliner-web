
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureRow } from "./types";
import { TableValue } from "./TableValue";

interface TableRowProps {
  row: FeatureRow;
}

export const TableRow = ({ row }: TableRowProps) => {
  const { isRTL } = useLanguage();

  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
      <td className={`p-4 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center gap-2 ${isRTL ? 'justify-end' : ''}`}>
          <span className="text-sm text-white/90">{row.feature}</span>
        </div>
      </td>
      <td className="p-4 text-center">
        <TableValue value={row.free} rowFeature={row.feature} />
      </td>
      <td className="p-4 text-center">
        <TableValue value={row.essentials} rowFeature={row.feature} />
      </td>
      <td className="p-4 text-center">
        <TableValue value={row.studio} rowFeature={row.feature} />
      </td>
      <td className="p-4 text-center">
        <TableValue value={row.enterprise} rowFeature={row.feature} />
      </td>
    </tr>
  );
};
