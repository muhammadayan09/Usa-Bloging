export default function AffiliateDisclosure() {
  return (
    <div className="bg-amber-50 border-l-4 border-accent p-4 my-6">
      <div className="flex gap-3">
        <div className="text-accent text-xl font-bold">⚠️</div>
        <div>
          <h3 className="font-bold text-gray-900 mb-1">Disclosure:</h3>
          <p className="text-sm text-gray-700">
            This post may contain affiliate links. If you buy through our links, we may earn a commission at no extra cost to you. We only recommend products and services we genuinely believe in.{" "}
            <a
              href="/affiliate-disclosure"
              className="text-secondary hover:text-blue-600 font-semibold transition-colors"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
