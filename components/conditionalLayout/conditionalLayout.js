import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

export default function ConditionalLayout({ children, pathname }) {
  const excludedRoutes = ["/login"];
  const shouldShowNavbarAndSidebar = !excludedRoutes.includes(pathname);

  return (
    <>
      {shouldShowNavbarAndSidebar && <Navbar />}
      <div className="flex">
        {shouldShowNavbarAndSidebar && <Sidebar />}
        <div
          className={`flex flex-col w-full h-screen ${
            shouldShowNavbarAndSidebar ? "mt-[60px]" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
