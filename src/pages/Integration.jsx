import React, { useState } from "react";

export default function SpecialOffersPage() {
  const [activeTab, setActiveTab] = useState("create");
  const [formData, setFormData] = useState({
    syncStatus: false,
    title: "",
    audience: "",
  });

  // Sample Live Offers
  const liveOffers = [
    {
      id: 1,
      title: "SALLAH FEST",
      subtitle: "SPECIAL OFFERS",
      discount: "30% OFF",
      description: "ALL CAMPUS STORE ITEMS",
      validUntil: "valid until 3rd april",
    },
    {
      id: 2,
      title: "EASTER FEST",
      subtitle: "SPECIAL OFFERS",
      discount: "30% OFF",
      description: "ALL CAMPUS STORE ITEMS",
      validUntil: "valid until 3rd april",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setFormData((prev) => ({ ...prev, syncStatus: !prev.syncStatus }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Create and manage special offers for students
        </h1>

        {/* TABS */}
        <div className="mb-8 border-b border-gray-200 flex gap-8">
          <button
            onClick={() => setActiveTab("create")}
            className={`pb-2 ${
              activeTab === "create"
                ? "border-b-2 border-gray-900 font-semibold"
                : "text-gray-500"
            }`}
          >
            Create
          </button>

          <button
            onClick={() => setActiveTab("active")}
            className={`pb-2 ${
              activeTab === "active"
                ? "border-b-2 border-gray-900 font-semibold"
                : "text-gray-500"
            }`}
          >
            Active
          </button>
        </div>

        {/* CREATE TAB */}
        {activeTab === "create" && (
          <div className="space-y-8">

            {/* Offer Syncing Status */}
            <div className="bg-white p-6 border rounded shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                Offer Syncing Status
              </h3>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Live Sync: Toggle</span>

                {/* Toggle */}
                <button
                  onClick={handleToggle}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    formData.syncStatus ? "bg-orange-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 bg-white rounded-full transform transition-transform ${
                      formData.syncStatus ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Validity Settings
                </h4>
                <p className="text-sm text-gray-600">
                  Configure when this offer will be active
                </p>
              </div>
            </div>

            {/* Notification Request */}
            <div className="bg-white p-6 border rounded shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                Notification Request
              </h3>

              <label className="text-sm text-gray-700 font-medium block mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter notification title"
                value={formData.title}
                onChange={handleInputChange}
                className="border rounded w-full p-2 mb-4"
              />

              <label className="text-sm text-gray-700 font-medium block mb-1">
                Target Audience
              </label>
              <select
                name="audience"
                value={formData.audience}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    audience: e.target.value,
                  }))
                }
                className="border rounded w-full p-2"
              >
                <option value="">Select Audience</option>
                <option value="all-students">All Students</option>
                <option value="level-100">Level 100</option>
                <option value="level-200">Level 200</option>
                <option value="level-300">Level 300</option>
                <option value="level-400">Level 400</option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              onClick={handleSubmit}
              className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        )}

        {/* ACTIVE TAB */}
        {activeTab === "active" && (
          <div className="mt-6">
            <p className="text-gray-600 mb-6">
              View and manage your active special offers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        )}

        {/* LIVE OFFERS (always under Create tab) */}
        {activeTab === "create" && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Live Offers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* OFFER CARD COMPONENT (Inline, no UI folder) */
function OfferCard({ offer }) {
  return (
    <div className="overflow-hidden border-0 shadow-sm rounded bg-white">
      <div className="bg-orange-500 text-white p-6 text-center">
        <h3 className="text-lg font-bold mb-1">{offer.title}</h3>
        <p className="text-sm font-semibold">{offer.subtitle}</p>
      </div>

      <div className="p-6 text-center border-t border-gray-100">
        <p className="text-2xl font-bold text-orange-500 mb-2">
          {offer.discount}
        </p>
        <p className="text-sm text-gray-700 font-semibold mb-3">
          {offer.description}
        </p>
        <p className="text-xs text-gray-500">{offer.validUntil}</p>
      </div>
    </div>
  );
}
