import Username from '@/components/shared/userName';
import { currentDate } from '@/lib/utils/formatDate';
import { BsBellFill } from 'react-icons/bs';

const ReportLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="p-4 h-screen w-full">
      <nav className="flex items-center justify-between">
        <div className="border-2 border-gray-300 rounded-full p-5 w-5 h-5 flex items-center justify-center">
          <Username />
        </div>
        <div className="flex items-center gap-2">
          <BsBellFill />

          <div>Date: {currentDate()}</div>
        </div>
      </nav>

      {children}
    </section>
  );
};
export default ReportLayout;
