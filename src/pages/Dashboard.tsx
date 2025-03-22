
import { useState } from "react";
import { 
  BarChart3, Shield, Bell, Menu, X, LogOut, Search,
  PieChart, LineChart, BarChart, Clock, FileWarning, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import GlassMorphism from "@/components/GlassMorphism";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const metrics = [
    { label: "Protected Assets", value: "12,543", trend: "+3.2%", icon: Shield, color: "text-blue-500" },
    { label: "Detected Violations", value: "78", trend: "-5.6%", icon: FileWarning, color: "text-red-500" },
    { label: "Takedown Success", value: "97.8%", trend: "+1.2%", icon: CheckCircle, color: "text-emerald-500" },
    { label: "Monitoring Uptime", value: "99.99%", trend: "+0.01%", icon: Clock, color: "text-amber-500" }
  ];

  const recentAlerts = [
    { type: "Watermark Detected", platform: "YouTube", time: "2 hours ago", status: "Verified" },
    { type: "Deepfake Identified", platform: "TikTok", time: "5 hours ago", status: "Under Review" },
    { type: "Unauthorized Usage", platform: "Facebook", time: "Yesterday", status: "Takedown Issued" },
    { type: "Content Manipulation", platform: "Instagram", time: "Yesterday", status: "Verification Needed" },
    { type: "License Violation", platform: "Vimeo", time: "2 days ago", status: "Resolved" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50/50">
      <div className="flex">
        {/* Sidebar */}
        <GlassMorphism
          className={`fixed top-0 bottom-0 left-0 w-64 z-30 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex items-center gap-2 py-4 px-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">ContentShield</span>
            </div>
            
            <div className="mt-8 flex-1">
              <nav className="space-y-1">
                {[
                  { name: "Dashboard", icon: BarChart3, active: true },
                  { name: "Content Monitoring", icon: Shield, active: false },
                  { name: "Analytics", icon: PieChart, active: false },
                  { name: "Takedown Requests", icon: FileWarning, active: false },
                  { name: "Alerts & Notifications", icon: Bell, active: false }
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                      item.active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    } transition-colors`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="mt-auto pt-4 border-t border-border">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Log Out</span>
              </a>
            </div>
          </div>
        </GlassMorphism>
        
        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : ""}`}>
          {/* Top Bar */}
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="flex items-center justify-between h-16 px-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleSidebar}
                  className="h-10 w-10 rounded-md flex items-center justify-center hover:bg-secondary transition-colors md:hidden"
                >
                  {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="h-10 w-64 rounded-md pl-10 pr-4 bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                
                <a
                  href="#"
                  className="relative rounded-full h-10 w-10 bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-background"></span>
                </a>
                
                <Link to="/" className="h-10 flex items-center px-4 rounded-md hover:bg-secondary transition-colors">
                  Home
                </Link>
              </div>
            </div>
          </div>
          
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <AnimatedContainer animation="fade-in" className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <GlassMorphism key={index} className="p-5 rounded-xl hover-scale">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <p className="text-2xl font-semibold mt-1">{metric.value}</p>
                        <div className={`text-xs ${metric.trend.startsWith("+") ? "text-emerald-500" : "text-red-500"} mt-1`}>
                          {metric.trend} from last month
                        </div>
                      </div>
                      <div className={`h-12 w-12 rounded-md flex items-center justify-center ${metric.color.replace("text", "bg")}/10`}>
                        <metric.icon className={`h-6 w-6 ${metric.color}`} />
                      </div>
                    </div>
                  </GlassMorphism>
                ))}
              </div>
            </AnimatedContainer>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <AnimatedContainer animation="slide-up" className="xl:col-span-2">
                <GlassMorphism className="p-5 rounded-xl h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Content Protection Activity</h2>
                    <div className="flex gap-2">
                      {["Day", "Week", "Month", "Year"].map((period) => (
                        <button
                          key={period}
                          className={`px-3 py-1 text-xs rounded-md ${
                            period === "Week" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 h-64 flex items-end justify-between gap-2">
                    {Array.from({ length: 7 }).map((_, index) => {
                      const height = Math.floor(Math.random() * 50) + 30; // Random height between 30-80%
                      return (
                        <div key={index} className="relative flex-1 flex flex-col items-center group">
                          <div className="relative w-full">
                            <div
                              className="w-full bg-blue-500/20 rounded-t-sm transition-all group-hover:bg-blue-500/30"
                              style={{ height: `${height}%` }}
                            ></div>
                            <div
                              className="absolute bottom-0 left-0 w-full bg-blue-500 rounded-t-sm transition-all"
                              style={{ height: `${height * 0.6}%` }}
                            ></div>
                          </div>
                          <span className="mt-2 text-xs text-muted-foreground">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-sm bg-blue-500"></div>
                        <span className="text-xs text-muted-foreground">Detections</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-sm bg-blue-500/20"></div>
                        <span className="text-xs text-muted-foreground">Total Monitoring</span>
                      </div>
                    </div>
                    
                    <button className="text-sm text-primary hover:underline">
                      View detailed report
                    </button>
                  </div>
                </GlassMorphism>
              </AnimatedContainer>
              
              <AnimatedContainer animation="slide-up" delay={100}>
                <GlassMorphism className="p-5 rounded-xl h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium">Protection Breakdown</h2>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      <BarChart className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="relative h-52 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth="10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="10"
                          strokeDasharray="251.2"
                          strokeDashoffset="50"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="10"
                          strokeDasharray="251.2"
                          strokeDashoffset="175"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="10"
                          strokeDasharray="251.2"
                          strokeDashoffset="225"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                    <div className="z-10 text-center">
                      <p className="text-2xl font-semibold">89%</p>
                      <p className="text-sm text-muted-foreground">Protection Rate</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Watermark Detection", value: "45%", color: "bg-blue-500" },
                      { label: "Deepfake Prevention", value: "30%", color: "bg-green-500" },
                      { label: "Blockchain Verification", value: "25%", color: "bg-amber-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-sm ${item.color}`}></div>
                          <span className="text-sm">{item.label}</span>
                        </div>
                        <span className="text-sm font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </GlassMorphism>
              </AnimatedContainer>
            </div>
            
            <AnimatedContainer animation="slide-up" delay={200} className="mt-6">
              <GlassMorphism className="p-5 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium">Recent Alerts</h2>
                  <button className="text-sm text-primary hover:underline">
                    View all alerts
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Type</th>
                        <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Platform</th>
                        <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Time</th>
                        <th className="py-3 px-2 text-left text-sm font-medium text-muted-foreground">Status</th>
                        <th className="py-3 px-2 text-right text-sm font-medium text-muted-foreground">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentAlerts.map((alert, index) => (
                        <tr
                          key={index}
                          className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors"
                        >
                          <td className="py-3 px-2 text-sm">{alert.type}</td>
                          <td className="py-3 px-2 text-sm">{alert.platform}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{alert.time}</td>
                          <td className="py-3 px-2">
                            <span
                              className={`inline-block px-2 py-1 text-xs rounded-full ${
                                alert.status === "Verified" || alert.status === "Resolved"
                                  ? "bg-green-100 text-green-800"
                                  : alert.status === "Under Review" || alert.status === "Verification Needed"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {alert.status}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <button className="text-sm text-primary hover:underline">
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassMorphism>
            </AnimatedContainer>
          </main>
        </div>
      </div>
    </div>
  );
}
