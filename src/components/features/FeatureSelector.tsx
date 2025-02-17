
interface FeatureSelectorProps {
  features: any[];
  selectedFeatureId: string;
  onFeatureSelect: (featureId: string) => void;
  isAlternate: boolean;
}

export const FeatureSelector = ({ 
  features, 
  selectedFeatureId, 
  onFeatureSelect,
  isAlternate 
}: FeatureSelectorProps) => {
  return (
    <div className={`col-span-1 md:col-span-2 md:space-y-2 flex flex-col order-1 md:${isAlternate ? 'order-3' : 'order-1'}`}>
      <div className={`grid grid-cols-2 md:grid-cols-1 gap-2 mb-6 md:mb-0 ${features.length === 1 ? 'grid-cols-1 justify-items-center' : ''}`}>
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => onFeatureSelect(feature.id)}
            className={`p-3 rounded-lg transition-all duration-300 flex items-center 
              ${features.length === 1 ? 'w-1/2 mx-auto md:w-full md:mx-0' : 'w-full'}
              ${selectedFeatureId === feature.id 
                ? 'bg-primary/10 font-semibold text-primary' 
                : 'hover:bg-card/50 text-white'
              }
              ${feature.title.includes('WhatsApp') || feature.title.includes('Slack') || feature.title.includes('Transparent Payment Tracking') 
                ? 'justify-start' 
                : 'justify-center md:justify-start'
              }`}
          >
            <span className="text-sm">{feature.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
