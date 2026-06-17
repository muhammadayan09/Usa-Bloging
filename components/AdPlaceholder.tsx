interface AdPlaceholderProps {
  slot?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  placement?: "top" | "middle" | "bottom";
}

export default function AdPlaceholder({
  slot = "1234567890",
  format = "auto",
  placement = "middle",
}: AdPlaceholderProps) {
  const heightClass = {
    auto: "min-h-96",
    horizontal: "h-90",
    vertical: "h-600",
    rectangle: "h-250",
  };

  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded my-6 flex items-center justify-center ${heightClass[format]}`}
    >
      <div className="text-center">
        <p className="text-gray-500 font-semibold mb-1">Advertisement</p>
        <p className="text-xs text-gray-400 mb-2">
          {format === "auto" && "Responsive"}
          {format === "horizontal" && "Horizontal"}
          {format === "vertical" && "Vertical"}
          {format === "rectangle" && "Rectangle"}
        </p>
        {/* 
          TODO: Add Google AdSense code here
          Replace this entire div with:
          
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive="true"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <p className="text-xs text-gray-400">Slot: {slot}</p>
      </div>
    </div>
  );
}
