import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-4xl font-bold text-gradient">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Page not found</p>
        <a href="/" className="text-primary font-medium underline-offset-4 hover:underline">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
