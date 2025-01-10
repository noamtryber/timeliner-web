import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    feature: "Project Management",
    replaces: "Monday.com",
    cost: "$30/month",
  },
  {
    feature: "Revisions Workflow",
    replaces: "Frame.io",
    cost: "$15/month/user",
  },
  {
    feature: "Client Portals",
    replaces: "Client Portal",
    cost: "$19/month",
  },
  {
    feature: "Cloud Storage",
    replaces: "Dropbox",
    cost: "$10/month for 1TB",
  },
  {
    feature: "Contracts & Legal Docs",
    replaces: "Docusign",
    cost: "$20/month",
  },
  {
    feature: "Automation & Workflows",
    replaces: "Zapier",
    cost: "$29/month",
  },
  {
    feature: "Receipt & Invoicing",
    replaces: "QuickBooks",
    cost: "$15-$25/month",
  },
];

export const ComparisonTable = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
          
          {tools.map((tool, index) => (
            <div key={index} className="relative glass border border-white/10 p-4 rounded-lg">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-white">{tool.feature}</h3>
                  <Check className="text-primary" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
                  <div>Replaces:</div>
                  <div className="text-right">{tool.replaces}</div>
                  <div>Their Cost:</div>
                  <div className="text-right">{tool.cost}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="relative glass border border-white/10 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="font-bold text-white">Total Cost</div>
              <div className="text-right text-white/70 font-bold">$138+/month</div>
              <div className="font-bold text-white">Timeliner Cost</div>
              <div className="text-right font-bold text-primary">$19-$39/month</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-lg">
      <div className="relative">
        {/* Gradient shadow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
        
        <Table className="relative glass border border-white/10">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-white">Features</TableHead>
              <TableHead className="text-white">Replaces</TableHead>
              <TableHead className="text-white">Other Tools' Cost</TableHead>
              <TableHead className="text-white text-center bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40">
                Timeliner
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tools.map((tool, index) => (
              <TableRow
                key={index}
                className="transition-colors hover:bg-white/5 cursor-pointer group"
              >
                <TableCell className="font-medium text-white">
                  {tool.feature}
                </TableCell>
                <TableCell className="text-white/70">{tool.replaces}</TableCell>
                <TableCell className="text-white/70">{tool.cost}</TableCell>
                <TableCell className="text-center">
                  <Check className="mx-auto text-primary group-hover:text-accent transition-colors" />
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="hover:bg-transparent border-t-2 border-white/10">
              <TableCell colSpan={2} className="font-bold text-white">
                Total Cost
              </TableCell>
              <TableCell className="text-white/70 font-bold">$138+/month</TableCell>
              <TableCell className="text-center font-bold text-primary">
                $19-$39/month
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};