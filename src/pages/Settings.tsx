import React, { useState } from "react";
import {
  Bell,
  BookOpen,
  Building,
  Check,
  Globe,
  KeyRound,
  Lock,
  Mail,
  Palette,
  Save,
  ShieldAlert,
  User,
  Users,
} from "lucide-react";

// Tab types
type TabType = "general" | "notifications" | "security" | "circulation";

interface LibraryConfig {
  libraryName: string;
  email: string;
  contactPhone: string;
  address: string;
  maxBooksPerMember: number;
  loanPeriodDays: number;
  finePerDay: number;
  emailNotifications: boolean;
  smsNotifications: boolean;
  overdueReminders: boolean;
  twoFactorAuth: boolean;
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState<TabType>("general");
  const [isSaved, setIsSaved] = useState(false);

  // Form State
  const [formData, setFormData] = useState<LibraryConfig>({
    libraryName: "LIBRA Central Library",
    email: "admin@libra.org",
    contactPhone: "+250 788 000 000",
    address: "Kigali, Rwanda",
    maxBooksPerMember: 5,
    loanPeriodDays: 14,
    finePerDay: 500,
    emailNotifications: true,
    smsNotifications: false,
    overdueReminders: true,
    twoFactorAuth: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
    { id: "general", label: "General & Info", icon: Building },
    { id: "circulation", label: "Circulation Rules", icon: BookOpen },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security & Access", icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              System Settings
            </h1>
            <p className="text-sm text-slate-500">
              Manage your library parameters, loan policies, and security
              preferences.
            </p>
          </div>

          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-sm"
          >
            {isSaved ? (
              <>
                <Check className="h-4 w-4" />
                <span>Saved Successfully</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Sidebar / Tabs */}
          <div className="lg:col-span-1">
            <nav className="flex space-x-2 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm border border-slate-200/80 lg:flex-col lg:space-x-0 lg:space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-slate-800 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Settings Content Area */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSave} className="space-y-6">
              {/* Tab 1: General Info */}
              {activeTab === "general" && (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">
                      Library Details
                    </h2>
                    <p className="text-xs text-slate-500">
                      Basic information about your institution visible to
                      members.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        Library Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="libraryName"
                          value={formData.libraryName}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        Contact Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        Physical Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Circulation Rules */}
              {activeTab === "circulation" && (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">
                      Circulation & Lending Rules
                    </h2>
                    <p className="text-xs text-slate-500">
                      Set constraints for borrowing limits, duration, and
                      overdue penalties.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        Max Books per Member
                      </label>
                      <input
                        type="number"
                        name="maxBooksPerMember"
                        value={formData.maxBooksPerMember}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        Loan Period (Days)
                      </label>
                      <input
                        type="number"
                        name="loanPeriodDays"
                        value={formData.loanPeriodDays}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        Overdue Fine / Day (RWF)
                      </label>
                      <input
                        type="number"
                        name="finePerDay"
                        value={formData.finePerDay}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Notifications */}
              {activeTab === "notifications" && (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">
                      Automated Alerts
                    </h2>
                    <p className="text-xs text-slate-500">
                      Configure automated communications sent to members and
                      administrators.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-slate-100/80 cursor-pointer">
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-slate-800">
                          Email Notifications
                        </span>
                        <p className="text-xs text-slate-500">
                          Send email confirmations on checkout and return.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={formData.emailNotifications}
                        onChange={handleInputChange}
                        className="h-5 w-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                      />
                    </label>

                    <label className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-slate-100/80 cursor-pointer">
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-slate-800">
                          SMS Alerts
                        </span>
                        <p className="text-xs text-slate-500">
                          Send direct SMS notifications for urgent updates.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        name="smsNotifications"
                        checked={formData.smsNotifications}
                        onChange={handleInputChange}
                        className="h-5 w-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                      />
                    </label>

                    <label className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-slate-100/80 cursor-pointer">
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-slate-800">
                          Automatic Overdue Reminders
                        </span>
                        <p className="text-xs text-slate-500">
                          Trigger email alerts 2 days prior to loan expiry.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        name="overdueReminders"
                        checked={formData.overdueReminders}
                        onChange={handleInputChange}
                        className="h-5 w-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Tab 4: Security */}
              {activeTab === "security" && (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">
                      Security Settings
                    </h2>
                    <p className="text-xs text-slate-500">
                      Manage administrative credentials and authentication
                      controls.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-slate-100/80 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <KeyRound className="h-5 w-5 text-slate-500" />
                        <div>
                          <span className="text-sm font-semibold text-slate-800">
                            Two-Factor Authentication (2FA)
                          </span>
                          <p className="text-xs text-slate-500">
                            Require authenticator app code for admin logins.
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        name="twoFactorAuth"
                        checked={formData.twoFactorAuth}
                        onChange={handleInputChange}
                        className="h-5 w-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                      />
                    </label>

                    <div className="rounded-xl border border-red-100 bg-red-50/50 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-red-700 font-semibold text-sm">
                        <ShieldAlert className="h-4 w-4" />
                        <span>Administrative Password</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Update your administrator account password periodically
                        to ensure system safety.
                      </p>
                      <button
                        type="button"
                        className="rounded-xl bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 transition"
                      >
                        Reset Admin Password
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
