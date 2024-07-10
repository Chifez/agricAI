import ReportCard from '@/components/shared/reportCard';
import { BsBellFill } from 'react-icons/bs';

const ReportPage = () => {
  return (
    <section className="p-4  h-screen w-full">
      <nav className="flex items-center justify-between">
        <div className="border-2 border-gray-300 rounded-full p-5 w-5 h-5 flex items-center justify-center">
          <p>JN</p>
        </div>
        <div className="flex items-center gap-2">
          <BsBellFill />

          <div>Date: 23rd November, 2024</div>
        </div>
      </nav>

      <div className="flex items-center justify-center ">
        <div className="flex items-start justify-center gap-6">
          <div className="space-y-4">
            <ReportCard title="FarmerDetails">
              <div className="grid grid-cols-2 gap-2 p-4">
                <span>
                  <p>Okeke John</p>
                  <p>0907343989384</p>
                  <p>okjohn@gmail.com</p>
                </span>

                <span>
                  <p>Location</p>
                  <p>Abuja</p>
                </span>

                <span>
                  <p>Okeke John</p>
                  <p>0907343989384</p>
                  <p>okjohn@gmail.com</p>
                </span>
              </div>
            </ReportCard>

            <ReportCard title="Weather Info">
              <div className="grid grid-cols-2 gap-2 p-4">
                <span>
                  <p>Okeke John</p>
                  <p>0907343989384</p>
                  <p>okjohn@gmail.com</p>
                </span>

                <span>
                  <p>Location</p>
                  <p>Abuja</p>
                </span>
              </div>
            </ReportCard>
          </div>

          <ReportCard title="Plant/HarvestInfo">
            <div className="grid grid-cols-2 gap-2 p-4">
              <span>
                <p>Okeke John</p>
                <p>0907343989384</p>
                <p>okjohn@gmail.com</p>
              </span>

              <span>
                <p>Location</p>
                <p>Abuja</p>
              </span>

              <span>
                <p>Okeke John</p>
                <p>0907343989384</p>
                <p>okjohn@gmail.com</p>
              </span>
            </div>
          </ReportCard>
        </div>
      </div>
    </section>
  );
};
export default ReportPage;
