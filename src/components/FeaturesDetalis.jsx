const FeaturesDetalis = ({ camper }) => {
  if (!camper) return null;
  const specs = [
    { label: "Form", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <section className="p-6   ">
      <h3 className="text-lg font-semibold text-black mb-4">Vehicle details</h3>
      <hr className="border border-lightGray mb-4" />
      <ul className="space-y-3 text-sm text-black">
        {specs.map(({ label, value }) => (
          <li key={label} className="flex justify-between">
            <span className="text-darkGray">{label}</span>
            <span className="font-medium capitalize">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturesDetalis;
