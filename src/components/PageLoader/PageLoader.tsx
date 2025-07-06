import { Loader2 } from "lucide-react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
        <FontAwesomeIcon icon={faSpinner} spin className="text-3xl text-indigo-600" />
      </div>
    </div>
  );
}
