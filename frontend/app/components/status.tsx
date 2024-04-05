import { Loader2, CheckCircle } from "lucide-react";

export interface EventData {
  status: string;
  message: string;
}

interface StatusProps {
  data: EventData[];
}

const iconSize = 18;

const statusToIcon = {
  loading: <Loader2 className="" size={iconSize} />,
  done: <CheckCircle className="text-green-600" size={iconSize} />,
};

const Status: React.FC<StatusProps> = ({ data }) => {
  if (!data) return;
  return (
    <div className="flex flex-col gap-5 items-start mt-2">
      {data.map((eventData, idx) => (
        <div key={idx} className="flex gap-1 text-sm text-gray-600">
          <span className="mx-1">{statusToIcon[eventData.status]}</span>
          {eventData.message}
        </div>
      ))}
    </div>
  );
};

export default Status;
