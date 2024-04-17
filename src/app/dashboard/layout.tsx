import DashboardLayoutC from "@/components/dashboardLayout";



export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardLayoutC>{children}</DashboardLayoutC>
    </div>
  );
}
