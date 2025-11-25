import { useState } from "react"
import Profile from "../assets/profile2.png"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showModal, setShowModal] = useState(null)
  const [profileName, setProfileName] = useState("Joey Hart")
  const [username, setUsername] = useState("Joey Hart")
  const [status, setStatus] = useState("Worker")

  const handleSaveChanges = () => {
    console.log("Changes saved:", { profileName, username, status })
    setShowModal(null)
  }

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "appearance", label: "Appearance" },
    { id: "notification", label: "Notification" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-48 flex-shrink-0">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.id === "profile") {
                      setActiveTab("profile")
                    } else {
                      setShowModal(tab.id)
                    }
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id && tab.id === "profile"
                      ? "bg-gray-200 text-black font-medium"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
                {/* Profile Picture Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-6">Profile picture</h2>
                  <div className="flex gap-9 items-center justify-between">
                    <div className="flex items-center gap-9">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center overflow-hidden">
                        <img
                          src={Profile}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <button className="bg-orange-400 hover:bg-yellow-500 text-white px-6 py-1 w-[100%] rounded-lg transition-colors">
                      Change profile
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-200"></div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Profile name</label>
                    <input
                      type="text"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      className="w-full bg-gray-100 border border-gray-200 text-gray-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Username</label>
                    <input
                      type="text"
                      value={`@${username}`}
                      onChange={(e) => setUsername(e.target.value.replace("@", ""))}
                      className="w-full bg-gray-100 border border-gray-200 text-gray-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Status</label>
                    <input
                      type="text"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full bg-gray-100 border border-gray-200 text-gray-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleSaveChanges}
                    className="bg-orange-300 hover:bg-amber-400 text-white px-8 py-2 rounded-lg transition-colors"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Appearance & Notification */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-8 relative">
            <button
              onClick={() => setShowModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>

            {showModal === "appearance" && (
              <div className="text-center text-gray-500 py-12">
                <p>Appearance settings coming soon</p>
              </div>
            )}

            {showModal === "notification" && (
              <div className="text-center text-gray-500 py-12">
                <p>Notification settings coming soon</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
